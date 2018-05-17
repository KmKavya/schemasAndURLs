module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "RoleMenuGroupMapModel",
  "type": "object",
  "properties": {
    "roleMenuGroupMapId": {
      "type": "number"
    },
    "roleId": {
      "type": "number"
    },
    "menuGroupId": {
      "type": "number"
    },
    "menuGroupOrder": {
      "type": "number",
    }
  },
  "required": ["roleId", "menuGroupId"]
};