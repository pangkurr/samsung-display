$(function(){
  $('.sub').hide();
  $('.topBtn').hide()

  $('.gnb').hover(function(){
    $('.sub').stop().slideDown();
  },function(){
    $('.sub').stop().slideUp();
  });


  $(window).scroll(function(){
    bh=$(window).scrollTop();
    if(bh>50){
      $(".logo img").attr("src", "assets/img/scrollLogo.svg");
      $(".logo img").css("width",250);
      $('.util li').hide();
      $('.util li:last-child').show();
      $('.topBtn').show();
    }else{
      $(".logo img").attr("src", "assets/img/logo.svg");
      $(".logo img").css("width","100%");
      $('.util li').show();
      $('.util li:last-child').show();
      $('.topBtn').hide();
    }
  });

  $('.topBtn').click(function(){
    $(window).scrollTop(0);
  });
});