const btnEl = document.getElementById("btn")

function getQuote(){
    console.log("clicked");
}

btnEl.addEventListener("click", getQuote)




// var category = 'happiness'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";