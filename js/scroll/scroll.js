$ (function() {
  function Anchor() {
    var anc = $(this);
    $('html, body').animate({
    scrollTop: $(anc.attr("href")).offset().top
    }, 500);
  };
  $("a[href^=#]").click(Anchor);
});