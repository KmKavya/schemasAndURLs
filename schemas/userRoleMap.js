module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "UserRoleMapModel",
  "type": "object",
  "properties": {
    "userRoleMapId": {
      "type": "number"
    },
    "username": {
      "type": "string",
      "minLength": 1,
      "maxLength": 50
    },
    "roleId": {
      "$ref":"roleSchema"
    }
  },
  "required": ["username","roleId"]
};
