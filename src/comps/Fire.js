import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDSJyI3q9PfCSoMIaOIIaGk9_SIZ9pZvc",
  authDomain: "playstack-5155f.firebaseapp.com",
  projectId: "playstack-5155f",
  storageBucket: "playstack-5155f.appspot.com",
  messagingSenderId: "1073723890883",
  appId: "1:1073723890883:web:c1691b3772a9f2f4de5676"
});

const db = firebaseApp.firestore()
const Fire = firebaseApp

export { db, Fire } 
