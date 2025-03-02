const axios = require("axios"); // Importerer Axios

const apiKey = "Bytt med din egen API-nøkkel";
const apiUrl = "https://crudapi.co.uk/api/v1/people"; // URL for API-et
const uuid = "Bytt med din egen uuid"; // ID hentet fra crudapi

// Funksjon for å slette en person
async function deletePerson(uuid, apiKey) {
  try {
    const response = await axios.delete(`${apiUrl}/${uuid}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    console.log("Personen ble slettet:", response.data); // Vist bekreftelse på at personen ble slettet
  } catch (error) {
    console.error("Klarte ikke å slette personen:", error); // Feilhåndtering
  }
}

// Kall funksjonen for å slette personen
deletePerson(uuid, apiKey);
