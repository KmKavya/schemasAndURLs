module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "MenuGroupItemMapModel",
  "type": "object",
  "properties": {
    "menuGroupItemMapId": {
      "type": "number"
    },
    "menuGroupId": {
      "$ref":"menuGroupSchema"
    },
    "menuItemId": {
      "$ref":"menuItemSchema"
    },
    "menuItemOrder": {
      "type": "number",
    }
  },
  "required":["menuGroupId","menuItemId"]
};
