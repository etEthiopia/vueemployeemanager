import firebase from "firebase"
import 'firebase/firestore'
import firebaseconfig from "./FirebaseConfig"
const firebaseApp = firebase.initializeApp(firebaseconfig)
export default firebaseApp.firestore() 