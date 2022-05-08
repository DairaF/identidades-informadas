 

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
    marked1 = document.getElementsByClassName('highLight')[0] 
    if(typeof marked1 !== "undefined"){
      console.log(document.getElementsByClassName('highLight')[0]);
      document.getElementsByClassName('highLight')[0].classList.remove('highLight');
    }
    document.getElementById('c'+currentSlide).classList.add('highLight');
    //window.location.hash="c"+currentIndex;
    document.getElementById("c"+currentIndex).scrollIntoView(true);   
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + ' de ' +slidesCount);
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
	let altoPos = document.getElementsByClassName(className)[1].offsetHeight;
  document.getElementsByClassName(className)[1].style.top = topPos - altoPos/2 + "px";
}


 
const addFunction= () => {
  const marks = document.getElementsByTagName("MARK");
  for (let i = 0; i < marks.length; i++ ) {
    marks[i].setAttribute('id',marks[i].className);
    marks[i].onmouseover =  () =>  bringForth(marks[i].className), commentMatch(marks[i].className);
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
  
	let visible = document.getElementsByClassName('visible');
		if (visible.length >= 1) {
			visible[0].classList.remove('visible')		
		}
	 
		sameClass[1].classList.add('visible');
		//sameClass[1].style.opacity = "1";
		
		
	let highLight= document.getElementsByClassName('highLight');
		if (highLight.length >= 1) {
			highLight[0].classList.remove('highLight');    
		}
		sameClass[0].classList.add('highLight');
}

 


 
function bringBack (classname) {
  let sameClass = document.getElementsByClassName(classname);
		sameClass[1].classList.remove('visible');  
    sameClass[1].style.left = "0px";
		sameClass[1].style.backgroundColor = "#f7f5f5";
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

 
 	 /*  MENU*/
$(function(){	 
  if(window.innerWidth < 980){
				const navLinks = document.querySelectorAll('.nav-item')
				const menuToggle = document.getElementById('navbarNav')
			const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
		navLinks.forEach((l) => {
				l.addEventListener('click', () => { bsCollapse.toggle() })
		})
  }
 	 
});	
	
 var div_top = $('.navbar-artic').offset().top;

$(window).scroll(function() {
    var window_top = $(window).scrollTop() - 0;
    if (window_top > div_top) {
        if (!$('.navbar-artic').is('.sticky')) {
            $('.navbar-artic').addClass('sticky');
        }
    } else {
        $('.navbar-artic').removeClass('sticky');
    }
});

$('.menu-hoja').click(function(e) {
    e.stopPropagation();
});


const confettiAnim = (subCon,anim) =>{
  let subContainer = document.getElementsByClassName(subCon)[0];
  subContainer.classList.add(anim);
  setTimeout(() => subContainer.classList.remove(anim), 1500);
}
const addAnim= (mark, subCon, anim) => {
  let animado = document.getElementsByClassName(mark);
  for (let i = 0; i < animado.length; i++ ) {
    animado[i].onclick =  () => confettiAnim(subCon,anim);
  };
}
addAnim("animado2","animacionBandera","startConfetti");
addAnim("animado1","animacion100","startConfetti");



 

     
		
    
   $('.cierra-comentario').on('click', function(e) {           
        $(this).parent().removeClass('visible');            
    });    
 
 
   $('mark').on('click', function(e) {           
        $('#slideContainer').addClass('z100');            
    });    
 
 
 
   $('.navbar-toggler').on('click', function(e) {           
        $('#slideContainer').removeClass('z100');            
    });    
 
 

		