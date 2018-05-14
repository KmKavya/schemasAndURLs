const chai = require("chai");
const expect = chai.expect;

const validate = require("jsonschema").validate;
const lookUpSchema = require('../schemas/lookupSchema').schema;

let lookup = {
  lookupId: 1,
  lookupType: "YN",
  lookupCode: "0",
  lookupValue: "YES",
  createdBy: "system",
  createdDate: new Date().toISOString()
};

describe("testing lookup schema", () => {
  it('should validate lookup schema', (done) => {
    var res = validate(lookup, lookUpSchema);
    expect(res.valid).to.deep.eql(true);
    done();
  });

  it('should not validate lookup schema', (done) => {
    var res = validate({
      lookupId: 1,
      lookupType: 2,
      lookupCode: "0",
      lookupValue: "YES",
      createdBy: "system",
      createdDate: new Date().toISOString()
    }, lookUpSchema);
    expect(res.valid).to.deep.eql(false);
    expect(res.errors[0].message).to.eql('is not of a type(s) string');
    done()
  });

  it('should return requires property error', (done) => {
    var res = validate({
      lookupId: 1,
      lookupCode: "0",
      lookupValue: "YES",
      createdBy: "system",
      createdDate: new Date().toISOString()
    }, lookUpSchema);
    expect(res.errors[0].message).to.eql('requires property "lookupType"');
    done();
  });

});