$(function() {

// FAQ

  $('.faq-list-item').click(
    function(){
      var $answer = $(this).find('.answer');
      if ($answer.hasclass('open')) {
        $answer.removeclass('open');
        $(this).find('span').text('+');
      }  else {
        $answer.addclass('open');
        $(this).find('span').text('-');

      }
    }
  );
























});