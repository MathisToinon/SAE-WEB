var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;

  if (currentScrollPos === 0) {
    document.getElementById("nav").classList.add('isTop')
  } else {
    document.getElementById("nav").classList.remove('isTop')

  }
}

