$(document).ready(function() {

  $("#navbar").hide();
  $("#learnpage").hide();
  $("#hrpage").hide();

  $("#learnbutton").click(function(){
      $("#navbar").show();
      $("#learnpage").show();
      $("#home").hide();
      $("#hrpage").hide();
  });

  $("#hrbutton").click(function(){
      $("#navbar").show();
      $("#hrpage").show();
      $("#home").hide();
      $("#learnpage").hide();
  });

});
