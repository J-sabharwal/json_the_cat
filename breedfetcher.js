const request = require('request');

let arg = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + arg[0], (error, response, body) => {
  // if no data return error
  if (error) {
    throw error;
  }
  const data = JSON.parse(body);
  // if breed not found and array length is 0 return error
  if (data.length === 0) {
    throw new Error("Breed not found!!!!");
  }
  // else return the data
  console.log(data[0].description);
});
