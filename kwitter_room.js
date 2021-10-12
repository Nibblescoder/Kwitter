
//ADD YOUR FIREBASE LINKS HERE
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
    
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
    
    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firesbase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
    function redirectToRoomName(name)
   { 
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitter_page.html";
   }
   function logout()
   {
         localStorage.removeItem("user_name");
         localStorage.removeItem("room_name");
         window.location="index.html";
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room-Name-"+Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr>";  
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
