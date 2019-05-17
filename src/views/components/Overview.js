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

const API_SERVER = "https://api.runfinity.co.nz";

//const API_SERVER = "http://localhost:3020";
momentDurationFormatSetup(moment);

export class Overview extends Component {
    constructor(props) {
        super(props);

        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                fireUser: user
            });

            console.log(user.uid);

            fetch(API_SERVER + "/getCloudDatabase" + "/" + user.uid)
                .then((data) => {
                    return data.json();
                }).then((data) => {

                let calories = this.state.caloriesTotal;
                let distance = this.state.distanceTotal;
                let averageSpeed = this.state.averageSpeedTotal;
                let steps = this.state.stepsTotal;

                data.forEach(function (userData) {
                    console.log("cals:" +userData.calories)
                    calories += userData.calories;
                    console.log("dist:" +userData.distance)
                    distance += userData.distance;
                    console.log("speed:" +userData.averageSpeed)
                    averageSpeed += userData.averageSpeed;
                    console.log("Steps:" + userData.steps)
                    steps += userData.steps;
                });

                this.state.caloriesTotal = calories;
                this.state.distanceTotal = distance;
                this.state.averageSpeedTotal = averageSpeed;
                this.state.stepsTotal = steps;

                this.setState({
                    userData: data
                });
            }).catch((error) => {
                console.log("catch", error)
            })
        });

        this.state = {
            userData: null,
            fireUser: null,
            caloriesTotal: null,
            distanceTotal: null,
            averageSpeedTotal: null,
            stepsTotal: null,
        }
    }

    render() {
        let user = this.state.fireUser;
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
        let runs = this.state.userData;

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
            return <div>
                {this._renderCardData()}
            </div>
        }
    }

    _renderCardData() {
        return (
            <div className="container">
                <div
                    className="container">
                    <Card>
                        <CardBody>
                            <Container>
                                <Row>

                                    <Col>
                                        <img
                                            src={distanceIcon}/>
                                        <p>{this.state.distanceTotal} m</p>
                                        <p>Distance</p>
                                    </Col>

                                    <Col>
                                        <img
                                            src={caloriesIcon}/>
                                        <p>{this.state.caloriesTotal}</p>
                                        <p>Calories</p>
                                    </Col>

                                    <Col>
                                        <img
                                            src={stepsIcon}/>
                                        <p>{this.state.stepsTotal}</p>
                                        <p>Steps</p>
                                    </Col>

                                    <Col>
                                        <img
                                            src={paceIcon}/>
                                        <p>{this.state.averageSpeedTotal}</p>
                                        <p>Pace</p>
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
