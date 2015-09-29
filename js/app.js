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
    $('#companiesinfo').hide();
    $('#bidsinfo').hide();
    $('#apartmentsinfo').hide();

  });

  $("#companiesbutton").click(function(){
    $("#companiesinfo").toggle();
    $('#commutersinfo').hide();
    $('#bidsinfo').hide();
    $('#apartmentsinfo').hide();
  });

  $("#bidsbutton").click(function(){
    $("#bidsinfo").toggle();
    $('#companiesinfo').hide();
    $('#commutersinfo').hide();
    $('#apartmentsinfo').hide();
  });

  $("#apartmentsbutton").click(function(){
    $("#apartmentsinfo").toggle();
    $('#companiesinfo').hide();
    $('#commutersinfo').hide();
    $('#bidsinfo').hide();
  });

});
