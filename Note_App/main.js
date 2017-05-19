//Colors: 
//1 - #5FD4B1
//2 - #35D4A4
//3 - #00A876
//4 - #207E62
//5 - #006D4C
$(function() {
  $( ".drag1" ).draggable();
});

$("#submitButton").click(function(){
  var numLeft = Math.random() * (850) + 20;
  var numTop = Math.random() * 380 + 90;
  var strLeft = numLeft.toFixed() + "px";
  var strTop = numTop.toFixed() + "px";
  var t = $("<div class='drag1' class='ui-widget-content'></div>");
  
  var data = $("#headerInput").val();
  $(t).html(data.toUpperCase());
  $(t).css("left", strLeft);
  $(t).css("top", strTop);
  $("section").append(t);
  $(".drag1").draggable();
  $("#headerInput").val('');
  $("#textInput").val('');
});