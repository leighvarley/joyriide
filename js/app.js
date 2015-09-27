$(document).ready(function() {

  $("#learnpage").hide();
  $("#hrpage").hide();

  $("#learnbutton").click(function(){
      $("#learnpage").show();
      $("#home").hide();
      $("#hrpage").hide();
  });

  $("#hrbutton").click(function(){
      $("#hrpage").show();
      $("#home").hide();
      $("#learnpage").hide();
  });

});
