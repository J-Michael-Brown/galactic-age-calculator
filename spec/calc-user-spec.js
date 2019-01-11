import { CalcUser } from './../src/calc-user.js';

describe('CalcUser', function() {
  let john;

  beforeEach(function() {
    const dateOfBirth = new Date('1996-6-11');
    const currentDate = new Date('2019-1-11');
    const gender = 'male';
    const countryOfResidence = 'United States';

    john = new CalcUser();
  });

  describe('earthYearsLeft', function() {
    it('should determinte how many exact years a user has left to live on earth - based off of country of residence and gender.', function() {
      const daysLeft = john.earthYearsLeft();
      expect((76-22.5<daysLeft)&&(daysLeft<76-23)).toEqual(true);
    });
  });

  describe('mercuryYearsLeft', function() {
    it('should determinte how many exact years a user has left to live on mercury - based off of country of residence and gender.', function() {
      const daysLeft = john.mercuryYearsLeft(lifeExpectencyChart);
      expect((((76-22.5)/0.24)<daysLeft)&&(daysLeft<((76-23)/0.24))).toEqual(true);
    });
  });

  describe('venusYearsLeft', function() {
    it('should determinte how many exact years a user has left to live on venus - based off of country of residence and gender.', function() {
      const daysLeft = john.venusYearsLeft(lifeExpectencyChart);
      expect((((76-22.5)/0.62)<daysLeft)&&(daysLeft<((76-23)/0.62))).toEqual(true);
    });
  });

  describe('marsYearsLeft', function() {
    it('should determinte how many exact years a user has left to live on mars - based off of country of residence and gender.', function() {
      const daysLeft = john.marsYearsLeft(lifeExpectencyChart);
      expect((((76-22.5)/1.88)<daysLeft)&&(daysLeft<((76-23)/1.88))).toEqual(true);
    });
  });

  describe('jupiterYearsLeft', function() {
    it('should determinte how many exact years a user has left to live on jupiter - based off of country of residence and gender.', function() {
      const daysLeft = john.jupiterYearsLeft(lifeExpectencyChart);
      expect((((76-22.5)/11.86)<daysLeft)&&(daysLeft<((76-23)/11.86))).toEqual(true);
    });
  });

});
