import React, {Component} from "react";
import firebase from "firebase";
import {RunfinityNavbar} from "./components/Navbar";
import {History} from "./components/History";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const API_SERVER = "https://api.runfinity.co.nz";

//const API_SERVER = "http://localhost:3020";
momentDurationFormatSetup(moment);

export class MemberPortal extends Component {

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

    showHistory() {
        return <History/>
    }

    render() {
        let user = this.state.fireUser;

        if (user) {
            return (
                <div>
                    <RunfinityNavbar/>

                    <SideNav>
                        <SideNav.Toggle/>
                        <SideNav.Nav defaultSelected="overview">
                            <NavItem eventKey="overview">
                                <NavIcon>
                                    <i className="fa fa-fw fa-overview" style={{fontSize: '1.75em'}}/>
                                </NavIcon>
                                <NavText>
                                    Overview
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="history" onClick={() => {
                                this.showHistory()
                            }}>
                                <NavIcon>
                                    <i className="fa fa-fw fa-history" style={{fontSize: '1.75em'}}/>
                                </NavIcon>
                                <NavText>
                                    History
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="signout" onClick={() => {
                                this.logOut()
                            }}>
                                <NavIcon>
                                    <i className="fa fa-fw fa-signout" style={{fontSize: '1.75em'}}/>
                                </NavIcon>
                                <NavText>
                                    Sign Out
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>

                    <img className={"carousel-info"} src={user.photoURL} alt={user.displayName}/>
                    <h1>{user.displayName}</h1>

                    <div>
                        <style>
                            {
                                `.carousel-info {
                                     border: 3px solid orange;
                                      border-radius: 100px !important;
                                      height: 150px;
                                    padding: 0px;
                                     width: 150px;
                                    }`
                            }
                        </style>
                    </div>
                </div>
            );
        }
        return false;
    }
}
