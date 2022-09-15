  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  import { getDatabase , ref, set, push } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js"

  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC6DfA8kIKITv3HWn7UhLXdb4JGxWgd3H8",
    authDomain: "location-f8398.firebaseapp.com",
    projectId: "location-f8398",
    storageBucket: "location-f8398.appspot.com",
    messagingSenderId: "1032533121985",
    appId: "1:1032533121985:web:716d6090cda5a62a642d40",
    measurementId: "G-TD5QLG3HC0",
    databaseURL:"https://location-f8398-default-rtdb.firebaseio.com/"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      const postListRef = ref(db, 'posts');
      const newPostRef = push(postListRef);
      set(newPostRef, {
        latitude:position.coords.latitude,
        longitude:position.coords.longitude
      });
    });
}
