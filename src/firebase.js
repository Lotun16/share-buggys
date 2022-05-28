import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCb76Dl6ck3G-UHrhkPOxdwE2vk9a8Jclk",
    authDomain: "auth-vyrmin.firebaseapp.com",
    projectId: "auth-vyrmin",
    storageBucket: "auth-vyrmin.appspot.com",
    messagingSenderId: "485956282390",
    appId: "1:485956282390:web:43b902440716fbe93cad37"
  };

const fireApp = initializeApp(firebaseConfig);


export const auth = getAuth(fireApp);
export default fireApp;