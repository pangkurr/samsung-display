$(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "All") {
      $(".item").show();
    } else {
      $(".item")
        .not("." + value)
        .hide();
      $(".item")
        .filter("." + value)
        .show();
    }
  });
  $(".list").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
});
