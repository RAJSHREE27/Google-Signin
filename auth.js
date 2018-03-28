var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
	var userRequest =  new XMLHttpRequest() ;
	userRequest.open('POST',);
	userRequest.onload = function(){
		var ourData = JSON.parse(userRequest.responseText);
		console
	}

});