function detect() {
    var text = document.getElementById("query").value;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/textlanguage?text=' + text,
        headers: { 'X-Api-Key': 'tNS1daYCjrlIQfjc4OgOIg==Ojj0dgCDUwOKghvi' },
        contentType: 'application/json',
        success: function (result) {
            document.getElementById("pops").innerHTML = "Language Detected: " + result.language
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

let themeSelect = document.getElementById("themeSelector")

themeSelect.addEventListener('change', function () {
    if (themeSelect.value == "light") {
        document.body.style.backgroundColor = "white"
        document.getElementById("mycontain").style.backgroundColor = "aliceblue"
    }

    else if (themeSelect.value == "dark") {
        document.body.style.backgroundColor = "black"
        document.getElementById("mycontain").style.backgroundColor = "white"
    }
});