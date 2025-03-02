const axios = require("axios");

axios
  .get("https://hp-api.onrender.com/api/characters/house/gryffindor")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Oops, noe gikk galt!", error);
  });
