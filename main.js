var fondo = document.querySelector("body");

function changeBackground(){
  if (fondo.className === 'darkness') {
    fondo.className = "lightness";
  }
  else{
    fondo.className = "darkness";
  }
}

fondo.addEventListener("click", changeBackground);