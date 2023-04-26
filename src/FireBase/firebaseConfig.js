import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const app = initializeApp({
    apiKey: "AIzaSyDGhstoy-xuD-OnCUcVSW1RfReizHfZV64",
    authDomain: "share-2f46a.firebaseapp.com",
    projectId: "share-2f46a",
    storageBucket: "share-2f46a.appspot.com",
    messagingSenderId: "291201724339",
    appId: "1:291201724339:web:f802a461f61ac02d6aa5c6",
    measurementId: "G-CGEPW4T7QT"
    })
const storage = getStorage(app)

export default storage

