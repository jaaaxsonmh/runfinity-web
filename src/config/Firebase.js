import firebase from 'firebase';

const config = {
        // Firebase config
        apiKey: "AIzaSyB_YtR1d8gnrtSJgkZUvQhHyZF-gGsmsTA",
        authDomain: "runfinity-sdp.firebaseapp.com",
        databaseURL: "https://runfinity-sdp.firebaseio.com",
        projectId: "runfinity-sdp",
        storageBucket: "runfinity-sdp.appspot.com",
        messagingSenderId: "410367407987",
        appId: "1:410367407987:web:fb19520d53c2c5d8"
};

const fire = firebase.initializeApp(config);
export default fire;