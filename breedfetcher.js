const request = require('request');

const fetchBreedDescription = function(breedName, cb) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    // if no data return error
    if (error) {
      cb(error);
      return;
    }

    const data = JSON.parse(body);
    // if breed not found and array length is 0 return error
    if (data.length === 0) {
      cb("Breed not found!!!!", undefined);
    } else {
    // else pass the data
    cb(null, data[0].description);
    }
  });

};
module.exports = fetchBreedDescription;