const chai = require("chai");
const expect = chai.expect;

const validate = require("jsonschema").validate;
const currencySchema = require("../schemas/currency").schema;

let validCurrency = {
  currencyId: 1,
  currencyName: "Rupees",
  currencyCode: "123",
  minorUnit: "xxx"
}

describe("Testing currency schema", () => {

  it("Should validate currency schema", (done) => {
    var res = validate(validCurrency, currencySchema);
    expect(res.valid).to.eql(true);
    done();
  });

  it("Should not validate currency schema", (done) => {
    var res = validate({
      currencyId: "k",
      currencyName: "Rupees",
      currencyCode: "coins",
      minorUnit: "xxx"
    }, currencySchema);
    expect(res.valid).to.eql(false);
    done();
  });

  it("Should return requires property error", (done) => {
    var res = validate({
      currencyId: 1,
      currencyName: "Rupees",
      currencyCode: "coins"
    }, currencySchema);
    expect(res.valid).to.eql(false);
    expect(res.errors[0].message).to.eql('requires property "minorUnit"');
    done();
  });

  it("Should return error for undefined currencyName input", (done) => {
    var k;
    var res = validate({
      currencyId: 1,
      currencyName: k,
      currencyCode: "coins",
      minorUnit: "xxx"
    }, currencySchema);
    expect(res.valid).to.eql(false);
    expect(res.errors[0].message).to.eql('requires property "currencyName"');
    done();
  });

});