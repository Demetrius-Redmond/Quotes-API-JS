const btnEl = document.getElementById("btn")
const quoteEl = document.getElementById("quotes")

const apiKey = "tzZ8p3IyF/CQ3a+baum6xg==GyuDa8k6FFznvvOu"

const options = {
    method: "GET", 
    headers: {
        "X-Api-KEY": apiKey,
    },

};
var category = 'inspirational'
const apiURL = "https://api.api-ninjas.com/v1/quotes?category=" + category

async function getQuote(){
    
    try {
        quoteEl.innerText = "Updating...";
    btnEl.ariaDisabled = true;
    btnEl.innerText = "Loading..."
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.ariaDisabled = false;
    btnEl.innerText = "Show me a new quote."

    quoteEl.innerText = data[0].quote;
    } catch (error) {
        quoteEl.innerText = "An error occured, try again later."
        btnEl.ariaDisabled = false;
        btnEl.innerText = "Show me a new quote."
        console.log(error);
        
    }

    
}

btnEl.addEventListener("click", getQuote)




// 
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