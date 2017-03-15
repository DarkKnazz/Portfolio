$(document).ready(function(){
  $("#menuButton").click(function(){
    $('#menu').animate({left: "-=30%"},900);
    $("#menuButton").fadeOut("fast");
  });
  
  $("#menuButton1").click(function(){
    $('#menu').animate({left: "+=30%"},900);
    $("#menuButton").fadeIn("fast");
  });
  
  $("#el1").mouseenter(function(){
    $("#ach1").fadeIn(400);
  });
  
  $("#ach1").mouseleave(function(){
    $("#ach1").fadeOut(400);
  });

  $("#el2").mouseenter(function(){
    $("#ach2").fadeIn(400);
  });
  
  $("#ach2").mouseleave(function(){
    $("#ach2").fadeOut(400);
  });

  $("#el3").mouseenter(function(){
    $("#ach3").fadeIn(400);
  });
  
  $("#ach3").mouseleave(function(){
    $("#ach3").fadeOut(400);
  });

  $("#el4").mouseenter(function(){
    $("#ach4").fadeIn(400);
  });
  
  $("#ach4").mouseleave(function(){
    $("#ach4").fadeOut(400);
  });
});