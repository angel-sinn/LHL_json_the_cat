const { fetchBreedDescription } = require("./breedFetcher");

const breed = process.argv[2];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log("Error details -", error);
  } else {
    console.log(desc);
  }
});
