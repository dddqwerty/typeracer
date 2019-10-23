const admin = require("firebase-admin");
const serviceAccount = require("../typeracer-256813-firebase-adminsdk-0e7hs-3ee71b3d69.json");

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();
// const firebaseConfig = {
//     apiKey: "AIzaSyDzX2ZsCNo_LIntdlWfXwyy4lzx73kcRGo",
//     authDomain: "typeracer-256813.firebaseapp.com",
//     databaseURL: "https://typeracer-256813.firebaseio.com",
//     projectId: "typeracer-256813",
//     storageBucket: "typeracer-256813.appspot.com",
//     messagingSenderId: "31916500399",
//     appId: "1:31916500399:web:95beca19cdd7ee98257b5a",
//     measurementId: "G-KPVP3YXMPM"
//   };

// firebase.initializeApp(firebaseConfig);


module.exports = { db };
