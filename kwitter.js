function adduser() {
    username=document.getElementById("input1").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html" ;
}