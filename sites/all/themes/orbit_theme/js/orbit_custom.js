
/*

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getParameter(theParameter) { 
  var params = window.location.search.substr(1).split('\/');
 
  for (var i = 0; i < params.length; i++) {
    var p=params[i].split('=');
	if (p[0] == theParameter) {
	  return decodeURIComponent(p[1]);
	}
  }
  return false;
}
*/
/*
function testUrl (urlString) {

	var test = urlString;

	if(test.indexOf('update')>=0){
		hideElement('toolbar');
		console.log('Yippee')
	}else{
		console.log('sad face')
	}
}

function hideElement(elementToHide){
	var changeClass = document.getElementById('toolbar');
	console.log(changeClass);
	changeClass.className = 'hidden';
}


window.onload = function() {
	testUrl(window.location.href);
}



jQuery(document).ready(function() {
	console.log('Hello World!');
	jQuery(function() {
		jQuery('.toolbar-menu').css({
			'height' : '0',
			'display' : 'none'
		});
	})
})*/