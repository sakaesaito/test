'use script';

$(function(){
  //メニューボタンをクリックしたら
  $(".menu").click(function(){
    //「.menu」に「.active」を追加・削除
    $(this).toggleClass("active");
    //「.nav」に「.active」を追加・削除
    $(".drawer_nav").toggleClass("active");
  });

  $('.menu').on('click', function() {
    $('.drawer_menu').removeClass('open');
  });

  // //メニュー内のリンクをクリックしたら
  // $(".drawer_list").click(function(){
  //   //「.menu」から「.active」を削除
  //   $(".menu").toggleClass("active");
  //   //「.nev」から「.active」を削除
  //   $(".drawer_nav").toggleClass("active");
  // });
});
