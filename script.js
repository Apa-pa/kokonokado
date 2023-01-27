$(function() {

// FAQ

  $('.faq-list-item').click(
    function(){
      var $answer = $(this).find('.answer');
      if ($answer.hasClass('open')) {
        $answer.removeClass('open');
        $(this).find('span').text('+');
      }  else {
        $answer.addClass('open');
        $(this).find('span').text('-');

      }
    }
  );

// homeに戻る
    $('#home-link').click(
      function(){
        $('html,body').scrollTop(0);

      }
    );

// メニュー
  $('#menu-show').click(
    function(){
    $('#menu-modal').fadeIn();
  });

  $('#menu-close').click(
    function(){
    $('#menu-modal').fadeOut();
  });


// スライド
  $(".slide-items").slick({
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    variableWidth: true,


    responsive: [{
      breakpoint: 900, // ブレイクポイントを指定
      settings: {
      slidesToShow: 2,
      speed: 600,
      },
      },
      {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '10%',
      },
      },
      ]
  });
    






















});