const chai = require("chai");
const expect = chai.expect;

const validate = require("jsonschema").validate;
const userSessionschema = require('../schemas/userSession').schema;

let validuserSession = {
  userSessinId: 1,
  sessionId: "system",
  startTime: new Date().toISOString(),
  endTime: new Date().toISOString(),
  username: "system"
};

describe("testing userSessionschema", () => {
  it('should validate userSessionschema', (done) => {
    var res = validate(validuserSession, userSessionschema);
    expect(res.valid).to.deep.eql(true);
    done();
  });

  it('should not validate userSessionschema', (done) => {
    var res = validate({
      userSessionId: "k",
      sessionId: "system",
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      username: "system"
    }, userSessionschema);
    expect(res.valid).to.deep.eql(false);
    done();
  });

  it('should return requires property error', (done) => {
    var res = validate({
      userSessionId: 1,
      sessionId: "system",
      endTime: new Date().toISOString(),
      username: "system"
    }, userSessionschema);
    expect(res.valid).to.eql(false);
    expect(res.errors[0].message).to.eql('requires property "startTime"');
    done();
  });

  it('should return error for undefined sessionId input', (done) => {
    var res = validate({
      userSessionId: 1,
      sessionId: undefined,
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      username: "system"
    }, userSessionschema);
    expect(res.valid).to.eql(false);
    expect(res.errors[0].message).to.eql('requires property "sessionId"');
    done();
  });

});