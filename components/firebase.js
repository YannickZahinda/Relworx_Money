const firebaseConfig = {
    apiKey: "AIzaSyCWIq_R0XkXJG_0Ca1PsHmwkDbi9tOg27A",
    authDomain: "relworx-money.firebaseapp.com",
    projectId: "relworx-money",
    storageBucket: "relworx-money.appspot.com",
    messagingSenderId: "1004858565382",
    appId: "1:1004858565382:web:855a46de3b489af7503487",
};

// const firebaseConfig = {
//     apiKey: "AIzaSyCWIq_R0XkXJG_0Ca1PsHmwkDbi9tOg27A",
//     authDomain: "relworx-money.firebaseapp.com",
//     databaseURL: "https://relworx-money-default-rtdb.firebaseio.com",
//     projectId: "relworx-money",
//     storageBucket: "relworx-money.appspot.com",
//     messagingSenderId: "1004858565382",
//     appId: "1:1004858565382:web:855a46de3b489af7503487"
//   };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();