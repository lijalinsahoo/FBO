$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		
		
		
		
		var url=BaseURL+"trailer_data.php?cat="+art_cat+"";
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var v_play_code=field.v_play_code;
				var v_title=field.v_title;
	        	//$("#video").html(field.v_play_code) ;
	            $("#listvideo").append('<div class="videocontainer">'+v_play_code+'</div><h3 class="page_subtitle">'+v_title+'</h3>');
				
	        });
    	});
		
		
	});