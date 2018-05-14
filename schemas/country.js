module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "CountryModel",
  "type": "object",
  "properties": {
    "countryId": {
      "type": "number"
    },
    "countryName": {
      "type": "string"
    },
    "alpha2Code": {
      "type": "string",
    }
  },
  "required":["countryName","alpha2Code"]
};
