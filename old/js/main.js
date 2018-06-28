function changeText(cont, speed){
  var Otext=cont.text();
  cont.text('');
  var Ocontent=Otext.split("");
  var i=0;
  function show(){
    if(i<Ocontent.length) {
      var c = Ocontent[i];
      cont.append(c);
      if(c == ',') cont.append(document.createElement('br'));
      i=i+1;
    };
  };
    var Otimer=setInterval(show,speed);
  };
  $(document).ready(function(){
    changeText($(".tipping"),150);
  clearInterval(Otimer);
});


function changeBackground(project) {
  var element = document.querySelector(".work-preview");
  return function() {
    element.style.backgroundImage = "url(img/"+project+".png)"
  }
}
function resetBackground() {
  document.querySelector(".work-preview").style.backgroundImage = null;
}
function initWorks(){
  var buttons = document.querySelectorAll("[data-project]");
  var button;
  for(var i = 0; i < buttons.length; i++) {
    button = buttons[i];
    button.addEventListener("mouseover", changeBackground(button.getAttribute("data-project")));
    button.addEventListener("mouseout", resetBackground);
  }
}

initWorks();
