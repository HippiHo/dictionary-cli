const axios = require("axios");

function search(word) {
  const app_id = "08a0e827";
  const app_key = "9a23c01afa7b549ead85c29452b3ac24";

  let url =
    "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/" +
    word.toLowerCase();

  axios({
    Accept: "application/json",
    method: "get",
    url: url,
    headers: { app_id: app_id, app_key: app_key }
  }).then(resp => {
    const provider = resp.data.metadata.provider;
    const searchWord = resp.data.results[0].id;
    const entry = resp.data.results[0].lexicalEntries[0];
    const category = entry.lexicalCategory;
    const definition = entry.entries[0].senses[0].short_definitions[0];

    console.log(`${searchWord} (${category})
    1. ${definition}
    
    Provided by ${provider}
    `);
  });
}

module.exports = search;
