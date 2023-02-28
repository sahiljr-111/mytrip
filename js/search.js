$(document).ready(function(){
  $('.flight').click(function(){
    $('.tabpan1').show();
    $('.tabpan2').hide();
    $('.tabpan3').hide();
    $('.tabpan4').hide();
    $('.flight').addClass('pill');
    $('.hotel').removeClass('pill');
    $('.journey').removeClass('pill');
    $('.passanger').removeClass('pill');

  });

  $('.hotel').click(function(){
    $('.tabpan2').show();
    $('.tabpan1').hide();
    $('.tabpan3').hide();
    $('.tabpan4').hide();
    $('.hotel').addClass('pill');
    $('.flight').removeClass('pill');
    $('.journey').removeClass('pill');
    $('.passanger').removeClass('pill');

  })

  $('.journey').click(function(){
    $('.tabpan3').show();
    $('.tabpan1').hide();
    $('.tabpan2').hide();
    $('.tabpan4').hide();
    $('.journey').addClass('pill');
    $('.flight').removeClass('pill');
    $('.hotel').removeClass('pill');
    $('.passanger').removeClass('pill');
    
  })

  $('.passanger').click(function(){
    $('.tabpan4').show();
    $('.tabpan1').hide();
    $('.tabpan2').hide();
    $('.tabpan3').hide();
    $('.passanger').addClass('pill');
    $('.flight').removeClass('pill');
    $('.hotel').removeClass('pill');
    $('.journey').removeClass('pill');

  })
});