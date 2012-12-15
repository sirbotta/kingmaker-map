$(document).ready(function() {
   $(".hex").click(function() {
  		var esplo = $(this).attr('esplorated');
  		if(esplo === undefined){
  			var r = confirm("Vuoi scoprire?");
			if (r == true) {
   				 $(this).attr( 'esplorated', 'no' )
   				 $(this).children().fadeTo( 1000, 0 );
   				 $(this).css('background-image','url(images/notesplored.png)');
		   		 $(this).css('background-repeat','no-repeat');
		   		 $(this).css('background-position','center');
			}
		}else{
			if(esplo == 'no'){
				var r = confirm("Vuoi esplorare?");
				var evento = $(this).attr('eventtype');
				if(evento === undefined){
					$(this).css('background-image','');
					alert("non c'è nulla");
					$(this).attr( 'esplorated', 'yes' );
				} else {
					if (r == true) {
		   				 $(this).attr( 'esplorated', 'yes' );
		   				 $(this).css('background-image','url(images/'+evento+'.gif)');
		   				 $(this).css('background-repeat','no-repeat');
		   				 $(this).css('background-position','center');
		   				 $(this).css('background-size','30%');
		   				 $(this).children('.text').fadeTo(1000,100);
		   				 $(this).children('.text').text($(this).attr('eventname'));
					}
				}
			}
		}

	});
 });