import React, {Component} from "react";
import firebase from "firebase";
import {RunfinityNavbar} from "./components/Navbar";
import {History} from "./components/History";
import logoutIcon from "./images/logout.png";
import historyIcon from "./images/history.png";
import overviewIcon from "./images/overview.png";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText, expanded} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import styled from 'styled-components';


const API_SERVER = "https://api.runfinity.co.nz";

const NavHeader = styled.div`
    display: ${props => (props.expanded ? 'block' : 'none')};
    white-space: nowrap;
    background-color: #db3d44;
    color: #fff;

    > * {
        color: inherit;
        background-color: inherit;
    }
`;

const NavTitle = styled.div`
    font-size: 2em;
    line-height: 20px;
    padding: 10px 0;
`;

//const API_SERVER = "http://localhost:3020";
momentDurationFormatSetup(moment);

export class MemberPortal extends Component {
    constructor(props) {
        super(props);
        this.state = {isOverviewOpen: true, isHistoryOpen: false};

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

    showOverview() {
        this.setState({isOverviewOpen: true, isHistoryOpen: false});
    }

    showHistory() {
        this.setState({isOverviewOpen: false, isHistoryOpen: true});
    }

    render() {
        let user = this.state.fireUser;


        if (user) {
            return (
                <div>
                    <RunfinityNavbar/>

                    <SideNav
                        onSelect={this.onSelect}
                        onToggle={this.onToggle}>
                        <SideNav.Toggle/>
                        <NavHeader expanded={expanded}>
                            <NavTitle>{user.displayName}</NavTitle>
                        </NavHeader>
                        <SideNav.Nav defaultSelected="overview">
                            <NavItem eventKey="overview" onClick={() => {
                                this.showOverview()
                            }}>
                                <NavIcon>
                                    <img src={overviewIcon} />
                                </NavIcon>
                                <NavText>
                                    Overview
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="history" onClick={() => {
                                this.showHistory()
                            }}>
                                <NavIcon>
                                    <img src={historyIcon}/>
                                </NavIcon>
                                <NavText>
                                    History
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="logout" onClick={() => {
                                this.logOut()
                            }}>
                                <NavIcon>
                                    <img src={logoutIcon}  />
                                </NavIcon>
                                <NavText>
                                    Logout
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>

                    <img className={"carousel-info"} src={user.photoURL} alt={user.displayName}/>

                    <div>
                        {this.state.isHistoryOpen && <History/>}
                        {/*{this.state.isOverviewOpen && <Overview/>}*/}
                    </div>

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
