function submit_timeout() {
   var inputs = document.getElementsByTagName("input");
   for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type === "submit" || inputs[i].type === "image") {
         inputs[i].onclick = function() {modal.style.display = "block";return false;};
      }
   }
}
var page_expire = 1000 * parseInt(document.getElementById('page_expire').innerHTML);
setTimeout(submit_timeout, page_expire);
var modal = document.getElementById("modal_window");
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
function toggle_navigation() {
   if (navIcon.className == "fas fa-bars") {
      navIcon.className = "fas fa-times";
   } else {
      navIcon.className = "fas fa-bars";
   }
}
const navIcon = document.getElementById("nav_toggle_icon");
const navToggle = document.getElementById("nav_toggle");
navToggle.addEventListener("click", toggle_navigation);
