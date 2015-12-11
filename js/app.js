$(document).ready(function() {
    $('.info').hide();
    $('#howitworksinfo').hide();

  $("#howitworksbutton").click(function(){
    $("#howitworksinfo").toggle();
  });

  $("#commutersbutton").click(function(){
    $('.info').hide();
    $("#commutersinfo").show();
  });

  $("#companiesbutton").click(function(){
    $('.info').hide();
    $("#companiesinfo").show();
  });

  $("#bidsbutton").click(function(){
    $('.info').hide();
    $("#bidsinfo").show();
  });

  $("#apartmentsbutton").click(function(){
    $('.info').hide();
    $("#apartmentsinfo").show();
  });

});
