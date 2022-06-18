// Make and an API call in JavaScript
// Endpoint:    http://dog-api.kinduff.com
// Path:        /api/facts
// Parameters:  ?number=5

// const endpoint = "http://dog-api.kinduff.com";
// const path = "/api/facts";
// const param = "?number=5";
// let uri = endpoint + path + param;
uri = "https://meowfacts.herokuapp.com/";

function getDogFact() {
    var response = fetch(uri).catch(error => console.log(error));
    // display response
    response.then(response => response.json())
    .then(data => {console.log(data); return data;})
    .then(data => console.log(data.data[0]))
}

getDogFact();