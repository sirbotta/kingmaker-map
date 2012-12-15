$(document).ready(function() {
   
   $('.hex').each(function(index) {
    var esplo = $(this).attr('esplorated');
	var evento = $(this).attr('eventtype');
	if(esplo == 'no'){
		$(this).children().fadeTo( 1000, 0 );
		$(this).css('background-image','url(images/notesplored.png)');
		$(this).css('background-repeat','no-repeat');
		$(this).css('background-position','center');
	} 
	
	if(esplo == 'yes'){
		if(evento === undefined){
					$(this).children().fadeTo( 1000, 0 );
				} else {
					$(this).children().fadeTo( 1000, 0 );
		   				 $(this).attr( 'esplorated', 'yes' );
		   				 $(this).css('background-image','url(images/'+evento+'.gif)');
		   				 $(this).css('background-repeat','no-repeat');
		   				 $(this).css('background-position','center');
		   				 $(this).css('background-size','30%');
		   				 $(this).children('.text').fadeTo(1000,1);
		   				 $(this).children('.text').text($(this).attr('eventname'));
				}
		
	}    

	});


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
		   		 $.get("/hexstatus/"+$(this).attr('row')+"/"+$(this).attr('tile')+"/no");
			}
		}else{
			if(esplo == 'no'){
				var r = confirm("Vuoi esplorare?");
				var evento = $(this).attr('eventtype');
				if(evento === undefined){
					$(this).css('background-image','');
					alert("non c'è nulla");
					$(this).attr( 'esplorated', 'yes' );
					$.get("/hexstatus/"+$(this).attr('row')+"/"+$(this).attr('tile')+"/yes");
				} else {
					if (r == true) {
		   				 $(this).attr( 'esplorated', 'yes' );
		   				 $(this).css('background-image','url(images/'+evento+'.gif)');
		   				 $(this).css('background-repeat','no-repeat');
		   				 $(this).css('background-position','center');
		   				 $(this).css('background-size','30%');
		   				 $(this).children('.text').fadeTo(1000,1);
		   				 $(this).children('.text').text($(this).attr('eventname'));
		   				 $.get("/hexstatus/"+$(this).attr('row')+"/"+$(this).attr('tile')+"/yes");
					}
				}
			}
		}

	});



	$("#reset").click(function() {
		$('.hex').each(function(index) {
			$(this).css('background-image','');
			$(this).removeAttr('esplorated');
			$(this).children().fadeTo( 1000, 1 );
			$(this).children('.text').text($(this).attr('row')+"-"+$(this).attr('tile'));
		});
	});

	$("#unveil").click(function() {
		$('.hex').each(function(index) {
			var evento = $(this).attr('eventtype');
			$(this).children().fadeTo( 1000, 0 );
				if(evento === undefined){
					$(this).css('background-image','');
					$(this).attr( 'esplorated', 'yes' );
				} else {
		   				 $(this).attr( 'esplorated', 'yes' );
		   				 $(this).css('background-image','url(images/'+evento+'.gif)');
		   				 $(this).css('background-repeat','no-repeat');
		   				 $(this).css('background-position','center');
		   				 $(this).css('background-size','30%');
		   				 $(this).children('.text').fadeTo(1000,1);
		   				 $(this).children('.text').text($(this).attr('eventname'));
				}
		});
	});


	
 });