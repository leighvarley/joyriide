$(document).ready(function() {
    $('#howitworksinfo').hide();
    $('#companiesinfo').hide();
    $('#commutersinfo').hide();
    $('#bidsinfo').hide();
    $('#apartmentsinfo').hide();

  $("#howitworksbutton").click(function(){
    $("#howitworksinfo").toggle();
  });

  $("#commutersbutton").click(function(){
    $("#commutersinfo").toggle();
  });

  $("#companiesbutton").click(function(){
    $("#companiesinfo").toggle();
  });

  $("#bidsbutton").click(function(){
    $("#bidsinfo").toggle();
  });

  $("#apartmentsbutton").click(function(){
    $("#apartmentsinfo").toggle();
  });

});
