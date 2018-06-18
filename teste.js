jQuery(function($) {
  $(document).on('keypress', 'input.somente-numero', function(e) {
  //var square = document.getElementById("sonumero");
    var key = (window.event)?event.keyCode:e.which;
	if((key > 47 && key < 58)) {
    	return true;
  	} else {
 		return (key == 8 || key == 0)?true:false;
 	}
  });
});