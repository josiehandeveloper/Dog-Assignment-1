'use strict';

function userInput() {
  $("#doggie-form").submit(e => {
    e.preventDefault();
    let userInput = $("#num-of-doggos").val();
    
    getDogImage(userInput);
  });
}




function getDogImage(numInput) {
  if (numInput >= 1 && numInput <= 50) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
       .then(response => response.json())
       .then(responseJson => console.log(responseJson))
       .catch(error => alert("Something went wrong. Try again later."));
  } else if (numInput > 50) {
    return alert("Please choose a number equal or less than 50");
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  $(".results").html("");
  responseJson.message.forEach(renderedImg => {
    $(".results").append(`<img src="${renderedImg}" class="results">`);
  });
  //displayResults 
  $(".results").removeClass("hidden");
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  userInput();
});