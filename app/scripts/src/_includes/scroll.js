$(window).scroll(function(){
 if($(this).scrollTop() > 30){
  $('#navgation2').css('position','fixed');
  $('#navgation2').css('top','0');
    }
    if($(this).scrollTop() < 30){
     $('#navgation2').css('position','relative');
     $('#navgation2').css('top','0');
       }
});