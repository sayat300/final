$(document).ready(function() {
  $('.membershipButton').mouseover(function() {
    $(this).css('transform', 'scale(1.2)');
  });
  $('.membershipButton').mouseout(function() {
    $(this).css('transform', 'scale(1)');
  });

  $('#showfatLoseVideo').click(function () {
    $('#showfatLoseVideo').fadeOut();
    $('#fatLoseVideo2').fadeIn();
    $('#fatLoseVideo3').fadeIn();
  });
  $('#showArmsVideo').click(function () {
    $('#showArmsVideo').fadeOut();
    $('#ArmsVideo2').fadeIn();
    $('#ArmsVideo3').fadeIn();
  });
});