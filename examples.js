
$(document).ready(function() {

	var context = {};

    $.ajax('data.json', {
        success: function(response){
            console.log(response);

			context.coloring = response;
			console.log(context);
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

    $.ajax('handlebars.hbs', {
        success: function(response){
            console.log(response);
    		var theTemplate = Handlebars.compile(response);
    		console.log(theTemplate);
    		var theCompiledHTML = theTemplate(context);
    		$('.printHere').append(theCompiledHTML);
    		console.log(theCompiledHTML);
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });
});