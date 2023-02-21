$(function() {

  
  // 一定の幅スクロールしたら出てくるボタン
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 200); //0.5秒かけてトップへ移動
      return false;
  });

  // メニューバーの展開
  $('#menubar').click(function(){
    var $wrap=$('header').find('.wrap');
    if($wrap.hasClass('open')) {
      $wrap.removeClass('open');
    } else {
      $wrap.addClass('open');
    }
  });
 // アコーディオンメニューの展開
  $('.question').click(function(){
    var $answer=$(this).siblings('.answer');
    var $question=$(this);
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $question.find('.right').addClass('fa-angle-down').removeClass('fa-angle-up');

    } else {
      $answer.addClass('open');
      $question.find('.right').addClass('fa-angle-up').removeClass('fa-angle-down');
    }
  });

  $('.flowlist').click(function(){
    var $answer=$(this).find('.flowsmhtext');
    var $question=$(this).find('.flowsmhcolumn');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $question.find('.flowsmhright').addClass('fa-angle-down').removeClass('fa-angle-up');
    } else {
      $answer.addClass('open');
      $question.find('.flowsmhright').addClass('fa-angle-up').removeClass('fa-angle-down');
    }
  });




});
