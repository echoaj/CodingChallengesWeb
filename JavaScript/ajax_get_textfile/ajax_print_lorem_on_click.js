const url = "http://127.0.0.1:5500/JavaScript/ajax_get_textfile/lorem.txt";
const paragraph = document.querySelector('p');


// create ajax object
function getText() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);
            paragraph.innerText = this.responseText;
        }
    };
    xhr.send();
}
