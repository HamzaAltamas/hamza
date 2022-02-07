// wowjs

new WOW().init();

// wowjs



// theme change

$('#themebtn').click(function () {
    $("body").toggleClass("active");
});
$('#themebtn').click(function () {
    $("#themebtn").toggleClass("fa-sun");
});

// theme change


// progressbar start


$('.html').rProgressbar({
    percentage: 80,
    duration: 4000

    
});
$('.css').rProgressbar({
    percentage: 90,
    duration: 4000
});



$('.php').rProgressbar({
    percentage: 5,
    duration: 4000
});



$('.javascript').rProgressbar({
    percentage: 8,
    duration: 4000
});



$('.jquery').rProgressbar({
    percentage: 95,
    duration: 4000
    
});

// progressbar end




// my team slider
$('.teamslider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'.pre',
    nextArrow:'.nex',
   
    centerMode:true,
    centerPadding:"0"
  });





//   testimonial lightbox

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

//   testimonial slick

$('.testslider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'.prevvv',
    nextArrow:'.nextvv',
   
    centerMode:true,
    centerPadding:"0"
  });


// portfolio mixitup

var mixer = mixitup('.mix');

// scrollbar custom

$("body").niceScroll();


