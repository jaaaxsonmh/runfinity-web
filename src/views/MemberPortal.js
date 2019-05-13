import React, { Component } from "react";
import firebase from "firebase";

export class MemberPortal extends Component {
    constructor(props) {
        super(props);
    }

    logOut() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div>
    <h1> you have logged in</h1>
                <button onClick={this.logOut.bind(this)}> Sign Out > </button>
            </div>
        );
    }
}
