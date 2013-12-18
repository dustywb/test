$(document).ready(function(){
	var output = $('#output');
	
	$.ajax({
		url: 'http://dwbts.com/apps/jsonFeed.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var dataOutput = '<h1>'+item.title+'</h1>'
				+ '<p>'+item.info+'</p>';
				
				output.append(dataOutput);
			});
		},
		error: function(){
			output.text('There was an error loading the data.')
		}
	});
});