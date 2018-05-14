module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "RoleMenuGroupMapModel",
  "type": "object",
  "properties": {
    "roleMenuGroupMapId": {
      "type": "number"
    },
    "roleId": {
      "$ref":"roleSchema"
    },
    "menuGroupId": {
    "$ref":"menuGroupSchema"
    },
    "menuGroupOrder": {
      "type": "number",
    }
  },
  "required":["roleId","menuGroupId"]
};
