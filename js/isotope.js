window.onload = function () {
  var grid = new Isotope('.item_container', {//배치할 요소를 감싸고 있는 부모 요소
    itemSelector: '.item', //배치할 요소
    columnWidth: '.item', //너비를 구할 요소
    transitionDuration: '0.4s' //화면 재배치시 요소가 움직이는 속도
  });


  // technic의 메뉴를 버튼으로 활용
  var category_btn = document.querySelectorAll('#technic ul li');
  for (var i = 0; i < category_btn.length; i++) {
    category_btn[i].addEventListener('click', function (e) {
      e.preventDefault();

      var sort = this.querySelector('a').getAttribute('href');

      grid.arrange({
        filter: sort,
      });

      for (var i = 0; i < category_btn.length; i++) {
        category_btn[i].classList.remove('on');
      }
      this.classList.add('on');
    });
  }
  //header 영역의 메뉴를 눌러도 이동하게.
  var header_btns = document.querySelectorAll('#header .gnb>li:first-child .sub li');
  console.log(header_btns);
  for (var i = 0; i < header_btns.length; i++) {
    header_btns[i].addEventListener('click', function (e) {
      e.preventDefault();

      var sort = this.querySelector('a').getAttribute('href');

      grid.arrange({
        filter: sort,
      });

      for (var i = 0; i < category_btn.length; i++) {
        category_btn[i].classList.remove('on');
      }
      this.classList.add('on');
    });
  }
};