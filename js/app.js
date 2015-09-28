$(document).ready(function() {

  // $("#navbar").hide();
  // $("#learnpage").hide();
  // $("#hrpage").hide();
  // $("#about").hide();
  // $("#howitworksinfo").hide();
  //
  // $("#learnbutton").click(function(){
  //     $("#navbar").show();
  //     $("#learnpage").show();
  //     $("#home").hide();
  //     $("#hrpage").hide();
  //     $("#howitworksinfo").hide();
  //     $("#about").hide();
  // });
  //
  // $("#hrbutton").click(function(){
  //     $("#navbar").show();
  //     $("#hrpage").show();
  //     $("#home").hide();
  //     $("#learnpage").hide();
  //     $("#about").hide();
  //     $("#howitworksinfo").hide();
  //
  // });

  $("#learnbutton").click(function(){
      $("#howitworksinfo").hide();
  });

  function toggle() {
  	for ( var i=0; i < arguments.length; i++ ) {
  		$(arguments[i]).style.display = ($(arguments[i]).style.display != 'none' ? 'none' : '' );
  	}
  }



  $("#howitworks").click(function(){
      $("#howitworksinfo").toggle();
  });


  // $("#about").click(function(){
  //     $("#aboutpage").show();
  // });

});
