const chai = require("chai");
const expect = chai.expect;

const validate = require("jsonschema").validate;
const userRoleMapSchema = require('../schemas/userRoleMap').schema;

let validuserRoleMap = {
  "userRoleMapId": 1,
  "username": "user",
  "roleId": 1
};

describe("testing userRoleMap schema", () => {
  it('should validate userRoleMap schema', (done) => {
    var res = validate(validuserRoleMap, userRoleMapSchema);
    expect(res.valid).to.eql(true);
    done();
  });

  it('should not validate userRoleMap schema', (done) => {
    var res = validate({
      "userRoleMapId": "k",
      "username": "user",
      "roleId": 1
    }, userRoleMapSchema);
    expect(res.valid).to.eql(false);
    done();
  });

  it('should return requires property error', (done) => {
    var res = validate({
      "userRoleMapId": 1,
      "roleId": 1
    }, userRoleMapSchema);
    expect(res.errors[0].message).to.eql('requires property "username"');
    done();
  });

  it('should return error for undefined roleId input', (done) => {
    var r;
    var res = validate({
      "userRoleMapId": 1,
      "username": "user",
      "roleId": r
    }, userRoleMapSchema);
    expect(res.errors[0].message).to.eql('requires property "roleId"');
    done();
  });

});