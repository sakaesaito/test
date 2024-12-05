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
  $('.close-button').on('click', function() {
    $('.drawer_nav').removeClass('open');
  });

  // メニューの外側をクリックしても閉じる動作を追加（オプション）
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.drawer-menu, .menu-button').length) {
      $('.drawer_nav').removeClass('open');
    }
  });
});

