function start() {
  if ("geolocation" in navigator) { // checking if the the geolocation is there or not 
    navigator.geolocation.getCurrentPosition( // takes 3 argument first is the callback function second is to handle error and third is optional and some property
      (position) => {
        console.log(position);
        document.querySelector("output").textContent = `
            lat: ${position.coords.latitude} log ${position.coords.longitude}
        `;
      },
      (error) => {
        console.log(error);
      },{
        enableHighAccuracy: true, // 
        maximumAge: 60000, // 
        timeout: 10000 // if web-site dont get location after specific time the stop it 
      }
    );
    console.log("hi")
  }
}
// geolocation API 


function start() {
  if ("geolocation" in navigator) { // Check if geolocation is supported by the browser
    navigator.geolocation.getCurrentPosition( // Obtain the current position
      (position) => {
        // Success callback function when the position is successfully retrieved
        console.log(position);
        document.querySelector("#output").textContent = `
          lat: ${position.coords.latitude} log ${position.coords.longitude}
        `;
      },
      (error) => {
        // Error callback function when there's an issue with retrieving the position
        console.log(error);
      },
      {
        enableHighAccuracy: true, // Request high accuracy for the location
        maximumAge: 60000,        // Maximum age of cached position in milliseconds (60 seconds in this case)
        timeout: 10000            // Timeout for obtaining the location (10 seconds in this case)
      }
    );
    console.log("hi"); // This log statement will be executed after initiating the geolocation request
  }
}
