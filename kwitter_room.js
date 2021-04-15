var firebaseConfig = {
      apiKey: "AIzaSyCcBclgOI71MPuo9HL-ic5NiADsyR5833Y",
      authDomain: "kwitter-6c8ac.firebaseapp.com",
      databaseURL: "https://kwitter-6c8ac-default-rtdb.firebaseio.com",
      projectId: "kwitter-6c8ac",
      storageBucket: "kwitter-6c8ac.appspot.com",
      messagingSenderId: "1112910846",
      appId: "1:1112910846:web:9007957463ca8fc3272eaf"
    };
    firebase.initializeApp(firebaseConfig);
    user=localStorage.getItem("username");
document.getElementById("husername").innerHTML="Welcome"+user+"!";
function addroom() {
      roomname=document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update ({
      purpose:"adding room"
});
document.getElementById("roomname").value="";
localStorage.setItem("roomname",roomname); 
window.location="kwitterpage.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
row="<div class='room_name' id="+Room_names+" onclick='rdtrm(this.id)'> #"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      });});}
getData();
function rdtrm(name) {

      console.log(name);
localStorage.setItem("name",name);
window.location="kwitterpage.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="kwitter.html";
}
