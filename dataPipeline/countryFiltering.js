const rawData = require("./sojs18.json");
const validCountries = require("./reference-data/countries.json");
const fs = require("fs");

/**
 * Takes the raw survery data
 * and filters the data according to the provided valid countries data set.
 *
 * Out of 20246 (Total Entries) , Only 17922 had entered their country in the survey.
 * Out of thise 17922, I was able to filter out 17491 valid entries on the criteria mentioned below.
 *
 * 1: First, every country name is trimmed for any trailing spaces.
 * 2: The country is then matched with the list of valid countries.
 * 3: If it matches then i add it into the resultant filtered data array.
 * 4: Invalid matches include: Spelling Mistaken Country Names, Email Addresses, Flags and other non-country words.
 *
 * @author {Muhmmad Ahmed}
 *
 * @param {Array<Object>} data
 * @param {Array<Object>} countries
 *
 * @returns {Array<Object>} filteredData
 */
function filterByCountries(data, countries) {
  const filteredData = [];
  data.forEach(item => {
    const country = item.about_you_your_country;
    if (country) {
      const trimmedItem = country
        .trim()
        .toLowerCase()
        .replace(/\./g, "");
      const isValid = countries.find(i => {
        return (
          i.code.toLowerCase() === trimmedItem ||
          trimmedItem.includes(i.name.toLowerCase()) ||
          (i.possibleCombinations &&
            i.possibleCombinations.find(i => i.toLowerCase() === trimmedItem))
        );
      });
      if (isValid) {
        item.about_you_your_country = isValid.name;
        filteredData.push(item);
      }
    }
  });

  return filteredData;
}

fs.writeFile(
  "filteredSojs18.json",
  JSON.stringify(filterByCountries(rawData, validCountries)),
  function(err) {
    if (err) throw err;
    console.log("complete");
  }
);
