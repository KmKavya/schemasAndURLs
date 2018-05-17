const chai = require("chai");
const expect = chai.expect;

const validate = require("jsonschema").validate;
const roleMenuGroupMapSchema = require('../schemas/roleMenuGroupMap').schema;

let validroleMenuGroupMap = {
  "roleMenuGroupMapId": 1,
  "roleId": 1,
  "menuGroupId": 1,
  "menuGroupOrder": 1
};

describe("testing roleMenuGroupMap schema", () => {
  it('should validate roleMenuGroupMap schema', (done) => {
    var res = validate(validroleMenuGroupMap, roleMenuGroupMapSchema);
    expect(res.valid).to.eql(true);
    done();
  });

  it('should not validate roleMenuGroupMap schema', (done) => {
    var res = validate({
      "roleMenuGroupMapId": "h",
      "roleId": 1,
      "menuGroupId": 1,
      "menuGroupOrder": 1
    }, roleMenuGroupMapSchema);
    expect(res.valid).to.eql(false);
    done();
  });

  it('should return requires property error', (done) => {
    var res = validate({
      "roleMenuGroupMapId": 1,
      "menuGroupId": 1,
      "menuGroupOrder": 1
    }, roleMenuGroupMapSchema);
    expect(res.errors[0].message).to.eql('requires property "roleId"');
    done();
  });

  it('should return error for undefined roleId input', (done) => {
    var r;
    var res = validate({
      "roleMenuGroupMapId": 1,
      "roleId": r,
      "menuGroupId": 1,
      "menuGroupOrder": 1
    }, roleMenuGroupMapSchema);
    expect(res.errors[0].message).to.eql('requires property "roleId"');
    done();
  });

});