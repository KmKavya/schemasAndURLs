const chai = require("chai");
const expect = chai.expect;

const validate = require("jsonschema").validate;
const roleSchema = require('../schemas/roleSchema').schema;

let validRole = {
  roleId: 1,
  roleName: "admin",
  createdBy: "system",
  createdDate: new Date().toISOString()
};

describe("testing role schema", () => {
  it('should validate role schema', (done) => {
    var res = validate(validRole, roleSchema);
    expect(res.valid).to.deep.eql(true);
    done();
  });

  it('should not validate role schema', (done) => {
    var res = validate({
      roleId: "k",
      roleName: "admin",
      createdBy: "system",
      createdDate: new Date().toISOString()
    }, roleSchema);
    expect(res.valid).to.deep.eql(false);
    done()
  });

  it('should return requires property error', (done) => {
    var res = validate({
      roleId: 1,
      roleName: "admin",
      createdBy: "system"
    }, roleSchema);
    expect(res.errors[0].message).to.eql('requires property "createdDate"');
    done();
  });

  it('should return error for undefined roleName input', (done) => {
    var res = validate({
      roleId: 1,
      roleName: undefined,
      createdBy: "system",
      createdDate: new Date().toISOString()
    }, roleSchema);
    expect(res.errors[0].message).to.eql('requires property "roleName"');
    done();
  });

});