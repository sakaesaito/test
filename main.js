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

    const swiper = new Swiper('.swiper01', {
      speed:4000,
      loop: true, // ループさせる
      allowTouchMove: false,//スワイプ有効
      centeredSliders:true,//中心を起点にする
      autoplay: {
      delay: 0, //途切れなくループ
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
       
        1200:{
            slidesPerView: 5,
            spaceBetween: 80,
        },
    }
    });



    // // // カードスライダーのjQuery
 
    const CardSwiper = new Swiper('.slider-sec-swiper', {
      speed:1000,
      loop: true, 
      allowTouchMove: true, 
      grabCursor:true, // 手でスワイプする
      breakpoints:{
          0:{
              spaceBetween: 30, // 要素間の余白
              slidesPerView: 1, // 一度に表示するスライドの数
              slidesPerGroup: 1, // 一度にスワイプされるスライドの数
          },
        
          900:{
              spaceBetween: 50, // 要素間の余白
              slidesPerView: 2, // 一度に表示するスライドの数
              slidesPerGroup: 2, // 一度にスワイプされるスライドの
          },
        },
        
     // Navigation arrows
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      }
  
  });


    // Q&AアコーディオンのjQuery
  $('.accordion-header').click(function() { // .accordion-headerをクリックで発火
    $(this).next().slideToggle();
    // $(this)...$('.accordion-header')の.next()...次の要素が.slideToggle()...表示と非表示を交互にする
    $(this).toggleClass('active');
    // $(this)...$('.accordion-header')に、activeというクラスが追加と削除を交互にする
});