$(function() {

// FAQ

$('.faq-list-item').click(
    function(){
      const $answer = $(this).find('.answer');
      if ($answer.hasclass('open')) {
        $answer.removeclass('oepn');
        $(this).find('span').text('+');
      }  else {
        $answer.addclass('oepn');
        $(this).find('span').text('-');

      }
    }
);
























});