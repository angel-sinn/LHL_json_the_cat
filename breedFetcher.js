const request = require("request");
const breed = process.argv[2];
// console.log(breed);

const fetchBreed = function (breed) {
  const url = `https://api.thecatapiii.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    if (error) {
      console.log(`${error}`);
    } else if (response.statusCode !== 200) {
      console.log(`Request invalid. Error code: ${response.statusCode}`);
    } else {
      let data = JSON.parse(body);
      // console.log(data);
      // console.log("typeof data:", typeof data);

      if (data.length === 0) {
        console.log(`Breed info not found`);
      } else {
        console.log(data[0].description);
      }
    }
    // console.log("error", error);
    // console.log("response", response.statusCode);
    // console.log("body", body);
  });
};

fetchBreed(breed);
