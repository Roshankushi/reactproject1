import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDHYWfHl4xLqJI40o_-XkN7CfvS3YHqEW8",
    authDomain: "reactdemo1-dad41.firebaseapp.com",
    databaseURL: "https://reactdemo1-dad41.firebaseio.com",
    projectId: "reactdemo1-dad41",
    storageBucket: "reactdemo1-dad41.appspot.com",
    messagingSenderId: "593425115295"
  };

let app = Firebase.initializeApp(config);
 export const db =app.database();