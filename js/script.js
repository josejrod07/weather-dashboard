var searchForm = document.querySelector("#search-form");
var currentWeather = document.querySelector("#current-weather");
var currentTemp = document.getElementById("currentTemp");
var currentVisibility = document.getElementById("currentVisibility");
var currentDescription = document.getElementById("currentDescription");
var currentClouds = document.getElementById("currentClouds");
var selectedIcon = document.getElementById("weatherIcon");
var city = "orlando";
var APIKey = '931c9b978004cd5c67af5083b6aa9246'

// Function to both run and display weather data based on the OPENWEATHERMAP API fetch request.
function getWeatherData(city) {
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  return (
    fetch(apiUrl)
      // Lines 66-71: Confirms that the request is successful which allows the function to contiue, else gives the user an error message
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cannot retrieve data at this time.");
        }
        return response.json();
      })
      // Lines 73-81: Dynamically generates local weather info based on the user input city
      .then((data) => {
        console.log(data);
      })
  );
}
getWeatherData(); // Used primarily for testing and left in to allow easier changes to search paramaeters if needed in the future
//         currentTemp.textContent = data.list[0].main.temp + "F";
//         currentVisibility.textContent =
//           data.list[0].visibility + "m of visibility";
//         currentDescription.textContent =
//           data.list[0].weather[0].description.toUpperCase();
//         currentClouds.textContent = data.list[0].clouds.all + "% CLOUD COVER";
//         var iconCode = data.list[0].weather[0].icon;
//         var iconUrl =
//           "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
//         selectedIcon.setAttribute("src", iconUrl);
//       })
//   );
// }

// // Lines 86-95: Allows the user to input a city either through the initial pop-up modal, or choose a new city on the main page.
// // Either way, the user input will be run through the getWeatherData function to utilize the API
// function handleFormSubmit(event) {
//   event.preventDefault();
//   var city = modalInput.value.trim();
//   if (city) {
//     getWeatherData(city);
//   }
//   modalInput.value = "";
// }
// // Used to add clickability to the submit buttons, which then triggers the handleFormSubmit function
// searchForm.addEventListener("submit", handleFormSubmit);