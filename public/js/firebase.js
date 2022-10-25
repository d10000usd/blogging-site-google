
// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyB0TAZQPvrRdMH2jGsdOzTZaZ1o2H4wqDk",
    authDomain: "hg-blog-fa31a.firebaseapp.com",
    projectId: "hg-blog-fa31a",
    storageBucket: "hg-blog-fa31a.appspot.com",
    messagingSenderId: "834550214140",
    appId: "1:834550214140:web:ea37bc0ed59ce30b901679"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase for the admin dashboard
let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();

    location.reload();
}