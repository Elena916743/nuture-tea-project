$(function() {

  //вызов слайдера
  $('.js-topslider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true
  });

  //fancybox init
  $('[data-fancybox]').fancybox({
    buttons: [
      "zoom",
      "close"
    ],
  });

});
//menu toggle
$('.js-menu-toggle').on('click', function() {
    $(this).toggleClass('is-active');
    $('.header__nav').toggle();
  });

});
<script type="text/javascript">
$ (document).ready(function() {
  $('.btn topslider__minus-btn').click(function() {
    var $container__slide2 = $(this).parent().find('container__slide2');
            var count = parseInt($btn topslider__minus-btn.val)()) - 1;
           count = count < 1 ? 1 : count;
           $container__slide2.val(count);
           $container__slide2.change();
           return false;
           
  });
    $('.btn topslider__plus-btn').click(function () {
      var $btn topslider__plus-btn = $(this).parent().find('btn topslider__plus-btn');
      $btn topslider__plus-btn.val(parseInt($btn topslider__plus-btn.val()) + 1);
    
       $container__slide.change();
       return false;
});
});
// Убавляем кол-во по клику
    $('.quantity_inner .btn__minus-btn').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
});
// Прибавляем кол-во по клику
$('.quantity_inner .btn__plus-btn').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
}); 
// Убираем все лишнее и невозможное при изменении поля
$('.quantity_inner .quantity').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
        this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }    
});  

var plus = document.getElementsByClassName('js-plus-btn')[0];
var minus = document.getElementsByClassName('js-minus-btn')[0];
var field = document.getElementById('number-diet');

plus.addEventListener('click', function(){ 
  field.value = Calc(1); 
});
minus.addEventListener('click', function(){
  field.value = Calc(-1);  s
});

function Calc(oper) {
  let result = parseInt(field.value) + oper ; 
  return (result < 1) ? 1 : result;
} 
</script>
