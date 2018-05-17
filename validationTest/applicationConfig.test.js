const chai = require("chai");
const expect = chai.expect;

const validate = require("jsonschema").validate;
const applicationConfigSchema = require('../schemas/applicationConfigSchema').schema;

let appConfig = {
  applicationConfigId: 1,
  applicationId: 2,
  attributeCode: "code",
  attributeValue: "value"
};

describe("testing applicationConfigSchema", () => {
  it('should validate valid applicationConfig object', (done) => {
    var res = validate(appConfig, applicationConfigSchema);
    expect(res.valid).to.deep.eql(true);
    done();
  });

  it('should not validate applicationConfig', (done) => {
    var res = validate({
      applicationConfigId: 1,
      applicationId: 2,
      attributeCode: "code"
    }, applicationConfigSchema);
    expect(res.valid).to.eql(false);
    done();
  });

  it('should return requires property error', (done) => {
    var res = validate({
      applicationConfigId: 1,
      applicationId: 2,
      attributeCode: "code"
    }, applicationConfigSchema);
    expect(res.valid).to.eql(false);
    expect(res.errors[0].message).to.eql('requires property "attributeValue"');
    done();
  });
});