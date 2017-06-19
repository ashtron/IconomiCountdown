$("document").ready(function() {
  $('#clock').countdown('2017/08/01', function(event) {
    $(this).html(`${event.strftime('%D days %H hours %M minutes and %S seconds')} until release`);
  });
});
