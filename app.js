$(document).ready(function(){
	
	$.getJSON("phones.json",function(mobdata){
		
		$.each(mobdata,function(key,value){
          $('ul').append("<li id='main'>"+
          	"<a id='name' href='#'>"+value.name+"</a>"
          	+"<a href='#'>"+"<img id='mob-img' src='"+value.imageUrl+"' alt='avatar'/>"+"</a>"
          	+"<p id='mob-desc'>" +value.snippet+ "</p>"+"</li>");
		});
	
	});

	$('#form-input').keyup(function(){
 
        // Retrieve the input field text and reset the count to zero
        var filter = $('#form-input').val();
 
        // Loop through the comment list
        $("ul li").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
            }
    });
		}); 

       $('.sort').click(function(e){
       	var $sort = this;
        var $list = $(#name);
        var $listLi = $('li',$list);
        $listLi.sort(function(a, b){
            var keyA = $(a).text();
            var keyB = $(b).text();
                return (keyA > keyB) ? 1 : 0;
                
        });
        $.each($listLi, function(index, row){
            $list.append(row);
        });
        e.preventDefault();
		});
		

});