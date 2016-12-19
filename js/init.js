/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
  jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
  jQuery(".preloader").delay(1000).fadeOut("slow");
});


(function($) {

"use strict";
/***************************
****************************
Author script goes here.

These are the jquery helper initialization 
calling and custom scripts as needed.

****************************
***************************/


/*******************************************\
 HOME BACKGROUND SLIDER
\*******************************************/
$('body').vegas({
        slides: [
            { src: 'images/slider-img1.jpg' },
            { src: 'images/slider-img2.jpg' }            
        ],
        overlay: true,
        delay: 10000,
        timer: false,
        autoplay: true
});

$('.header .nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});


// for background image move
var viewportHeight = window.innerHeight;
 $("#home").css('height', viewportHeight);
 
 $( window ).resize(function() {
  var viewportHeight = window.innerHeight;
  $("#home").css('height', viewportHeight);
});


/*-------------------------------------------------*/
/* =  ANIMATE NUMBERS
/*-------------------------------------------------*/
$('#success_keys').one('inview', function(event, isInView, visiblePartX, visiblePartY){
  $('#number-1').animateNumber({ number: 760},3000);

  $('#number-2').animateNumber({ number: 850},3000);

  $('#number-3').animateNumber({ number: 96},3000);

  $('#number-4').animateNumber({ number: 12},3000);
}); 


$('#about').on('inview', function(event, isInView, visiblePartX, visiblePartY){
 //  	if($("#about > .container").hasClass("pulse pageTransition")){
	//   $("#about > .container").removeClass("pulse pageTransition");
	// }else {
	//   $("#about > .container").addClass("pulse pageTransition");
	// }
});


/*-------------------------------------------------*/
/* =  GO TOP
/*-------------------------------------------------*/
//go top
if ($('#go-top').length) {
    var scrollTrigger = 500, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#go-top').addClass('show');
                $(".slideMenu").addClass("placeBottom");
            } else {
                $('#go-top').removeClass('show');
                $(".slideMenu").removeClass("placeBottom");
            }
        };
    backToTop();
    
    $(window).on('scroll', function () {
        backToTop();
    });

    $('#go-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

/*-------------------------------------------------*/
/* =  PRICING TABLE HOVER
/*-------------------------------------------------*/
$('.plan_table').mouseenter(function(){ 
    $(this).addClass('chosen');
    $(this).find(".btn").removeClass("btn-dark").addClass("btn-default");
});

$('.plan_table').mouseleave( function(){ 
    $(this).removeClass('chosen');
    $(this).find(".btn").removeClass("btn-default").addClass("btn-dark");
});



/*-------------------------------------------------*/
/* =  READ MORE & LESS CONTENT 
/*-------------------------------------------------*/

    // Configure/customize these variables.
    var showChar = 200;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "More <i class='fa fa-angle-double-right'> &nbsp;</i>";
    var lesstext = "<i class='fa fa-angle-double-left'> &nbsp;</i>Less";
    

    $('.more').each(function() {
        var content = $(this).html(); 
        if(content.length > showChar) { 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar); 
            var html = c + '<span class="moreellipses">' + ellipsestext+ 
                           '&nbsp;</span><span class="morecontent"><span>' + h + 
                           '</span>&nbsp;&nbsp;<a href="" class="morelink">' +
                            moretext + '</a></span>';
 
            $(this).html(html);
        } 
    });
 
    $(".morelink").on("click", function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();

        $(".morecontent").toggleClass("fadeContent");
        return false;
    });
  

/*******************************************\
 TESTIMONIALS SLIDER
\*******************************************/
$('.testimonials_carousel').slick({
	autoplay:true,
	slidesToShow: 2,
  arrows: false,
  slidesToScroll: 1,
  lazyLoad : 'progressive',
  swipeToSlide : true, 
});

$('[data-space]').each(function () {
         var $this = $(this),
             $space = $this.attr('data-space');

         $('.slick-slide').css({
             marginLeft: $space + 'px',
             marginRight: $space + 'px'
         });

        
     });

/*******************************************\
 AWESOME TEAM SLIDER
\*******************************************/
 $('.teamCarousel').slick({
    arrows: false,
    dots : true,
    slidesToShow: 4,
    slidesToScroll: 1 
});


/*******************************************\
 EQUAL COLUMN HEIGHT
\*******************************************/
var eqHeight = $('.services-list .col-md-4, .teamCarousel .thumbnail');
if(eqHeight.length) {
  $('.services-list .col-md-4, .teamCarousel .thumbnail').matchHeight();
}



/*******************************************\
 SMOOTH SCROLL TO SECTION 
\*******************************************/

function goToByScroll(id){
      // Reove "link" from the ID
    id = id.replace("Section", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}

$("a.scrollDown").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll($(this).attr("id"));           
});





/*******************************************\
 ISOTOP FILTER
\*******************************************/

    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        },
        itemSelector: '.grid-item',
	      percentPosition: true,
	     masonry: {
	     // use element for option
	     columnWidth: '.grid-sizer',
	     gutter: 0,
	     
	   }
    }); 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 


 //    $('.portfolioFilter').magnificPopup({ 
	//   type: 'image',
	//   delegate: 'a',
	// });
	$('.portfolioContainer').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  verticalFit: true,
	  removalDelay: 300,
	  fixedBgPos: true,
    mainClass: 'my-mfp-slide-bottom',
	  image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title') + '<small>by Asifur Rahman</small>';
            }
      },
	  gallery: {
	    // options for gallery
	    enabled: true
	  },
    zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
	});

// textarea autosize
$('textarea').expanding();

$('.tlt').textillate({
   loop: true,
   minDisplayTime: 4000,
  
   // in animation settings
   in: {
    // set the effect name
    effect: 'fadeInLeftBig',
   },
   
   // out animation settings
   out: {
    effect: 'fadeOutRightBig',
   },
});

// morph text rotator
$(".js-rotating").Morphext({
      animation: "bounceIn",
      speed: 3000,
      complete: function () {
          // console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
      }
});

// Reveal Animations When Scrolling
new WOW().init();


})(jQuery);
