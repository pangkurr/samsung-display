$(function () {
  $('.list').click(function () {
    const value = $(this).attr('data-filter');
    if (value == 'All') {
      $('.item').show('500');
    } else {
      $(".item").not('.'+value).hide("500");
      $(".item").filter('.'+value).show("500");
    }
  })
  $('.list').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
  });
});