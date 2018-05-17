const chai = require("chai");
const expect = chai.expect;

const validate = require("jsonschema").validate;
const countrySchema = require('../schemas/country').schema;

let validCountry = {
  countryId: 1,
  countryName: "India",
  alpha2Code: "xxx"
};

describe("testing country schema", () => {
  it('should validate country schema', (done) => {
    var res = validate(validCountry, countrySchema);
    expect(res.valid).to.eql(true);
    done();
  });

  it('should not validate country schema', (done) => {
    var res = validate({
      countryId: "r",
      countryName: "India",
      alpha2Code: "xxx"
    }, countrySchema);
    expect(res.valid).to.eql(false);
    done();
  });

  it('should return requires property error', (done) => {
    var res = validate({
      countryId: 1,
      countryName: "India",
    }, countrySchema);
    expect(res.valid).to.eql(false);
    expect(res.errors[0].message).to.eql('requires property "alpha2Code"');
    done();
  });

  it('should return error for undefined countryName input', (done) => {
    var r;
    var res = validate({
      countryId: 1,
      countryName: r,
      alpha2Code: "xxx"
    }, countrySchema);
    expect(res.valid).to.eql(false);
    expect(res.errors[0].message).to.eql('requires property "countryName"');
    done();
  });

});