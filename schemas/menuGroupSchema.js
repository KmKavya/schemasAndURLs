module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "menuGroupModel",
  "type": "object",
  "properties": {
    "menuGroupId": {
      "type": "number"
    },
    "menuGroupCode": {
      "type": "string",
      "minLength": 1,
      "maxLength": 50
    },
    "menuGroupType": {
      "type": "string",
      "minLength": 1,
      "maxLength": 50
    },
    "title": {
      "type": "string",
      "minLength": 1,
      "maxLength": 50
    },
    "icon": {
      "type": "string",
      "minLength": 1,
      "maxLength": 50
    }
  },
  "required": ["menuGroupId", "menuGroupCode", "menuGroupType", "title"]
};