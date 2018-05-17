module.exports.schema =
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "MenuGroupItemMapModel",
  "type": "object",
  "properties": {
    "menuGroupItemMapId": {
      "type": "number"
    },
    "menuGroupId": {
      "type": "number"
    },
    "menuItemId": {
      "type": "number"
    },
    "menuItemOrder": {
      "type": "number",
    }
  },
  "required": ["menuGroupItemMapId", "menuGroupId", "menuItemId"]
};