import { initializeApp } from "firebase/app"

const firebaseConfig = {
	apiKey: "AIzaSyAnfGRTa38S8VnuvWEIaN9hJTJGCuEml9I",
	authDomain: "fir-practice-62010.firebaseapp.com",
	projectId: "fir-practice-62010",
	storageBucket: "fir-practice-62010.appspot.com",
	messagingSenderId: "1089846475184",
	appId: "1:1089846475184:web:f7d8c420609dadd264fe75",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
