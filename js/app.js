$(document).ready(function() {

  $("#navbar").hide();
  $("#learnpage").hide();
  $("#hrpage").hide();
  $("#about").hide();

  $("#learnbutton").click(function(){
      $("#navbar").show();
      $("#learnpage").show();
      $("#home").hide();
      $("#hrpage").hide();
      $("#howitworksinfo").hide();
      $("#about").hide();
  });

  $("#hrbutton").click(function(){
      $("#navbar").show();
      $("#hrpage").show();
      $("#home").hide();
      $("#learnpage").hide();
      $("#about").hide();

  });

  $("#howitworks").click(function(){
      $("#howitworksinfo").show();
  });

  // $("#about").click(function(){
  //     $("#aboutpage").show();
  // });

});
