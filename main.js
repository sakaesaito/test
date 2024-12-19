'use script';

$(function(){
  //メニューボタンをクリックしたら
  $(".menu").click(function(){
    //「.menu」に「.active」を追加・削除
    $(this).toggleClass("active");
    //「.nav」に「.active」を追加・削除
    $(".drawer_nav").toggleClass("active");
  });
  });
  
 
    const swiper = new Swiper('.logo-container', {
      slidesPerView: 5, // 一度に表示するスライドの数
      spaceBetween: 10, // スライド間の余白（ピクセル単位）
      speed:10000,
      loop: true, // ループさせる
      allowTouchMove: false, 
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  
