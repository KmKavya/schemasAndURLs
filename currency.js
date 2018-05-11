module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "CurrencyModel",
  "type": "object",
  "properties": {
    "currencyId": {
      "type": "number"
    },
    "currencyName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 50
    },
    "currencyCode": {
      "type": "string",
      "minLength":1,
      "maxLength":50
    },
    "minorUnit": {
      "type": "string",
      "minLength": 1,
      "maxLength": 50
    }
  },
  "required": ["currencyName","currencyCode","minorUnit"]
};
