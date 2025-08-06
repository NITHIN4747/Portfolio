import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZeZP7S5NLbuSZFFOMyD8k4gZSKv8rC14",
  authDomain: "portfolio-contact47.firebaseapp.com",
  projectId: "portfolio-contact47",
  storageBucket: "portfolio-contact47.firebasestorage.app",
  messagingSenderId: "1071427889671",
  appId: "1:1071427889671:web:4ed032f376973433b258a2",
  measurementId: "G-TXGBCZ0SCW"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null

export default app

