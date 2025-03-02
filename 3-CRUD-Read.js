const axios = require("axios"); // Importerer Axios

const apiKey = "Bytt med din egen API-nøkkel";
const apiUrl = "https://crudapi.co.uk/api/v1/people";

// Funksjon for å hente informasjon om personer
async function getPeople(apiKey) {
  try {
    const response = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    console.log("Hentede personer:", response.data); // Vist personer fra API
  } catch (error) {
    console.error("Klarte ikke å hente personer:", error); // Feilhåndtering
  }
}

// Kall funksjonen for å hente personer
getPeople(apiKey);
