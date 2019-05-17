import React, {Component} from "react";
import firebase from "firebase";
import {
  Alert,
  Card,
  CardBody, Col, Container, Row, Spinner
} from "reactstrap";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import polyUtil from 'polyline-encoded';

import caloriesIcon from "../images/calories.svg";
import distanceIcon from "../images/road.svg";
import timeIcon from "../images/time.svg";
import stepsIcon from "../images/steps.svg";
import paceIcon from "../images/pace.svg";

momentDurationFormatSetup(moment);

export class History extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.fireUser;
    if (user) {
      return (
        <div>
          {this._renderRuns()}
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
            let cals = Math.round(runData.calories * 100) / 100;
            let distance = Math.round(runData.distance * 100) / 100;
            let pace = runData.averageSpeed;


            let encodedPath = this._encodeRunPath(runData);

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
                          <p>{pace}</p>
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
}
