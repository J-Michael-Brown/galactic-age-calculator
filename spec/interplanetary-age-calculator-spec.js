import { exactEarthYears, mercury, venus, mars, jupiter } from './../src/interplanetary-age-calculator.js';

describe('exactEarthYears', function() {
  it('should', function() {
    const dateOfBirth = new Date('2000-1-2');
    const currentDate = new Date('2100-1-2');
    const age = exactEarthYears(dateOfBirth,currentDate);
    expect(100<=age && age<=100.1).toEqual(true);
  });
});

describe('mercury', function() {
  it('should return their age in Mercury years. (A Mercury year is .24 Earth years.)', function() {
    console.log(mercury(100));
    expect(mercury(100)).toEqual(416.7);
  });
});

describe('venus', function() {
  it('should return their age in Venus years. (A Venus year is .62 Earth years.)', function() {
    expect(venus(100)).toEqual(161.3);
  });
});

describe('mars', function() {
  it('should return their age in Mars years. (A Mars year is 1.88 Earth years.)', function() {
    expect(mars(100)).toEqual(53.2);
  });
});

describe('jupiter', function() {
  it('should return their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)', function() {
    expect(jupiter(100)).toEqual(8.4);
  });
});
