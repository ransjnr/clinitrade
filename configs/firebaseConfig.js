// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "tubeguruji-startups.firebaseapp.com",
//   databaseURL: "https://tubeguruji-startups-default-rtdb.firebaseio.com",
//   projectId: "tubeguruji-startups",
//   storageBucket: "tubeguruji-startups.appspot.com",
//   messagingSenderId: "706430327770",
//   appId: "1:706430327770:web:c7c405743ca6ae77ad3ee3",
//   measurementId: "G-Y0BLY9QW0S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const storage=getStorage(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAX-BeK25ZZtOw6N3WYiFGues0JUi2hXE",
  databaseURL: "https://tubeguruji-startups-default-rtdb.firebaseio.com",
  authDomain: "clinitrade-c9e4b.firebaseapp.com",
  projectId: "clinitrade-c9e4b",
  storageBucket: "clinitrade-c9e4b.appspot.com",
  messagingSenderId: "188579090729",
  appId: "1:188579090729:web:5256a1482fd87416306738",
  measurementId: "G-VE9W7E7ZBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);