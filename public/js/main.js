$(document).ready(function(){
  $('.parallax-window').parallax({imageSrc: '../public/img/dnk_peptid.jpg'});
});

$(document).ready(function(){
  $('.parallax-window_third_sect').parallax({imageSrc: '../public/img/5bee.jpg'});
});

$(document).ready(function(){
  $('.parallax-window_form_sect').parallax({imageSrc: '../public/img/form_doc_pic.jpg'});
});

$(".to_down").click(function(){
  $("html,body").animate({scrollTop: $(".parallax-window").height()}, "slow");
  return false;
});

  $('.go_call').click( function(){ 
  var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1300); 
        }
      return false; 
    });


$(function(f){
    var element = f('nav');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 1300 ? 'Out': 'In')](1200);          
    });
});

$(function(){
 $("#Go_Top").hide().removeAttr("href");
 if ($(window).scrollTop()>="250") $("#Go_Top").fadeIn("slow")
 $(window).scroll(function(){
  if ($(window).scrollTop()<="250") $("#Go_Top").fadeOut("slow")
  else $("#Go_Top").fadeIn("slow")
 });


 $("#Go_Top").click(function(){
  $("html, body").animate({scrollTop:0},"slow")
 })
 $("#Go_Bottom").click(function(){
  $("html, body").animate({scrollTop:$(document).height()},"slow")
 })
});


var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
