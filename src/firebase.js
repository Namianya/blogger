import firebase from 'firebase/app'
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCWlvqiJ8VXw0IIQ8KTcwJ9YLYcXmZs85g",
//     authDomain: "fir-dde11.firebaseapp.com",
//     projectId: "fir-dde11",
//     storageBucket: "fir-dde11.appspot.com",
//     messagingSenderId: "24356588081",
//     appId: "1:24356588081:web:5bb70b98dc2737fc126310",
//     measurementId: "G-7NDSQ6H9T3"
//   };

const  firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCWlvqiJ8VXw0IIQ8KTcwJ9YLYcXmZs85g",
        authDomain: "fir-dde11.firebaseapp.com",
        projectId: "fir-dde11",
        storageBucket: "fir-dde11.appspot.com",
        messagingSenderId: "24356588081",
        appId: "1:24356588081:web:5bb70b98dc2737fc126310",
        measurementId: "G-7NDSQ6H9T3"
    }
)
export const db = firebaseApp.firestore()
const postsCollection = db.collection('posts')


export default {
    db,
    postsCollection
}