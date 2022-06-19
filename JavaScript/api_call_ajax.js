
uri = "https://meowfacts.herokuapp.com/";

function getDogFact() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onload = function() {
        if (this.status == 200) {
            // convert response to JSON
            var response = JSON.parse(this.responseText);
            console.log(response.data[0]);
        }
    }
    xhr.send();
}
console.log("Fetch call");
getDogFact();