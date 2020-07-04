var first_click = 0;
var second_click = 0;
var isClicked = false;
$(".main").click(function(){
  $(this).hide();
  var date = new Date();
  var randomTime = Math.floor(Math.random()*5000 + 2000);
  console.log("randomTime :"+randomTime);
  console.log("timeActual :"+date.getTime());
  first_click = date.getTime() + (randomTime-10);

  console.log("time added"+first_click);
  $(".reaction-actual-game").show();
  $(".waitScreen").delay(randomTime).hide(10);
  $(".rxn-screen").delay(randomTime-20).show(10);

});
$(".rxn-screen").click(function(){
  if(!isClicked){
  // console.log("clicked");
  var date = new Date();
  second_click = date.getTime();
  console.log("second Time :"+second_click);
  var reaction_time = second_click - first_click;
   $(".reaction-time").text( reaction_time + " ms");
   isClicked = true;
 }
 else{
   console.log("second Time Clicked");
 }
 $(".restart").delay(500).fadeIn(1200);
})

$("button").click(function(){
  location.reload();
})

$(".waitScreen").click(function(){
    $(".wait-text").html("TOO SOON! :( <br>  WAIT !!");

})
