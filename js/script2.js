$('.slider').slick({
  appendArrows: '#sliderControl',
});


function commentMatch(className){
  let topPos = document.getElementsByClassName(className)[0].offsetTop;
  document.getElementsByClassName(className)[1].style.top = topPos + "px";
}

const addFunction= () => {
  const marks = document.getElementsByTagName("MARK");
  for (let i = 0; i < marks.length; i++ ) {
    marks[i].setAttribute('id',marks[i].className);
    marks[i].onmouseover =  () =>  bringForth(marks[i].className);
    marks[i].onmouseout =  () => bringBack(marks[i].className);  
    marks[i].onclick =  () => displaySlider(i);  
  //  marks[i].onclick =  () => displayHideComment(marks[i].className);  
  };
}
addFunction();

function displaySlider (i) {
    if(window.innerWidth < 980){
    let slider = document.getElementById("slideContainer");
    if(slider.className == "hide"){
      slider.className="show";
      $('.slider').slick('slickGoTo', i);
    }else{ 
      $('.slider').slick('slickGoTo', i);
    }
  }
}
function hideSlider(){
  let slider = document.getElementById("slideContainer");
  slider.className="hide";
}
function displayHideComment (classname) {
  let sameClass = document.getElementsByClassName(classname);
    sameClass[1].classList.toggle("displayComment");
}
function bringForth (classname) {
  let sameClass = document.getElementsByClassName(classname);
    sameClass[1].style.zIndex = 500;
    sameClass[1].style.marginLeft = "-10px";
    sameClass[1].style.marginRight = "-10px";
}
function bringBack (classname) {
  let sameClass = document.getElementsByClassName(classname);
    sameClass[1].style.zIndex = 0;
    sameClass[1].style.marginLeft = "0px";
    sameClass[1].style.marginRight = "0px";

}