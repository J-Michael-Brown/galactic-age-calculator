import { CalcUser } from './../src/calc-user.js';
import { lifeExpectencyChart } from './../src/life-expectancies.js';

describe('CalcUser', function() {
  let john;

  beforeEach(function() {
    const dateOfBirth = new Date('1996-6-11');
    const currentDate = new Date('2019-1-11');
    const gender = 'male';
    const countryOfResidence = 'United States';

    john = new CalcUser();
  });

  describe('lifeExpectency', function() {
    it('should determinte how many exact years a user has left to live on earth - based off of country of residence and gender.', function() {
      expect(john.lifeExpectency(lifeExpectencyChart)).toEqual(76);
    });
  });

});
