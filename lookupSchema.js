module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "lookupModel"
  "type": "object",
  "properties": {
    "lookupId": {
      "type": "number"
    },
    "lookupType": {
      "type": "string",
      "minLength": 1,
      "maxLength": 3
    },
    "lookupCode": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "lookupValue": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "createdBy": {
      "type": "string"
    },
    "updatedBy": {
      "type": ["string", "null"]
    },
    "createdDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdatedDate": {
      "type": ["string", "null"],
      "format": "date-time"
    }
  },
  "required": ["lookupId", "lookupType", "lookupCode", "lookupValue", "createdBy", "createdDate"]
}