uri = "https://meowfacts.herokuapp.com/";


console.log("AJAX JQuery call");

$(document).ready(function() {
    $.ajax({
        url: uri,
        type: "GET",
        success: function(response) {
            console.log(response.data[0]);
        }
    });
});