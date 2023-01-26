import { initializeApp } from 'firebase/app';
import {getStorage} from 'firebase/storage';
import {getFirestore, collection, doc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFG72TgD997h2-GhgIudYW5xm6b0dRxiE",
    authDomain: "challenge-grey-dive-b13a2.firebaseapp.com",
    databaseURL: "https://challenge-grey-dive-b13a2-default-rtdb.firebaseio.com",
    projectId: "challenge-grey-dive-b13a2",
    storageBucket: "challenge-grey-dive-b13a2.appspot.com",
    messagingSenderId: "376983757432",
    appId: "1:376983757432:web:3ac95a9e353f66c7c9c38d",
    measurementId: "G-57WGF9WZVX"
  };

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  
  export const postForm = async(obj, nombre) =>{
    try{
      const collectionRef = collection(db, 'posts');
      const docRef = doc(collectionRef, `${nombre}`)
      await setDoc(docRef, obj)
      throw 'Success post!'
    }catch(error){
      console.log(error)
      throw 'Failure post!'
    };
  };
