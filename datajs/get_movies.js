function load_dropdown() {
	//$("#listview").html('');
	var url=BaseURL+"get_movie_list.php" ;
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var movie_id=field.movie_id;
				var movie_title=field.movie_title;
				
				
	           $("#movie_id").append('<option value="'+movie_id+'">'+movie_title+'</option>');
				
	        });
			
			 //$(showID).append('<div class="clearleft"></div>');
    	});
	
	}

$(document).ready(function()
		{
		// Using GetJSON
		load_dropdown();
		
	});