// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) functionToRunWhenThingsAreDone(data); // return should be callback data
  });
};
const printOutCatBreed = breed => {
	console.log('Return Value: ', breed) // print out details
  }
breedDetailsFromFile('Bombay', printOutCatBreed);