//Colors: 
//1 - #5FD4B1
//2 - #35D4A4
//3 - #00A876
//4 - #207E62
//5 - #006D4C
var countNote = 0;

$(function() {
  $( ".drag1" ).draggable();
});

$("#submitButton").click(function(){
  countNote++;
  var numLeft = Math.random() * (850) + 20;
  var numTop = Math.random() * 380 + 90;
  var strLeft = numLeft.toFixed() + "px";
  var strTop = numTop.toFixed() + "px";
  var t = $("<div class='drag1' class='ui-widget-content'></div>");
  var innerButton = $("<div class='exBut'></div>");
  
  $(t).attr("id",countNote.toString());
  var head_Row = $("#headerInput").val();
  var main_Text = $("#textInput").val();
  $(t).html(head_Row.toUpperCase() + "\n" + main_Text);
  $(t).css("left", strLeft);
  $(t).css("top", strTop);
  $("section").append(t);
  
  $(innerButton).attr("id", countNote.toString() + "_but");
  $(innerButton).attr("onclick", "func1(id)");
  $(t).append(innerButton);
  
  $(".drag1").draggable();
  $(".drag1").fadeIn(500);
  $("#headerInput").val('');
  $("#textInput").val('');
});

function func1(count){
  var str = "#"+ count.split("_")[0];
  console.log(str);
  $(str).fadeOut(500);
  setTimeout(function(){$(str).remove();}, 1000);
}