module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "applicationConfigModel"
  "type": "object",
  "properties": {
    "applicationConfigId": {
      "type": "number"
    },
    "applicationId": {
      "$ref": "applicationSchema"
    },
    "attributeCode": {
      "type": "string",
      "minLength": 1,
      "maxLength": 50
    },
    "attributeValue": {
      "type": "string",
      "minLength": 1,
      "maxLength": 50
    }
  },
  "required": ["applicationConfigId", "applicationId", "attributeCode", "attributeValue"]
}