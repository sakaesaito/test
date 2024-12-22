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
 
    const LoopSwiper = new Swiper('.logo-container', {
      slidesPerView: 5, // 一度に表示するスライドの数
      spaceBetween: 30, // スライド間の余白（ピクセル単位）
      speed:50000,
      loop: true, // ループさせる
      allowTouchMove: false, 
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });



    // Q&A問い合わせ部分のjQuery

   

