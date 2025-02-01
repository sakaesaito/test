'use script';

$(function () {
  //メニューボタンをクリックしたら
  $(".menu").click(function () {
    //「.menu」に「.active」を追加・削除
    $(this).toggleClass("active");
    //「.nav」に「.active」を追加・削除
    $(".drawer_nav").toggleClass("active");
    // ナビゲーションメニュー内のリンク（.drawer_item a）がクリックされたときの処理を定義
    $(".drawer_item a").click(function () {
      //メニューボタンから「.active」クラスを削除
      $(".menu").removeClass("active")
      // ナビゲーションメニューから「.active」クラスを削除
      $(".drawer_nav").removeClass("active")
    })
  });
});



// 会社ロゴ無限ループのjQuery

const swiper = new Swiper('.swiper01', {
  speed: 4000,
  loop: true, // プルーさせる
  allowTouchMove: false,//スワイプ有効
  centeredSliders: true,//中心を起点にする
  autoplay: {
    delay: 0, //途切れなくループ
  },
  breakpoints: {
    0: {
      slidesPerView: 2, // 一度に表示するスライドの数
      spaceBetween: 63, // 要素間の余白
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 63,
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 80,
    },
  }
});



// // // カードスライダーのjQuery

const CardSwiper = new Swiper('.slider-sec-swiper', {
  speed: 1000,
  loop: true,
  allowTouchMove: true,
  grabCursor: true, // 手でスワイプする
  breakpoints: {
    0: {
      spaceBetween: 30, // 要素間の余白
      centeredSliders: true,//中央を起点に
      slidesPerView: 1, // 一度に表示するスライドの数
      slidesPerGroup: 1, // 一度にスワイプされるスライドの数
    },

    1024: {
      spaceBetween: 50, // 要素間の余白
      centeredSliders: true,
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
$('.accordion-header').click(function () { // .accordion-headerをクリックで発火
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
})
  ();


// ページの読み込みが完了した後に以下の処理を実行
$(document).ready(function () {
  
  // クラス名「.form」を持つフォームが送信されたときに処理を実行
  $(".form").submit(function (event) {
    
    event.preventDefault(); // フォームのデフォルトの送信を防ぐ（リロードしない）

    var $form = $(this);  // 送信されたフォームを jQuery オブジェクトとして取得
    var formData = $form.serialize(); // フォーム内のデータを URL エンコードされた文字列として取得

    // Google フォームへデータを送信するための Ajax リクエスト
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdthNbFJ_pRMWRFh263qz5n70zGalzJsJpwNr0GNIcMNU2rBg/formResponse", // 送信先URL
      data: formData,  // フォームデータを送信
      type: "POST",  // HTTPメソッドとして「POST」を指定（フォームデータ送信時は通常POST）
      dataType: "xml",  // サーバーの応答データの形式を「XML」として指定

      // HTTPステータスコードごとの処理を定義
      statusCode: {
        // 送信成功（GoogleフォームはCORS制限のため、成功時にステータスコード0が返ることがある）
        0: function () {
          // 送信ボタン（#js-submit）をフェードアウト
          $("#js-submit").fadeOut(function () {
            // 1秒（1000ミリ秒）後にメッセージを表示
            setTimeout(function () {
              $(".end-message").slideDown();  // 送信完了メッセージを表示
              $(".contact_form__item").fadeOut(); // 入力フィールドを非表示にする
            }, 1000);
          });
        },
        // 送信エラー時（Googleフォームの仕様上、エラー時に200が返ることがある）
        200: function () {
          // 1秒（1000ミリ秒）後にエラーメッセージを表示
          setTimeout(function () {
            $(".false-message").slideDown(); // エラーメッセージを表示
          }, 1000);
        }
      }
    });
  });
});



//フォームの必須項目チェックでメール送信可能にする実装
// ページの読み込みが完了したら、以下の処理を実行する
$(document).ready(function () {
  // ID「js-submit」のボタン要素を取得し、変数 `$submitBtn` に代入します
  const $submitBtn = $('#js-submit')
  
  // フォーム内のすべての `input` 要素や `textarea` 要素に「change」イベントを監視
  // ユーザーが値を変更するたびに、以下の処理が実行
  $('.form input,.form textarea').on('change', function () {
    // 入力フィールドがすべて空でないか確認する
    if (
      $('.form input[type="text"]').val() !== "" && // テキスト入力フィールドが空でないか確認
      $('.form input[type="email"]').val() !== "" && // メールアドレス入力フィールドが空でないか確認
      $('.form input[type="tel"]').val() !== "" // 電話番号入力フィールドが空でないか確認
     ) {
      // 上記すべての条件が満たされていれば、送信ボタン（$submitBtn）を有効化（disabledを解除）
      $submitBtn.prop('disabled', false);
      // 条件が一つでも満たされない場合、送信ボタン（$submitBtn）を無効化（disabledを有効化）
    } else {
      $submitBtn.prop('disabled', true);
    }
  });
});


