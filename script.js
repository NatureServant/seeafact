let factArea = document.getElementById("factArea");
const api_Key = "VyurEv4zyDbAils65WybLw==hfBD8ioPz9tH1BbP";

function getFact() {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/facts',
        headers: { 'X-Api-Key': api_Key},
        contentType: 'application/json',
        success: function(result) {
            factArea.innerHTML = result[0].fact;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}
getFact()