import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNcEeZ5lqnN253CUcEyJdNT0aXBJwrVBE",
    authDomain: "streamverse-61c9c.firebaseapp.com",
    projectId: "streamverse-61c9c",
    storageBucket: "streamverse-61c9c.appspot.com",
    messagingSenderId: "108068395812",
    appId: "1:108068395812:web:debc5f21dffbca3fbef1b1",
    measurementId: "G-FQRPQHYY1X"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);