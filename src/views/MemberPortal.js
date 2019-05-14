import React, {Component} from "react";
import firebase from "firebase";
import {RunfinityNavbar} from "./components/Navbar";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  ListGroup, ListGroupItem,
  Progress, Spinner
} from "reactstrap";
import moment from "moment";
import {RunfinityFooter} from "./components/Footer";

const API_SERVER = "https://api.runfinity.co.nz";
//const API_SERVER = "http://localhost:3020";


export class MemberPortal extends Component {

  constructor(props) {
    super(props);

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        fireUser: user
      });

      console.log(user.uid)

      fetch(API_SERVER + "/getCloudDatabase" + "/" + user.uid)
        .then((data) => {
          return data.json();
        }).then((data) => {

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
    }

  }

  logOut() {
    firebase.auth().signOut();
  }

  render() {
    let user = this.state.fireUser;

    if (user) {
      return (
        <div>
          <RunfinityNavbar/>

          <img src={user.photoURL} alt={user.displayName}/>
          <h1>{user.displayName}</h1>

          <button onClick={() => {
            this.logOut()
          }}>Logout
          </button>

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
        {this._renderRunData()}
      </div>
    }
  }

  _renderRunData() {
    let data = this.state.userData;
    return (
      <div className="container">

        {
          data.map((runData) => {

            let runDate = moment(runData.startTime).format('ddd Do MMMM');

            let steps = runData.steps;
            let cals = Math.round(runData.calories * 100) / 100;
            let distance = Math.round(runData.distance * 100) / 100;
            let pace = runData.averageSpeed;

            return (
              <div
                className="container"
                key={runData._id}>
                <Card>
                  <CardBody>
                    <h5 align={"left"}>{runDate}</h5>

                    <hr/>

                    <h5 align={"left"}>Steps: {steps}</h5>
                    <h5 align={"left"}>Calories: {cals}</h5>
                    <h5 align={"left"}>Distance: {distance}</h5>
                    <h5 align={"left"}>Pace: {pace}</h5>


                  </CardBody>
                </Card>
              </div>
            );
          })
        }

      </div>
    );
  }
}
