

var beerInfo = document.querySelector(".beer-info");


// Pulls information of the nearest breweries which is linked to first API based off of latitude,longitude.
function searchBeer(lat, long) {
 // API for application or program
  console.log(lat, long);
  //API URL that returns results based off latitude and longitude in batches of 3
  var getBeerInfo =
    "https://api.openbrewerydb.org/breweries?by_dist=" +
    lat +
    "," +
    long +
    "&per_page=3";

  fetch(getBeerInfo, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    
      // Clears out card for the following search
      beerInfo.innerHTML = "";
     // Iterates three times for brewery information
      for(var i = 0; i < response.length; i++){

      var brewery = document.createElement("div");
//brewery name
      var breweryName = document.createElement("h2");
      breweryName.textContent = response[i].name;
      console.log(response[i].name);
      brewery.prepend(breweryName);
//address
      var address = document.createElement("div");
      address.textContent = response[i].street;
      brewery.append(address);
      console.log(response[i].street);

      var address2 = document.createElement("div");
      address2.textContent =
      response[i].city + ", " + response[i].state + " " + response[i].postal_code;
      brewery.append(address2);
//Phone Number
      var phone = document.createElement("div");
      phone.textContent = response[i].phone;
      brewery.append(phone);
//website
      var website = document.createElement("div");
      var link = document.createElement("a");
      link.setAttribute("href", response[i].website_url);
      link.setAttribute("target", "_blank");
      link.textContent = response[i].website_url;
      website.append(link);
      brewery.append(website);

      var brk = document.createElement("hr")
      brewery.append(brk);

      beerInfo.append(brewery);

    }     
})
//error handling
    .catch(function (error) {
      console.log("error", error);
    });
}

