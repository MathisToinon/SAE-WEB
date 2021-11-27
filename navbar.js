var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;

if(currentScrollPos===0){
    document.getElementById("nav").classList.add('isTop')
}else{
    document.getElementById("nav").classList.remove('isTop')

}
}





let menu = document.getElementById("menu");
let menu_deroule = document.getElementById("menu_deroule");
menu.addEventListener("click", () => {
  if(getComputedStyle(menu_deroule).display != "none"){
    menu_deroule.style.display = "none";
  } else {
    menu_deroule.style.display = "block";
  }
})