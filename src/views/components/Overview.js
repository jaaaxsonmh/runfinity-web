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
import {roundNumber} from "../../utils/utils";


//const API_SERVER = "http://localhost:3020";
momentDurationFormatSetup(moment);

export class Overview extends Component {
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
      return (<div>
          {this._renderCardData()}
        </div>
      );
    }
  }

  _renderCardData() {
    return (
      <div className="container">
        <div
          className="container">
          <Card>
            <h3>Total statistic</h3>
            <CardBody>
              <Container>
                <Row>

                  <Col>
                    <img
                      src={distanceIcon}/>
                    <p>{roundNumber(this.props.totals.distance)} m</p>
                    <p>Distance</p>
                  </Col>

                  <Col>
                    <img
                      src={caloriesIcon}/>
                    <p>{roundNumber(this.props.totals.calories)}</p>
                    <p>Total Calories burned</p>
                  </Col>

                  <Col>
                    <img
                      src={stepsIcon}/>
                    <p>{roundNumber(this.props.totals.steps)}</p>
                    <p>Steps</p>
                  </Col>

                  <Col>
                    <img
                      src={paceIcon}/>
                    <p>{roundNumber(this.props.totals.averageSpeed)} km/h</p>
                    <p>Average Pace</p>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
