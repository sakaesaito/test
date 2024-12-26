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
  


  // 会社ロゴ無限ループのjQuery
 
    const LoopSwiper = new Swiper('.swiper', {
      speed:5000,
      loop: true, // ループさせる
      allowTouchMove: false, 
      autoplay: {
      delay: 0,
      },
      breakpoints:{
        0:{
            slidesPerView: 2, // 一度に表示するスライドの数
            spaceBetween: 63, // 要素間の余白
        },
        600:{
            slidesPerView: 3,
            spaceBetween: 63,
        },
       
        1245:{
            slidesPerView: 5,
            spaceBetween: 80,
        },
    }
    });



    // // カードスライダーのjQuery

    const swiper = new Swiper('.slider-sec-swiper', {
      slidesPerView: 1, // 一度に表示するスライドの数
      spaceBetween: 20, // スライド間の余白（ピクセル単位）
      speed:1000,
      loop: true, // ループさせる
      allowTouchMove: false, 
      // autoplay: {
      //   delay: 0,
      //   disableOnInteraction: false,
      });
   

    // // Navigation arrows
    //   navigation, {
    //   nextEL: '.swiper-button-next',
    //   prevEL: '.swiper-button-prev',
    //   },
    //  );
