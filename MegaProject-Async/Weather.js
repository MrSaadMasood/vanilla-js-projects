// declaring some global variables to be used by weather app

const temperatureDisplayer = document.querySelector(".actualT");
const temperatureFeelsLike = document.querySelector(".realF");

const cloudCover = document.querySelectorAll(".cover");
const humidity = document.querySelectorAll(".humid");
const UVindex = document.querySelectorAll(".UV");
const windSpeed = document.querySelectorAll(".wind");

// storing form and submit button in a variable

const locationForm = document.getElementById("location_form");
const submitInput = document.querySelector(".submit_form");

// setting an event listener on the submit button

submitInput.addEventListener("click", showWeatherInformation);

function showWeatherInformation(e) {
  // to prevent the page from reloadin when the submit button is clicked
  e.preventDefault();
  // an async function that fetches the data from the API returns a promise which which is resolved by the .json() funtion
  // if the promise is not resolved the funtion will dispaly error for the rejected message
  async function fetcherWeatherData() {
    try {
      const locationInput = document.querySelector(".input_location").value;
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}?unitGroup=metric&key=TPTLRCT34RLM5KN847NT8XL6S&contentType=json`;
      const fetchData = await fetch(url);
      const weatherFetchResult = await fetchData.json();
      return weatherFetchResult;
    } catch (error) {
      console.error("Some Error Occured: 404");
    }
  }

  // the promise returned by the async funtion above is further resolved and the results and values are displayed on the screen
  fetcherWeatherData()
    .then((result) => {
      // getting valus for different parameteres
      const temperature = result.currentConditions.temp;
      const tempFeelsLike = result.currentConditions.feelslike;
      const humidityValue = result.currentConditions.humidity;
      const cloudCoverValue = result.currentConditions.cloudcover;
      const UVIndexValue = result.currentConditions.uvindex;
      const windSpeedValue = result.currentConditions.windspeed;

      // displaying the values in the html file
      temperatureDisplayer.innerHTML = `${temperature}<span>&#176;</span>C`;
      temperatureFeelsLike.innerHTML = `${tempFeelsLike}<span>&#176;</span>`;
      looper(humidity, humidityValue);
      looper(cloudCover, cloudCoverValue);
      looper(UVindex, UVIndexValue);
      looper(windSpeed, windSpeedValue);
    })
    .catch((error) => {
      temperatureDisplayer.innerHTML = `Error`;
    });
  // the resets the location forms values to their initial state after the submit button is clicked
  locationForm.reset();
}

// loops over the node elements and update values
// the funtion takes two arguments. 1- is the list of all the elements (querySelectorAll) with the same class name to loop over
//                                  2- the value to be displayed on indiviual list iems
function looper(list, value) {
  const updatedList = Array.from(list).map((items) => {
    items.innerHTML = value;
    return items;
  });
  return updatedList;
}

// weather drop down menu for small screens

const moreWeatherDetailButton = document.querySelector(".more_detail_button");
const weatherInformationMainDiv = document.querySelector(
  ".weather_information",
);
const weather = document.querySelector(".weather_heading_small_screen");
// weather drop down menu

moreWeatherDetailButton.addEventListener("click", dropDownMenu);

// the funtion rotates the icon of dropdown mennu to 180 degree when the icon is clicked
// and increases the height of the menu in a transition
function dropDownMenu() {
  moreWeatherDetailButton.classList.toggle("rotate-180");
  ifyes = weatherInformationMainDiv.classList.contains("yes");
  if (ifyes) {
    weatherInformationMainDiv.classList.toggle("duration-700");
  }
  weatherInformationMainDiv.classList.toggle("max-h-72");
  weather.classList.toggle("max-h-32");
  weatherInformationMainDiv.classList.add("yes");
}
