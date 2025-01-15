'use script';

  $(function(){
    //メニューボタンをクリックしたら
    $(".menu").click(function(){
      //「.menu」に「.active」を追加・削除
      $(this).toggleClass("active");
      //「.nav」に「.active」を追加・削除
      $(".drawer_nav").toggleClass("active");
      // ナビゲーションメニュー内のリンク（.drawer_item a）がクリックされたときの処理を定義
      $(".drawer_item a").click(function(){
        //メニューボタンから「.active」クラスを削除
        $(".menu").removeClass("active")
         // ナビゲーションメニューから「.active」クラスを削除
        $(".drawer_nav").removeClass("active")
      }) 
    });
  });
  


  // 会社ロゴ無限ループのjQuery

    const swiper = new Swiper('.swiper01', {
      speed:4000,
      loop: true, // プルーさせる
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
              centeredSliders:true,//中央を起点に
              slidesPerView: 1, // 一度に表示するスライドの数
              slidesPerGroup: 1, // 一度にスワイプされるスライドの数
          },
          600:{
            spaceBetween: 30, // 要素間の余白
            centeredSliders:true,//中央を起点に
            slidesPerView: 1.5, // 一度に表示するスライドの数
              slidesPerGroup: 1, // 一度にスワイプされるスライドの
          },
          750:{
            spaceBetween: 30, // 要素間の余白
            centeredSliders:true,//中央を起点に
            slidesPerView: 2, // 一度に表示するスライドの数
            slidesPerGroup:2, // 一度にスワイプされるスライドの
          },
            
          900:{
            spaceBetween: 40, // 要素間の余白
            centeredSliders:true,
            slidesPerView: 2, // 一度に表示するスライドの数
            slidesPerGroup: 2, // 一度にスワイプされるスライドの
          },

          1024:{
            spaceBetween: 50, // 要素間の余白
            centeredSliders:true,
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





// レスポンシブの375px未満のviewport画面幅を固定
!(function () {
  // viewport の内容を保留関数を定義
  const viewport = document.querySelector('meta[name="viewport"]');
  //画面幅が 375px より広い場合は大丈夫設定、それ以外は幅を 375px に固定
  function switchViewport() {
    // 新しいコンテンツを設定 } }
    const value =
    //画面幅が 375px より広い場合は大丈夫設定、それ以外は幅を 375px に固定
      window.outerWidth > 375
      // 375px未満の場合の設定// 現在のビューポートのコンテンツ属性が変更する値と異なる場合のみ設定を更新する
        ? 'width=device-width,initial-scale=1'
        : 'width=375';
      // 新しいコンテンツを設定 } 
     // ウィンドウのリサイズイベントに関数を登録（画面サイズ変更実行されるようにする
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  // ページ読み込み時に最初に一度 viewport の切り替えを実行 
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();