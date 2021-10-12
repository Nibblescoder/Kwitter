//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCv6eUQpfM35IDrJHghv-pTYO45AwwF9uQ",
      authDomain: "kwitter-9ef5b.firebaseapp.com",
      databaseURL: "https://kwitter-9ef5b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ef5b",
      storageBucket: "kwitter-9ef5b.appspot.com",
      messagingSenderId: "750588218569",
      appId: "1:750588218569:web:9c0494fb121d735a279118"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
