console.log("Store script loaded");

// ! Note: We use so many callback functions throw out the code,
// ! So we need to be careful with the order of the functions and
// ! the data we get from the fetch functions.

// Browser: copy the comments and search for it in the code
// ============================================

// ? API & JSON data
// fetch the JSON data
// fetch API link

// ? How to fetch data?
// fetch data option 1 : .then()
// fetch data option 2 : async/await

// ? How to use .map() method/loop?
// .map() method/loop

// ? How to create elements in the DOM?
// option 1: create the list items with appendChild
// option 2: create the list items with .innerHTML

// ============================================
// ============================================

// fetch the JSON data
const jsonData_URL = "../eventsDatabase.json";

// fetch data option 1 : .then()
function fetchJSONData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.error("JSON data fetched didn't success");
      }
      return response.json();
    })
    .then((data) => {
      console.log("jsonData", data);
      // add the data in to the page containt (inject the data in the html)
      // .map() method/loop
      data.map((dataItem) => {
        makeEventsListItems(dataItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

// ============================================
// example of the data from the json file in the ul element
{
  /* 
  <li>
<h3>kids day</h3>
<p>Location: Store</p>
<p>Start: 2025-05-01</p>
<p>End: 2025-05-02</p>
</li>
 */
}
// ============================================

// option 1: create the list items with appendChild
function makeEventsListItems(event) {
  // get the ul element from the html
  const eventsList = document.querySelector("#store ul:first-of-type");

  // create the elements
  const liElement = document.createElement("li");
  const h3Element = document.createElement("h3");
  const pLocationElement = document.createElement("p");
  const pStartElement = document.createElement("p");
  const pEndElement = document.createElement("p");

  // full the elements with data
  h3Element.innerText = event.name;

  if (event.online === true) {
    pLocationElement.innerText = `Location is: Online only`;
  } else {
    pLocationElement.innerText = `Location is: In the store only`;
  }

  pStartElement.innerText = `Start date: ${event.start_date}`;
  pEndElement.innerText = `End date: ${event.end_date}`;

  // append the elements to there parents
  liElement.appendChild(h3Element);
  liElement.appendChild(pLocationElement);
  liElement.appendChild(pStartElement);
  liElement.appendChild(pEndElement);

  eventsList.appendChild(liElement);
}

fetchJSONData(jsonData_URL);

// ============================================
// ============================================
// fetch API link

// api link to get data one pokemon
const API_URL = "https://pokeapi.co/api/v2/pokemon/";

let pokemonNames = [];

// fetch data option 2 : async/await
async function fetchAPIURL(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    // console.log("results", results);

    // for loop to get the names from the data array
    for (let i = 0; i < results.length; i++) {
      // push the names to the array
      pokemonNames.push(results[i].name);
    }
  } catch (error) {
    console.error("Error fetching JSON data:", error);
  }
}

fetchAPIURL(API_URL).then(async () => {
  getData();
});

function getData() {
  for (let i = 0; i < pokemonNames.length; i++) {
    getPokemonData(pokemonNames[i]);
  }
}

async function getPokemonData(pokemonName) {
  // api link to get data per pokemon
  const dynamicAPI_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  try {
    const response = await fetch(dynamicAPI_URL);
    const data = await response.json(); // data is the data of one pokemon per request
    creatProductslist(data); // call the function to create the list items
  } catch (error) {
    console.error("Error fetching JSON data:", error);
  }
}

// option 2: create the list items with .innerHTML
function creatProductslist(pokemon) {
  console.log("creatProductslist", pokemon.name);

  // get the ul element from the html
  const productsList = document.querySelector("#store ul:last-of-type");

  // fix the pokedex number to be 3 digits
  let pokedexNumber = 0;
  if (pokemon.id < 10) {
    pokedexNumber = `00${pokemon.id}`;
  } else if (pokemon.id < 100 && pokemon.id >= 10) {
    pokedexNumber = `0${pokemon.id}`;
  } else {
    pokedexNumber = pokemon.id;
  }

  productsList.innerHTML += `<li> 
          <h3>${pokemon.name}</h3>
          <p>${pokedexNumber}</p>

          <div>
            <img
              src="${pokemon.sprites.front_default}"
              alt="${pokemon.name} front photo"
            />
          </div>
        </li>`;

  // innerHTML replace the content of the ul element, so we need to add the new data to the end of the list with +=
  // productsList.innerHTML += means:  productsList.innerHTML =  productsList.innerHTML + new data
}
