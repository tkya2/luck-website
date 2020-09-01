$('.menu-list-item').click(function() {
  var $answer = $(this).find('.menu-name');
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
