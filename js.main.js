'use strict'

// 会社ロゴ5社の横スライダー実装
$(function () {
  $('menu').click(function () {
    //toggleClassでclassをつけたり外したりする
    $('body').toggleClass('is-drawerActive')
    //attr()でaria-expandedがfalseの場合、thisはクリックした要素そのもの
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true)
      //jQueryでcss操作、アニメーションにはdisplayではなく、visibilityを使う
      $('#js-global-menu').css('visibility', 'visible')
      $('#js-global-menu').attr('aria-hidden', 'false')
    } else {
      $(this).attr('aria-expanded', false)
      $('#js-global-menu').css('visibility', 'hidden')
      $('#js-global-menu').attr('aria-hidden', 'true')
    }
  })
});

// ハンバーガーメニューの実装
$(document).ready(function () {
  $('.menu').click(function () {
    // ボタンのアクティブ状態を切り替える
    $(this).toggleClass('active');
    // ドロワーメニューの表示/非表示を切り替える
    $('.drawer_nav').toggleClass('open');
  });
});

// ドロワーメニューの実装
$(document).ready(function() {
  // メニューボタンをクリックしたときにドロワーメニューを表示
  $('.menu').on('click', function() {
    $('.drawer_nav').addClass('open');
  });

  // クローズボタンをクリックしたときにドロワーメニューを非表示
  $('.menu').on('click', function() {
    $('.drawer_nav').removeClass('open');
  });

  // メニューの外側をクリックしても閉じる動作を追加（オプション）
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.drawer-nav, .menu').length) {
      $('.drawer_nav').removeClass('open');
    }
  });
});


// ２カラムのスライダー実装部分
$(document).ready(function() {
  // 変数を設定
  let currentIndex = 0; // 今のスライドの位置
  const slideCount = $('.slider_card .slider_item').length; // 全部のスライド数
  const slidesToShow = 2; // 一度に見せるスライドの数
  const slideWidth = $('.slider_card .slider_item').outerWidth(); // 1つのスライドの幅

  // 次のスライドへ
  $('.slider_arrow').click(function() {
    if (currentIndex < slideCount - slidesToShow) { // 最後のスライドに行きすぎないように
      currentIndex++;
      updateSlider(); // スライダーを更新
    }
  });

  // 前のスライドへ
  $('.slider_arrow_after').click(function() {
    if (currentIndex > 0) { // 最初のスライドより前には行かない
      currentIndex--;
      updateSlider(); // スライダーを更新
    }
  });

  // スライダーの位置を更新する関数
  function updateSlider() {
    $('.slider_card').animate({
      scrollLeft: slideWidth * currentIndex // 現在の位置に応じてスクロール
    }, 300); // スライドアニメーションの速度
  }
});