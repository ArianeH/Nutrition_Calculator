$(document).ready(function() {
  var i = 1

  $('.select-btn').click(function() {
    var idName = this.id;
    $('.select-specific-dropdown').removeClass('visible');
    $('#' + idName + '-dropdown').removeClass('invisible');
    $('#' + idName + '-dropdown').addClass('visible');
  })

  $('.one-select').click(function() {
    // var className = $(this).children().attr('class');
    // $('.nutrition-table').removeClass('visible');
    // $('div.' + className).addClass('visible');
    $("#secondary-dropdown").dropdown("toggle");
    // $('.dropdown-menu').addClass('invisible');
    $('.container-selected-food').append('<div class="selected-food selected-food-'+i+'"></div>');
    $('.selected-food-'+i+'').html('<span class="selected-food-text">' + $(this).text() + '</span>' + ' <button class="close">&times;</button>');
    $('.placeholder-selected-food').addClass('invisible');
    $('.close').click(function(){
      $(this).parents('.selected-food').addClass('invisible');
    });
    i++;
  });

  $(".dropdown-menu li button").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  });

});
