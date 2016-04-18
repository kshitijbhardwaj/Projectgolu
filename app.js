$(document).ready(function(){
	
	$.getJSON("phones.json",function(mobdata){
		
		$.each(mobdata,function(key,value){
          $('ul').append("<li id='"+key+ "'>" +value.name+ "</li>");
      
		});
	
	});

});