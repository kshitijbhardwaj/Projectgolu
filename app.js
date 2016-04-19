$(document).ready(function(){
	
	$.getJSON("phones.json",function(mobdata){
		
		$.each(mobdata,function(key,value){
          $('ul').append("<li id='mob-name'>" +value.name+ "</li>");
          $('ul').append("<img id= 'mob-img' src='"+value.imageUrl+"' alt='avatar' />");
      	  $('ul').append("<p id='mob-desc'>" +value.snippet+ "</p>");
		});
	
	});

});