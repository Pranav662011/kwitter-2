
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAFF_NflVlHcBVjVHDhmliwAvNyp5nO1Ws",
    authDomain: "kwitter-project-ff0f3.firebaseapp.com",
    projectId: "kwitter-project-ff0f3",
    storageBucket: "kwitter-project-ff0f3.appspot.com",
    messagingSenderId: "846918624346",
    appId: "1:846918624346:web:daa3ee65338e9d50db6463"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);











user_name=localStorage.getItem("user_name");



room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database.ref(room_name).push(
            {
                  name:user_name,
                  message:msg,
                  like:0
            }
      );
      document.getElementById("msg").value="";



}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code



//End code
      } });  }); }
getData();



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
      
      }