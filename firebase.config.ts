import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

const loadDB = () => {
  try {
    firebase.initializeApp(config)
  } catch (error) {
    if (!/already exist/.test(error.message)) {
      console.error('Firebase initialization error ', error.stack)
    }
  }
  return firebase
}

const fb = loadDB()
export const db = fb.firestore()
