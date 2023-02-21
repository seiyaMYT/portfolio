import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css" //　追加
import VueRouter from "./router/index";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN3YwnXTRoEsYoPrU2MMKH12b_i1Bz_GA",
  authDomain: "miyataport.firebaseapp.com",
  projectId: "miyataport",
  storageBucket: "miyataport.appspot.com",
  messagingSenderId: "886664945604",
  appId: "1:886664945604:web:5dd616c422221e3df94e91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app"); // 変更
