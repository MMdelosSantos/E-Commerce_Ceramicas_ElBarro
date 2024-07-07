// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { productos } from "../data/asyncMock"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD78LQOte2dDC4yIcdo9GuUXQvJOjRTWuU",
    authDomain: "tienda-ceramicas-el-barro.firebaseapp.com",
    projectId: "tienda-ceramicas-el-barro",
    storageBucket: "tienda-ceramicas-el-barro.appspot.com",
    messagingSenderId: "577733850336",
    appId: "1:577733850336:web:37b0d06ae3ba74ce254c85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


//productos.forEach((prod) => {
//   addDoc(collection(db , "productos"), prod)
//  .then((elem) => console.log(`se agregó correctamente el producto id ${elem.id}`))
//   .catch((error) => console.log(error));
//});

