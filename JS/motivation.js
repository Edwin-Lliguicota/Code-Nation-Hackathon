let quote1= document.querySelector('.hello');
let button2 = document.querySelector('.omg')






function hello(){
  makeRequest()
  
  
}



const quote = "";
var category = "happiness";
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

function makeRequest(){
fetch(apiUrl, {
  headers: { 
    'X-Api-Key': '6gvEgVHri//+fwM7ABQHgg==9WbSgEyN8J7qAghy'
 }}).then(response => response.json()).then(data => {
    getinfo( data );
  });
}

  
function getinfo(data){
  
  
  quote1.innerHTML= data[0].quote
}


/*
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': '        6gvEgVHri//+fwM7ABQHgg==9WbSgEyN8J7qAghy'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
*/

/*
        async function getAbilityInfo(apiUrl) {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                return data.effect_entries[1].effect;
            } catch (error) {
                console.error(error);
            }
        }

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                let ability_1 = data.abilities[0].ability.name;
                let ability_1_url = data.abilities[1].ability.url;

                ability_details = getAbilityInfo(ability_1_url)

                document.querySelector('#ability_1').textContent = ability_1;
                document.querySelector('#ability_1_details').textContent = ability_details;
            })
            .catch(error => console.log(error));
*/


