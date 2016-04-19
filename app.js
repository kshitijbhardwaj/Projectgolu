$(document).ready(function(){
	
	$.getJSON("phones.json",function(mobdata){
		
		$.each(mobdata,function(key,value){
          $('ul').append("<li id='main'>"+
          	"<a id='name' href='#'>"+value.name+"</a>"
          	+"<a href='#'>"+"<img id='mob-img' src='"+value.imageUrl+"' alt='avatar'/>"+"</a>"
          	+"<p id='mob-desc'>" +value.snippet+ "</p>"+"</li>");
		});
	
	});

});