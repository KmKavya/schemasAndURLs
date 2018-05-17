const chai = require("chai");
const expect = chai.expect;

const validate = require("jsonschema").validate;
const menuGroupItemMapSchema = require('../schemas/menuGroupItemMap').schema;

let validmenuGroupItemMap = {
  "menuGroupItemMapId": 1,
  "menuGroupId": 1,
  "menuItemId": 1,
  "menuItemOrder": 1
};

describe("testing menuGroupItemMap schema", () => {
  it('should validate menuGroupItemMap schema', (done) => {
    var res = validate(validmenuGroupItemMap, menuGroupItemMapSchema);
    expect(res.valid).to.eql(true);
    done();
  });

  it('should not validate menuGroupItemMap schema', (done) => {
    var res = validate({
      "menuGroupItemMapId": "k",
      "menuGroupId": 1,
      "menuItemId": 1,
      "menuItemOrder": 1
    }, menuGroupItemMapSchema);
    expect(res.valid).to.eql(false);
    done();
  });

  it('should return requires property error', (done) => {
    var res = validate({
      "menuGroupItemMapId": 1,
      "menuItemId": 1,
      "menuItemOrder": 1
    }, menuGroupItemMapSchema);
    expect(res.errors[0].message).to.eql('requires property "menuGroupId"');
    done();
  });

  it('should return error for undefined menuItemId input', (done) => {
    var r;
    var res = validate({
      "menuGroupItemMapId": 1,
      "menuGroupId": 1,
      "menuItemId": r,
      "menuItemOrder": 1
    }, menuGroupItemMapSchema);
    expect(res.errors[0].message).to.eql('requires property "menuItemId"');
    done();
  });

});