const request = require("request");

const fetchBreedDescription = function (breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(`${error}`, null);
    } else if (response.statusCode !== 200) {
      callback(`Request invalid. Error code: ${response.statusCode}`, null);
    } else {
      let data = JSON.parse(body);

      if (data.length === 0) {
        callback(`Breed info not found`, null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
