 

var $slider = $('.slider');

$slider.slick({
		appendArrows: '#sliderControl', 
		prevArrow: $('.prev-arrow'),
		nextArrow: $('.next-arrow'),
		adaptiveHeight: true
		
	});
	
if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = $('.slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + ' de ' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  
}


function commentMatch(className){
  let topPos = document.getElementsByClassName(className)[0].offsetTop;
  document.getElementsByClassName(className)[1].style.top = topPos + "px";
}
 

const addFunction= () => {
  const marks = document.getElementsByTagName("MARK");
  for (let i = 0; i < marks.length; i++ ) {
    marks[i].setAttribute('id',marks[i].className);
    marks[i].onmouseover =  () =>  bringForth(marks[i].className), commentMatch(marks[i].className);
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
    sameClass[1].style.left = "-60px";
    sameClass[1].style.position = "absolute";
    sameClass[1].style.backgroundColor = "#fff";
		//sameClass[1].style.opacity = "1";

}

function bringBack (classname) {
  let sameClass = document.getElementsByClassName(classname);
    sameClass[1].style.zIndex = 0;
    sameClass[1].style.left = "0px";
    sameClass[1].style.position = "relative";
		sameClass[1].style.backgroundColor = "#f7f5f5";
		//sameClass[1].style.opacity = "0";
		
}

 
 
 /*STICKY SIDEBAR*/
 var div_top = $('.sidebar').offset().top;

$(window).scroll(function() {
    var window_top = $(window).scrollTop() - 0;
    if (window_top > div_top) {
        if (!$('.sidebar').is('.sticky')) {
            $('.sidebar').addClass('sticky');
        }
    } else {
        $('.sidebar').removeClass('sticky');
    }
});


 