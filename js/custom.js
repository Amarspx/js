
// For find max-height
jQuery(function(){
    var mxheight=0;
$('.nav ul').each(function(){
    var h=$(this).height(); 
    if((h>mxheight)){
      mxheight=h;}
    })
$('.nav ul').height(mxheight);

});

// For add class increment in each list item
jQuery(function(){
$('.nav li').addClass(function( index ){
    return "item-" + index;
    })
});
//  For Accordian 

jQuery(function(){
             jQuery('.a-accordian h4:first').addClass('current');
             jQuery('.a-accordian .a-description:not(:first)').hide();
 	jQuery('.a-accordian h4').click(function(){
                    if(jQuery(this).next('.a-description').css('display') != 'block'){
                                jQuery('.a-accordian h4').removeClass('current');  
                                jQuery(this).addClass('current');            
	              jQuery('.a-description').slideUp();
	             jQuery(this).next('.a-description').slideDown();
                       }
                });      
});

//  For Tabs

jQuery(function(){    
    $('.tab-contents .tab-content:not(:first)').hide();
    $('.tabs li').click(function(event){
        var id=$(event.target).index();
        $('.tabs li.active').removeClass('active');
        $(event.target).addClass('active');
        $('.tab-contents .tab-content').hide().eq(id).slideDown('slow');
    })
    
});

//  For Scroll Top

jQuery(function(){    
     $(window).scroll(function(){
        if ($(this).scrollTop() >100) {
          $('a.top-page').fadeIn();} 
       else {$('a.top-page').fadeOut();}
             })
 $("a.top-page").click(function() {
  $("html, body").animate({scrollTop: 0}, "slow");
  return false;
 });
});

//  For image Slider
jQuery(function(){    
var i=0;
var len=$('.slider li').length;
len=len-1;

setInterval(function(){
    if(i==len){
           $('.slider li').eq(i).fadeIn(500);
           i=-1;
      }    
  $('.slider li').fadeOut(500);
     $('.slider li').eq(i+1).fadeIn(500);
    i++;  
}, 2000);


$('.next').click(function(){
      if(i==len){
           $('.slider li').eq(i).fadeIn(500);
           i=-1;
      }     
    $('.slider li').fadeOut(500);
    $('.slider li').eq(i+1).fadeIn(500);
    i++;
})

$('.prev').click(function(){
if(i==-len){
      $('.slider li').eq(i).fadeIn(500);
      i=1;
}
i--;
 $('.slider li').fadeOut(500);
    $('.slider li').eq(i).fadeIn(500);
})






});



