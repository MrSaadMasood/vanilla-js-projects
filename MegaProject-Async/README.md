# MegaProjectVanillaJS Documentation


## Table of Contents
1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [Stop Watch Functionality](#stop-watch-functionality)
8. [Counter Functionality](#counter-functionality)

9. [Weather App Documentation](#weather-app-documentation)
10. [Lazy Loading Grid Images Documentation](#lazy-loading-grid-images-documentation)
11. [Scrollable Navbar with Responsive Behavior](#scrollable-navbar)
12. [Contact](#contact)



## Project Overview <a name="project-overview"></a>

MegaProjectVanillaJS is a web application built from scratch using HTML, tailwind CSS, and Vanilla JavaScript. The project includes a variety of features such as a stop watch, counter, weather forecast, and lazy loading of random images.

## Screenshots
![main-page](https://github.com/MrSaadMasood/vanilla-js-projects/blob/main/MegaProject-Async/Screenshots/scrnli_15_11_2023_15-16-40.png?raw=true)

![stop-watch](https://github.com/MrSaadMasood/vanilla-js-projects/blob/main/MegaProject-Async/Screenshots/scrnli_15_11_2023_15-18-58.png?raw=true)

![counter](https://github.com/MrSaadMasood/vanilla-js-projects/blob/main/MegaProject-Async/Screenshots/scrnli_15_11_2023_15-19-02.png?raw=true)

![weather](https://github.com/MrSaadMasood/vanilla-js-projects/assets/144701669/96405820-ce8c-4dd0-b7e3-2b2ae6a6c32a)

![lazy-load](https://github.com/MrSaadMasood/vanilla-js-projects/blob/main/MegaProject-Async/Screenshots/scrnli_15_11_2023_15-19-09.png?raw=true)

![footer](https://github.com/MrSaadMasood/vanilla-js-projects/blob/main/MegaProject-Async/Screenshots/scrnli_15_11_2023_15-19-12.png?raw=true)

## Features <a name="features"></a>

- **Responsive Design:** The application is designed to be responsive, ensuring a seamless user experience across different devices.
- **Navigation:** The navigation bar adapts to different screen sizes, providing a smooth transition between navigation options.
- **Stop Watch:** Users can utilize the stop watch feature with start, stop, and reset functionalities.
- **Counter:** The counter feature allows users to increase, decrease, and reset the count.
- **Weather Forecast:** Users can check the current weather, including temperature, conditions, and additional details for a specified location.
- **Lazy Random Images:** The application loads random images lazily, optimizing performance.
- **Infinite Scroll:** You can infinitly scroll the Images and it will continue to generate the random images.

## Getting Started <a name="getting-started"></a>

### Prerequisites <a name="prerequisites"></a>

Before you begin, ensure you have the following:

- A modern web browser (e.g., Chrome, Firefox, or Safari).

### Installation <a name="installation"></a>

1. Clone the repository:

   ```bash
   git clone https://github.com/MrSaadMasood/vanilla-js-projects.git
   ```

2. Open the `index.html` file in your preferred web browser.

## Project Structure <a name="project-structure"></a>

The project is organized into the following main sections:

- **Header:** Contains the navigation bar and main background image with heading and navbar options.
- **Main:** Includes sections for the stop watch, counter, weather app, and lazy loading of images.
- **Footer:** Displays ownership information and social media links.

## Usage <a name="usage"></a>

The application is designed to be intuitive. Here's a brief overview of each feature:

### Stop Watch <a name="stop-watch"></a>

- **Start:** Initiates the stop watch.
- **Stop:** Pauses the stop watch.
- **Reset:** Resets the stop watch to zero.

### Counter <a name="counter"></a>

- **Increase:** Increments the counter.
- **Decrease:** Decrements the counter.
- **Reset:** Resets the counter to zero.

### Weather Forecast <a name="weather-forecast"></a>

- **Location:** Enter the city name in the input field.
- **Submit:** Retrieves and displays the current weather for the specified location.

### Lazy Random Images <a name="lazy-random-images"></a>

- Images are loaded lazily, optimizing page load performance.

---
# Stop Watch Functionality


## Table of Contents
1. [Introduction](#introduction)
2. [Global Variables](#global-variables)
3. [Event Listeners](#event-listeners)
4. [Stop Watch Functionality](#stop-watch-functionality)
   - [startStopWatch](#startStopWatch)
   - [stopStopWatch](#stopStopWatch)
   - [resetStopWatch](#resetStopWatch)

## Introduction <a name="introduction"></a>

The provided JavaScript code implements a simple stop watch functionality. Users can start, stop, and reset the stop watch using the corresponding buttons.

## Global Variables <a name="global-variables"></a>

```javascript
const resetButton = document.querySelector(".reset_button");
const startButton = document.querySelector(".start_button");
const stopButton = document.querySelector(".stop_button");

const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
```

These variables store references to HTML elements and buttons used in the stop watch functionality.

## Event Listeners <a name="event-listeners"></a>

```javascript
startButton.addEventListener("click", startStopWatch);
stopButton.addEventListener("click", stopStopWatch);
resetButton.addEventListener("click", resetStopWatch);
```

Event listeners are set on the start, stop, and reset buttons. When a button is clicked, it triggers the corresponding function.

## Stop Watch Functionality <a name="stop-watch-functionality"></a>

### startStopWatch <a name="startStopWatch"></a>

```javascript
let timer;
let minutesCounter = 0;
let secondsCounter = 0;

function startStopWatch() {
  timer = setInterval(() => {
    if (secondsCounter >= 59) {
      secondsCounter = 0;
      minutesCounter += 1;
      minutes.textContent =
        minutesCounter < 10 ? `0${minutesCounter}` : `${minutesCounter}`;
    }
    secondsCounter += 1;
    seconds.textContent =
      secondsCounter < 10 ? `0${secondsCounter}` : `${secondsCounter}`;
  }, 1000);
}
```

The `startStopWatch` function initializes the timer using `setInterval` to execute every 1000 milliseconds (1 second). It increments the seconds counter, updates the seconds display, and handles the minute rollover.

### stopStopWatch <a name="stopStopWatch"></a>

```javascript
function stopStopWatch() {
  clearInterval(timer);
}
```

The `stopStopWatch` function stops the execution of the `setInterval` function, pausing the stop watch.

### resetStopWatch <a name="resetStopWatch"></a>

```javascript
function resetStopWatch() {
  clearInterval(timer);
  minutesCounter = 0;
  secondsCounter = 0;
  seconds.textContent = "00";
  minutes.textContent = "00";
}
```

The `resetStopWatch` function resets the seconds and minutes counters to 0 and clears the timer, effectively resetting the stop watch.

# Counter Functionality

This document provides detailed documentation for the JavaScript code implementing counter functionality. The code includes event listeners for buttons to increase, decrease, and reset the counter, as well as functions to control these operations.

## Table of Contents
1. [Global Variables](#global-variables-counter)
2. [Event Listeners](#event-listeners-counter)
3. [Counter Functionality](#counter-functionality)
   - [increaseOne](#increaseOne)
   - [decreaseOne](#decreaseOne)
   - [resetCounter](#resetCounter)



## Global Variables <a name="global-variables-counter"></a>

```javascript
const decreaseCounterButton = document.querySelector(".decrease_counter_button");
const increaseCounterButton = document.querySelector(".increase_counter_button");
const resetCounterButton = document.querySelector(".reset_counter_button");

const counterDisplay = document.querySelector(".count");

// setting counter's initial value to 0
let counter = 0;
```

These variables store references to HTML elements and buttons used in the counter functionality.

## Event Listeners <a name="event-listeners-counter"></a>

```javascript
increaseCounterButton.addEventListener("click", increaseOne);
decreaseCounterButton.addEventListener("click", decreaseOne);
resetCounterButton.addEventListener("click", resetCounter);
```

Event listeners are set on the increase, decrease, and reset buttons. When a button is clicked, it triggers the corresponding function.

## Counter Functionality <a name="counter-functionality"></a>

### increaseOne <a name="increaseOne"></a>

```javascript
function increaseOne() {
  counter += 1;
  counterDisplay.textContent = counter < 10 ? `0${counter}` : `${counter}`;
}
```

The `increaseOne` function increases the counter by 1 and updates the counter display accordingly.

### decreaseOne <a name="decreaseOne"></a>

```javascript
function decreaseOne() {
  counter -= 1;
  if (counter < 0) {
    counterDisplay.textContent = counter > -10 ? `${counter}` : `${counter}`;
  } else {
    counterDisplay.textContent = counter < 10 ? `0${counter}` : `${counter}`;
  }
}
```

The `decreaseOne` function decreases the counter by 1, considering negative values. It updates the counter display accordingly.

### resetCounter <a name="resetCounter"></a>

```javascript
function resetCounter() {
  counter = 0;
  counterDisplay.textContent = "00";
}
```

The `resetCounter` function resets the counter to 0 and updates the counter display accordingly.

# Weather App Documentation

This document provides detailed documentation for the JavaScript code implementing a weather app. The code fetches weather data from an API and displays various parameters on the webpage. Additionally, it includes functionality for a weather dropdown menu on small screens.

## Table of Contents
1. [Introduction](#introduction-weather-app)
2. [Global Variables](#global-variables-weather-app)
3. [Event Listeners](#event-listeners-weather-app)
4. [Weather Information Display](#weather-information-display)
   - [showWeatherInformation](#showWeatherInformation)
   - [fetcherWeatherData](#fetcherWeatherData)
   - [looper](#looper)
5. [Weather Dropdown Menu](#weather-dropdown-menu)
   - [dropDownMenu](#dropDownMenu)

## Introduction <a name="introduction-weather-app"></a>

The provided JavaScript code implements a weather app that fetches weather data from an API and displays it on the webpage. It also includes a dropdown menu for additional weather details on small screens.

## Global Variables <a name="global-variables-weather-app"></a>

```javascript
const temperatureDisplayer = document.querySelector(".actualT");
const temperatureFeelsLike = document.querySelector(".realF");

const cloudCover = document.querySelectorAll(".cover");
const humidity = document.querySelectorAll(".humid");
const UVindex = document.querySelectorAll(".UV");
const windSpeed = document.querySelectorAll(".wind");

const locationForm = document.getElementById("location_form");
const submitInput = document.querySelector(".submit_form");

const moreWeatherDetailButton = document.querySelector(".more_detail_button");
const weatherInformationMainDiv = document.querySelector(".weather_information");
const weather = document.querySelector(".weather_heading_small_screen");
```

These variables store references to HTML elements used in the weather app, such as temperature display, form elements, and the dropdown menu.

- **moreWeatherDetailButton** is a button for smaller screens. When the button is clicked it increases the size of div and displays the more detailed information about weather.  
When clicked again it dynamically decreases the size of the div and hides the additional information

## Event Listeners <a name="event-listeners-weather-app"></a>

```javascript
submitInput.addEventListener("click", showWeatherInformation);
moreWeatherDetailButton.addEventListener("click", dropDownMenu);
```

Event listeners are set on the submit button for fetching weather information and on the dropdown button for displaying additional weather details on small screens.

## Weather Information Display <a name="weather-information-display"></a>

### showWeatherInformation <a name="showWeatherInformation"></a>

```javascript
function showWeatherInformation(e) {
  e.preventDefault();
  async function fetcherWeatherData() {
    // ... (API fetching logic)
  }
  fetcherWeatherData()
    .then((result) => {
      // ... (extracting values and updating HTML)
    })
    .catch((error) => {
      temperatureDisplayer.innerHTML = `Error`;
    });
  locationForm.reset();
}
```

The `showWeatherInformation` function is triggered when the submit button is clicked. It prevents the page from reloading, fetches weather data from the API, and updates the HTML with the obtained information.

### fetcherWeatherData <a name="fetcherWeatherData"></a>

```javascript
async function fetcherWeatherData() {
  try {
    // ... (fetching data from the API)
    const fetchData = await fetch(url);
    const weatherFetchResult = await fetchData.json();
    return weatherFetchResult;
  } catch (error) {
    console.error("Some Error Occurred: 404");
  }
}
```

The `fetcherWeatherData` function is an asynchronous function responsible for fetching weather data from the API. It returns a promise that is resolved with the JSON data.

### looper <a name="looper"></a>

```javascript
function looper(list, value) {
  const updatedList = Array.from(list).map((items) => {
    items.innerHTML = value;
    return items;
  });
  return updatedList;
}
```

The `looper` function iterates over a list of HTML elements and updates their content with a specified value. It is used to update values for parameters like humidity, cloud cover, UV index, and wind speed.

## Weather Dropdown Menu <a name="weather-dropdown-menu"></a>

### dropDownMenu <a name="dropDownMenu"></a>

```javascript
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
```

The `dropDownMenu` function is triggered when the dropdown button is clicked. It toggles classes to rotate the dropdown icon, control the height of the dropdown menu, and add transitions for a smoother effect. The `ifyes` variable is used to check if the dropdown menu has been previously displayed.

# Lazy Loading Grid Images Documentation (with Infinite Scroll)
## Overview

This JavaScript code is designed to implement lazy loading for a grid of images. Lazy loading is a technique that defers the loading of non-critical resources (in this case, images) until they are needed. This is particularly useful for optimizing the performance of web pages with large image collections.

The code utilizes the Intersection Observer API to detect when grid items become visible in the user's viewport. As the user scrolls, new images are dynamically loaded and added to the grid, improving the page's loading time.

## Code Structure

### 1. Getting Grid Items and Container

```javascript
const imagesGridItems = document.querySelectorAll(".grid_item");
const containerWithGridItems = document.querySelector(".lazy_inner_container");
```

These lines of code select all elements with the class "grid_item" and the container element with the class "lazy_inner_container."

### 2. Event Listener for Lazy Loading on Window Load

```javascript
window.addEventListener("load", () => {
  setObserverOnItemsContainer();
});
```

An event listener is added to the window object, triggering the initiation of the observer when the window has fully loaded.

### 3. Observer Setup Function

```javascript
function setObserverOnItemsContainer() {
  // ...
}
```

This function sets up an Intersection Observer for each grid item. The observer is configured with specific options, such as the root element, root margin, and the visibility threshold.

### 4. Image Loader Function

```javascript
function imageLoader(element) {
  // ...
}
```

The `imageLoader` function dynamically creates an `img` element with a random image URL from "https://picsum.photos" and appends it to the specified grid item.

### 5. Intersection Handler Function

```javascript
function handleIntersection(observedElements) {
  // ...
}
```

This function is called when the observer detects an intersection. It checks if the last observed item is visible and, if true, generates new images using the `newImagesGenerator` function.

### 6. New Images Generator Function

```javascript
function newImagesGenerator(number) {
  // ...
}
```

The `newImagesGenerator` function creates a new `div` element with a background color and image based on the specified criteria. These new divs are appended to the container, extending the grid dynamically.

## Usage

1. Include the JavaScript file in your HTML document.
2. Ensure that the HTML structure includes elements with the classes "grid_item" and "lazy_inner_container."

```html
<!-- Example HTML structure -->
<div class="lazy_inner_container">
  <div class="grid_item"></div>
  <div class="grid_item"></div>
  <!-- ... -->
</div>
```


3. The script will automatically initiate lazy loading when the window is fully loaded.

# Scrollable Navbar with Responsive Behavior

This code provides a dynamic navigation bar that appears when the user scrolls up and hides when scrolling down. It also includes a dropdown menu for smaller screens.

## Implementation

### Show/Hide Navbar on Scroll

The code utilizes JavaScript to listen for scroll events and adjusts the visibility and height of the navigation bar accordingly.

1. **Initialization:**
   ```javascript
   const onScrollShowNavbar = document.querySelector(".on_scroll_navbar_for_larger");
   let prevScrollPos = window.pageYOffset;
   const threshold = 100;

## Scroll Event Listener:

   ```js
   window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos || currentScrollPos < threshold) {
    // Scrolling up or close to the top
    // Code to show the navbar
  } else {
    // Scrolling down
    // Code to hide the navbar
  }

  prevScrollPos = currentScrollPos;
});
```

## Responsive Dropdown Menu
The code includes a dropdown menu for smaller screens triggered by a button click.

   ```js
   const menuOptions = document.querySelector(".menu_options");
   const navbarOptionsButton = document.querySelector(".nav_bar_options");

   navbarOptionsButton.addEventListener("click", showMenuOptions);

   function showMenuOptions() {
   menuOptions.classList.toggle("max-h-72");
   }
```
when the bar button on the smaller screen is clicked, in increases the max-height of div to the specified height dynammically with a transition effect and a duration of 500 miliseconds.



## Contact <a name="contact"></a>

For any inquiries or support, please contact the project owner:

- **Saad Masood**
- [LinkedIn](https://www.linkedin.com/in/saad-masood-8b100125b/)
- [GitHub](https://github.com/MrSaadMasood)
- [email](mrsaadmasood1@gmail.com)

