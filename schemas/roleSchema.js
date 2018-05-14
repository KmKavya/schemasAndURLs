module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "roleModel",
  "type": "object",
  "properties": {
    "roleId": {
      "type": "number"
    },
    "roleName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "description": {
      "type": "string",
      "minLength": 0,
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
  "required": ["roleId", "roleName", "createdBy", "createdDate"]
}