const axios = require("axios"); // Importerer Axios

const apiKey = "Bytt med din egen API-nøkkel";
const apiUrl = "https://crudapi.co.uk/api/v1/people"; // URL for API-et
const uuid = "Bytt med din egen uuid"; // ID hentet fra crudapi

const updatedData = {
  name: "Elias", //Endret navn
  age: 28, // Endret alder
  location: "Stavanger",
  haircolor: "Brunette", //Endret hårfarge
  isStudent: true,
};

// Funksjon for å oppdatere informasjon om en person
async function updatePerson(uuid, updatedData, apiKey) {
  try {
    const response = await axios.put(`${apiUrl}/${uuid}`, updatedData, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    console.log("Personen ble oppdatert:", response.data); // Vist oppdatert person
  } catch (error) {
    console.error("Klarte ikke å oppdatere personen:", error); // Feilhåndtering
  }
}

// Kall funksjonen for å oppdatere personen
updatePerson(uuid, updatedData, apiKey);
