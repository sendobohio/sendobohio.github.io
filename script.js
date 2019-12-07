$(document).ready(function(){
  $(window).scroll(function(){
    pos1 = $(window).scrollTop();
    pos2 = $(".bohio-diagram").offset().top - 30;
    console.log(pos2);
    if (pos1 > pos2) {
      $(".navbar").css({
        backgroundColor : 'white',
        boxShadow : '5px 0px 5px lightgrey'
      });
    }
    if (pos2 > pos1) {
      $(".navbar").css({
        backgroundColor : 'rgba(0,0,0,0)',
        boxShadow : 'none'
      });
    }
  });

  $(".nav-item").click(function(){
    var text = $(this).text();
    var elemClass;
    var offset = 0;
    if (text === "COMIENZO") elemClass = ".landing-area"
    if (text === "FUNCIONES") elemClass = ".features-area"
    if (text === "PRECIO") elemClass = ".pricing-area"
    if (text === "INSCRIBETE") elemClass = ".movement-area"
    var toElem = $(elemClass);
    $("html, body").animate({
      scrollTop : toElem.offset().top - offset
    }, 200);
  })

  $(".call-to-action").click(function(){
    $("html, body").animate({
      scrollTop : $(".movement-area").offset().top
    }, 200);
  })
})
