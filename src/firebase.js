import { initializeApp } from "firebase/app"

import { getFirestore } from "firebase/firestore"

import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCRi9WXwNLHsn22Sn_0lh_z-84eAp1DhMM",
  authDomain: "spotify-clone-262bc.firebaseapp.com",
  projectId: "spotify-clone-262bc",
  storageBucket: "spotify-clone-262bc.appspot.com",
  messagingSenderId: "216854051676",
  appId: "1:216854051676:web:d949fcdfa44ea39da89f99",
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

export { app, db, auth }
