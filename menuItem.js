module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "MenuItemModel",
  "type": "object",
  "properties": {
    "menuItemId": {
      "type": "number"
    },
    "menuGroupId": {
      "$ref":"menuGroupSchema"
    },
    "menuItemCode": {
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
    },
    "menuItemOrder": {
      "type": "number"
    }
  },
  "required": ["menuGroupId","menuItemCode","title"]
};
