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
    username=localStorage.getItem("username");
roomname=localStorage.getItem("roomname");
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="kwitter.html";
}
function send() {
      msg=document.getElementById("msg").value;
firebase.database().ref(roomname).push({
name:username,
message:msg,
likes:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
names=message_data['name'];
message2=message_data['message'];
likes=message_data['likes'];
tick="<h4>"+names+"<img src='tick.png'class='user_tick'> </h4>";
message3="<h4 class='message_h4'>"+message2+"</h4>";
//lb="<button onclick='like(this.id)' class='btn btn-warning' id="+firebase_message_id+ "value="+likes>"";
lb="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='like(this.id)'>";
tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+likes+"</span> </button>";
row=tick+message3+lb+tag;
document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();
function like(message_id) {
      button_id=message_id;
      likess=document.getElementById(button_id).value;
nl=Number(likess)+1;
firebase.database().ref(roomname).child(message_id).update({
      likes:nl
});
console.log("You Hit The Like Button");
}
