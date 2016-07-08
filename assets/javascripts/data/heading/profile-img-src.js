var profilePic = "../assets/stylesheets/extras/images/profile_pic.jpg";
var elems = document.getElementsByClassName("profile-img");
for (var i = 0; i < elems.length; i+= 1) {
    elems[i].src = profilePic;
}