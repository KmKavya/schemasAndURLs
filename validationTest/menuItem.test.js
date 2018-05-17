const chai = require("chai");
const expect = chai.expect;

const validate = require("jsonschema").validate;
const menuItemSchema = require('../schemas/menuItem').schema;

let validmenuItem = {
  menuGroupId: 1,
  menuItemCode: "admin",
  title: "title"
};

describe("testing menuItemSchema", () => {
  it('should validate menuItemSchema', (done) => {
    var res = validate(validmenuItem, menuItemSchema);
    expect(res.valid).to.deep.eql(true);
    done();
  });

  it('should not validate menuItemSchema', (done) => {
    var res = validate({
      menuGroupId: "1",
      menuItemCode: "admin",
      title: "title"
    }, menuItemSchema);
    expect(res.valid).to.eql(false);
    done();
  });

  it('should return minimum length required error', (done) => {
    var res = validate({
      menuGroupId: 1,
      menuItemCode: "",
      title: "title"
    }, menuItemSchema);
    expect(res.valid).to.eql(false);
    expect(res.errors[0].message).to.eql("does not meet minimum length of 1");
    done();
  });
});