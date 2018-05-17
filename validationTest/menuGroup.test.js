const chai = require("chai");
const expect = chai.expect;

const validate = require("jsonschema").validate;
const menuGroupSchema = require('../schemas/menuGroupSchema').schema;

let validmenuGroup = {
  menuGroupId: 1,
  menuGroupCode: "admin",
  menuGroupType: "system",
  title: "title",
  icon: "system"
};

describe("testing menuGroupSchema", () => {
  it('should validate menuGroupschema', (done) => {
    var res = validate(validmenuGroup, menuGroupSchema);
    expect(res.valid).to.deep.eql(true);
    done();
  });

  it('should not validate menuGroupschema', (done) => {
    var res = validate({
      menuGroupId: null,
      menuGroupCode: "admin",
      menuGroupType: "system",
      title: "title",
      icon: "system"
    }, menuGroupSchema);
    expect(res.valid).to.deep.eql(false);
    done();
  });

  it('should return requires property error', (done) => {
    var res = validate({
      menuGroupId: 1,
      menuGroupType: "system",
      title: "title",
      icon: "system"
    }, menuGroupSchema);
    expect(res.valid).to.eql(false);
    expect(res.errors[0].message).to.eql('requires property "menuGroupCode"');
    done();
  });

  it('should return error for undefined menuGroupCode input', (done) => {
    var j;
    var res = validate({
      menuGroupId: 1,
      menuGroupCode: j,
      menuGroupType: "system",
      title: "title",
      icon: "system"
    }, menuGroupSchema);
    expect(res.valid).to.eql(false);
    expect(res.errors[0].message).to.eql('requires property "menuGroupCode"');
    done();
  });
});