const axios = require("axios"); // Importerer Axios

const apiKey = "Bytt med din egen API-nøkkel";
const apiUrl = "https://crudapi.co.uk/api/v1/people";

// Eksempel på hvordan du kan bruke funksjonen:
const newPerson = [
  {
    name: "Alice",
    age: 25,
    location: "Oslo",
    haircolor: "Blond",
    isStudent: false,
  },
];

// Funksjon for å legge til en ny person
async function addPerson(personData, apiKey) {
  try {
    const response = await axios.post(apiUrl, personData, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    console.log("Ny person lagt til:", response.data);
  } catch (error) {
    console.error("Klarte ikke å legge til personen:", error);
  }
}

// Kall funksjonen for å legge til personen
addPerson(newPerson, apiKey);
