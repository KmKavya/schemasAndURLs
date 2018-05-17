module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "UserSessionModel",
  "type": "object",
  "properties": {
    "userSessionId": {
      "type": "number"
    },
    "sessionId": {
      "type": "string"
    },
    "startTime": {
      "type": "string",
      "format": "date-time"
    },
    "endTime": {
      "type": "string",
      "format": "date-time"
    },
    "username": {
      "type": "string"
    }
  },
  "required":["username","startTime","sessionId"]
};
