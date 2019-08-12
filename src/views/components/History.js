import React, {Component} from "react";
import firebase from "firebase";
import {
  Alert, Button,
  Card,
  CardBody, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row, Spinner
} from "reactstrap";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import polyUtil from 'polyline-encoded';

import caloriesIcon from "../images/calories.svg";
import distanceIcon from "../images/road.svg";
import timeIcon from "../images/time.svg";
import stepsIcon from "../images/steps.svg";
import paceIcon from "../images/pace.svg";
import {roundNumber} from "../../utils/utils";
import MapContainer from "./RunPreview";

momentDurationFormatSetup(moment);

export class History extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mapPreview: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      mapPreview: !prevState.mapPreview
    }));
  }

  render() {
    let user = this.props.fireUser;
    if (user) {
      return (
        <div>
          {this._renderRuns()}
          {this._renderMapPreview()}
        </div>
      );
    }
    return false;
  }

  _renderRuns() {
    let runs = this.props.userData;

    if (runs == null) {
      return (
        <div className="container">
          {/*<Progress bar animated color="success" value="100">Loading data</Progress>*/}
          <Spinner color="warning"/>
        </div>
      );
    } else if (runs.length <= 0) {
      return (
        <Alert color="warning">
          No run history retrieved. Data sync is in progress
        </Alert>
      );
    } else {
      return (
        <div>
          {this._renderRunData()}
        </div>
      );
    }
  }

  _renderRunData() {
    let data = this.props.userData;
    // https://static.runfinity.co.nz/maps/api/staticmap?size=400x400&path=weight:3%7Ccolor:blue%7Cenc:ha}_F}eui`@JD

    return (
      <div className="container">

        {
          data.map((runData) => {

            let startRunDate = moment(runData.startTime);
            let endRunDate = moment(runData.endTime);

            let runDate = startRunDate.format('ddd Do MMMM h:mm:ss a');

            let runDuration = moment.duration(endRunDate.diff(startRunDate));


            let steps = runData.steps;
            let cals = roundNumber(runData.calories);
            let distance = roundNumber(runData.distance);
            let pace = runData.averageSpeed;


            let encodedPath = this._encodeRunPath(runData);
            let pathPoly = this._getPathData(runData);


            console.log("encodedPath:", encodedPath)


            return (
              <div
                className="container"
                key={runData._id}>
                <Card>
                  <CardBody>
                    <img
                      className={"rounded-circle"}
                      src={`https://static.runfinity.co.nz/maps/api/staticmap?size=400x400&path=weight:3%7Ccolor:blue%7Cenc:${encodedPath}`}/>
                    <br/>
                    <Button
                      outline
                      onClick={() => {

                        // this.setState({
                        //   pathPoly: pathPoly
                        // });

                        this.state.pathPoly = pathPoly;

                        this.toggle()
                      }}
                      color="primary">Open map</Button>{' '}
                    <h5 align={"left"}>{runDate}</h5>

                    <hr/>

                    <Container>
                      <Row>

                        <Col>
                          <img
                            src={distanceIcon}/>
                          <p>{distance} m</p>
                          <p>Distance</p>
                        </Col>

                        <Col>
                          <img
                            src={timeIcon}/>
                          <p>{this._buildRunDuration(runDuration)}</p>
                          <p>Duration</p>
                        </Col>

                        <Col>
                          <img
                            src={caloriesIcon}/>
                          <p>{cals}</p>
                          <p>Calories</p>
                        </Col>

                        <Col>
                          <img
                            src={stepsIcon}/>
                          <p>{steps}</p>
                          <p>Steps</p>
                        </Col>

                        <Col>
                          <img
                            src={paceIcon}/>
                          <p>{pace} km/h</p>
                          <p>Pace</p>
                        </Col>

                      </Row>

                    </Container>

                  </CardBody>
                </Card>
              </div>
            );
          })
        }

      </div>
    );
  }

  _renderMapPreview() {
    return (
      <Modal
        isOpen={this.state.mapPreview}
        size={"lg"}
        toggle={this.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.toggle}>Your run preview</ModalHeader>

        <MapContainer
          pathPoly={this.state.pathPoly}/>

      </Modal>
    );
  }

  _buildRunDuration(duration) {
    return duration.format("hh [hrs] mm [min] ss [secs]");
  }

  _encodeRunPath(runData) {
    let latlngs = [];
    runData.locationPoints.forEach((point) => {
      latlngs.push([point.latLng.latitude, point.latLng.longitude])
    });

    return polyUtil.encode(latlngs);
  }

  _getPathData(runData) {
    let latlngs = [];
    runData.locationPoints.forEach((point) => {
      latlngs.push({lat: point.latLng.latitude, lng: point.latLng.longitude})
    });

    return latlngs;
  }
}
