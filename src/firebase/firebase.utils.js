import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCwiqcFxti1Oq54mffGscnA39XGVef-Tb4",
  authDomain: "diabetes-dashboard-react.firebaseapp.com",
  databaseURL: "https://diabetes-dashboard-react.firebaseio.com",
  projectId: "diabetes-dashboard-react",
  storageBucket: "diabetes-dashboard-react.appspot.com",
  messagingSenderId: "566252382724",
  appId: "1:566252382724:web:55f1f42980b87b8b54e351",
  measurementId: "G-4LHTE2PT3P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;