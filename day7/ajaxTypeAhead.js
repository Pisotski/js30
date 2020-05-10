// Objective: create a page with input panel that will filter cities while typing.

// functionality:
// when page is loaded, some data has to be fetched from https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json
// after its done, use has to be able to type something and cities with the same name should be displayed
// perks:
// learn how to make a 3d angles of elements
// learn how to deal with AJAX requests mostly via CSS

// Create a yellow page
// make an input field in the middle of the page 20% below top of the page
// deside which elements and if which relation should be used to display cities that found
// make an parallelogram-like angle of fields with names of cities
// odd children should be displayed under the opposite angle than even
// CODE:
  // .container > :nth-child(even){
  //   transform: skew(10deg);
  // }
  // .container > :nth-child(odd){
  //   transform: skew(-10deg);
  // }

// make an AJAX call
// add event listener on input field
//    when change is made cities with same letters should be displayed
//    create a function that will sort cities by letters that are typed in
//    append textnodes to the input field

const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const citySearch = document.querySelector('.city-search');
const cityList = document.querySelector('.city-list');

let cities = [];

const createCityElement = function(cityInfo) {
  
  const { city, population } = cityInfo;
  const cityContainer = document.createElement('div');
  const cityName = document.createElement('span');
  const cityPopulation = document.createElement('span');
  const cityNameText = document.createTextNode(city);
  const cityPopulationNumber = document.createTextNode(population);

  cityName.appendChild(cityNameText);
  cityName.classList.add('city-name');

  cityPopulation.appendChild(cityPopulationNumber);
  cityPopulation.classList.add('city-population');

  cityContainer.appendChild(cityName);
  cityContainer.appendChild(cityPopulation);
  cityContainer.classList.add('city-info');

  cityList.appendChild(cityContainer);
}

const clearList = function() {

  while (cityList.firstChild) {
    cityList.removeChild(cityList.lastChild);
  }

  return;
}

const makeList = function(list) {

  if(cities.length < 1) {
    // arguable
    cities = cities.concat(list);
  }

  list.forEach(city => createCityElement(city));
  return;
}

// Create a function that on input chage will sort the list by the cities names

citySearch.oninput = function(e) {

  clearList();
  const searchField = e.target.value;
  makeList(cities.filter(cityInfo => cityInfo.city.includes(searchField)));
}

// AJAX via callback
// const makeAjaxCall = function(url, type, callback) {
//   const oReq = new XMLHttpRequest();
//   oReq.onload = function() {
//     if (oReq.readyState == 4 && oReq.status == 200) {
//         try {
//           var data = oReq.response;
//         } catch(err) {
//           console.log(err.message + " in " + oReq);
//           return;
//         }
//       callback(data);
//     }
//   };
//   oReq.open(type, url, true);
//   oReq.responseType = 'json';
//   oReq.send();
// }

// makeAjaxCall(endpoint, `GET`, makeList);

// AJAX VIA PROMISES aka fetch

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    cities = data;
    console.log(data);
    makeList(cities);
  });
