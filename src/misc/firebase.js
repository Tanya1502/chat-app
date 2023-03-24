import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDOhgpqf2j9s4jBjPbU0Rk0nwo-wz-sz1U',
  authDomain: 'chat-web-app-48385.firebaseapp.com',
  databaseURL: 'https://chat-web-app-48385-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-48385',
  storageBucket: 'chat-web-app-48385.appspot.com',
  messagingSenderId: '441288594760',
  appId: '1:441288594760:web:c1311d7069376c30580f7d',
};

const app = firebase.initializeApp(config);
