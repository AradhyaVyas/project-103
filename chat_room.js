firebase.database().ref("/").child(room_name).update({
});

function getData() {firebase.database().ref("/").on('value', function(snapchot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key;
 Room_names = childKey;
//Start code
console.log("room_name - "+Room_names);
row = "<div class='room name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
 //End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html"
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("chat_")
}