  $(document).ready(function() {
    $('.fruit-select').click(function() {
      $('.select-fruit-dropdown').addClass('visible');
      $('.select-dairy-dropdown').removeClass('visible');
    });
    $('.dairy-select').click(function() {
      $('.select-dairy-dropdown').addClass('visible');
      $('.select-fruit-dropdown').removeClass('visible');
    });
    $('.apple-select').click(function() {
      $('.apple-nutrition').addClass('visible');
      $('.milk-nutrition').removeClass('visible');
    });
    $('.apple-100-select').click(function() {
      $('.apple-nutrition').addClass('visible');
      $('.milk-nutrition').removeClass('visible');
    });
    $('.milk-select').click(function() {
      $('.milk-nutrition').addClass('visible');
      $('.apple-nutrition').removeClass('visible');
    });
    $('.milk-100-select').click(function() {
      $('.milk-nutrition').addClass('visible');
      $('.apple-nutrition').removeClass('visible');
    });
  });

  $(".dropdown-menu li button").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  });
