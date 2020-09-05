$('.menu-list-item').click(function() {
  var HeaderHight = $('.menu-list-item h3').css('font-size');
  var w = window.outerWidth;
  var $answer = $(this).find('.menu-name');
  if($answer.hasClass('open')) {
    $answer.removeClass('open');
    // slideUpメソッドを用いて、$answerを隠してください
    $answer.slideUp();
    // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
    if(w < 1350 && w >900){
      $('.header').css('height','230px');
    }else if(w < 900 && w >600){
      $('.header').css('height','150px');
    }else if(w < 600){
      $('.header').css('height','100px');
    }
  } else {
    $answer.addClass('open'); 
    // slideDownメソッドを用いて、$answerを表示してください
    $answer.slideDown();
    // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
    $(this).find('span').text('-');
    if(w < 1350 && w >900){
      $('.header').css('height','300px');
    }else if(w < 900 && w >600){
      $('.header').css('height','200px');
    }else if(w < 600){
      $('.header').css('height','200px');
    }
  }
});

// スワイパー
var mySwiper = new Swiper ('.swiper-container', {
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
  delay: 3500,
  disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
// スライダーリンク部分
$('.slide-item p').hover(
  function(){
    $('.slide-item p').css('background-color','rgba(200,200,200,0.8)');
    $('.slide-item p').css('color','#333333');
  },
  function(){
    $('.slide-item p').css('background-color','rgba(26, 25, 25, 0.7)');
    $('.slide-item p').css('color','#EEEEEE');
  }
);


// $(function(){
//   var clickEventType = (( window.ontouchstart!==null ) ? 'click':'touchend');
//   $(document).on(clickEventType,'.question',function(){
//     $('.question').css('opacity','0.5');
//   });
// });

// 下部Q&A
$(function() {

  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  
  $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active'); 
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

  // FAQのアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');
    }
  });
});

// personnel slidemessage
window.onload = function () {
  autoScroll();
}
var $scrollY = 0;
var w = window.outerWidth;
var x = 500;
function autoScroll() {
  var $sampleBox = document.getElementById( "text-move-Box" );
  $sampleBox.scrollTop = ++$scrollY;
  if ( w > x){
    if( $scrollY < $sampleBox.scrollHeight - $sampleBox.clientHeight ){
        setTimeout( "autoScroll()", 15 );
      }else{
        $scrollY = 0;
        $sampleBox.scrollTop = 0;
        setTimeout( "autoScroll()", 15 );
      }
  }else{
    if( $scrollY < $sampleBox.scrollHeight - $sampleBox.clientHeight ){
      setTimeout( "autoScroll()", 30 );
    }else{
      $scrollY = 0;
      $sampleBox.scrollTop = 0;
      setTimeout( "autoScroll()", 30 );
    }
  }
  // if( $scrollY < $sampleBox.scrollHeight - $sampleBox.clientHeight ){
  //   setTimeout( "autoScroll()", 15 );
  // }else{
  //   $scrollY = 0;
  //   $sampleBox.scrollTop = 0;
  //   setTimeout( "autoScroll()", 15 );
  // }
 
}
// anime.js利用
/* ========================================================
スクロールでトップに戻るボタンを表示
=========================================================*/
// スクロールして何ピクセルでアニメーションさせるか
var px_change = 150;
// スクロールのイベントハンドラを登録
window.addEventListener('scroll', function(e) {
	// 変化するポイントまでスクロールしたらクラスを追加
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if ( scrollTop > px_change ) {
		document.getElementById( "btn-backtotop" ).classList.add( "fadein" );
 
	// 変化するポイント以前であればクラスを削除
	} else {
		document.getElementById( "btn-backtotop" ).classList.remove( "fadein" );
	}
});
 
/* ========================================================
トップに戻るボタンのスムーズスクロール
=========================================================*/
 
document.getElementById( "btn-backtotop" ).addEventListener('click', function(e) {
	anime.remove("html, body");
	anime({
		targets: "html, body",
		scrollTop: 0,
		dulation: 600,
		easing: 'easeOutCubic',
	});
	return false;
});


// personnel---top部分
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters ,ml7');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 70 * i     //動くスピード
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,  //切り替えスピード
    easing: "easeOutExpo",
    delay: 1000
  });

  
