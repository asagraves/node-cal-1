'use strict';

const { expect } = require('chai');
const { execSync } = require('child_process');
  const { outputCal, calBodyOutput, calHeaderOutput, getWeeks, getTotalDays } = require("../lib/monthGen.js");

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();

      expect(output).to.equal(goal);
    });
  })
});

//test for weeks
describe("Week tests", () => {


  it('should the retrn the appropriate number of weeks for all types of weeks', () => {
      expect(getWeeks(2,2015)).to.equal(4);
      expect(getWeeks(10,2015)).to.equal(5);
      expect(getWeeks(8,2015)).to.equal(6);
  });

   it('handles erroneous arguments with letters', () => {
      expect(execSync('./cal.js 6 b').toString()).to.equal("Arguments are invalid\n");
      expect(execSync('./cal.js a b').toString()).to.equal("Arguments are invalid\n");
      expect(execSync('./cal.js a 1973').toString()).to.equal("Arguments are invalid\n");
  });

   it('handles erroneous arguments with numbers', () => {
     expect(execSync('./cal.js 0 1872').toString()).to.equal("Arguments are invalid\n");
     expect(execSync('./cal.js 3 1672').toString()).to.equal("Arguments are invalid\n");
     expect(execSync('./cal.js 3 0').toString()).to.equal("Arguments are invalid\n");
   });

});

//test for total days
describe("day tests", () => {
  it("should return the total number of days in the month", () => {
    expect(getTotalDays(11,2015)).to.equal(30);
    expect(getTotalDays(12,2015)).to.equal(31);
    expect(getTotalDays(2,2012)).to.equal(29);
    expect(getTotalDays(2,2014)).to.equal(28);
  });

});

describe("Zeller's congruence", () => {
     const zellers = require('../lib/zellars.js');

    describe('.modifiedMonth', () => {
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
        expect(zellers.modifiedMonth(2)).to.equal(14);
         expect(zellers.modifiedMonth(3)).to.equal(3);

      });
    });

    describe('.modifiedYear', () => {
      it('returns 2015 for Jan 2015', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
        expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });

    describe('.getDay', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
      });
    });

    });
  });



