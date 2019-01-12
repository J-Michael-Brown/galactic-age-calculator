import { lifeExpectencyChart } from './life-expectancy.js';
import { exactEarthYears, mercury, venus, mars, jupiter } from './../src/interplanetary-age-calculator.js';

export class CalcUser {
  constructor(gender, countryOfResidence, dateOfBirth, currentDate = Date.now()) {
    this.gender = gender;
    this.country = countryOfResidence;
    this.birthDate = dateOfBirth;
    this.today = currentDate;
    this.age = exactEarthYears(this.birthDate, this.today);
  }

  lifeExpectency(lifeExpectencyArray = lifeExpectencyChart) {
    for (let lifeExpectencyIndex = 0; lifeExpectencyIndex < lifeExpectencyArray.length; lifeExpectencyIndex++) {
      const data = lifeExpectencyArray[lifeExpectencyIndex];
      if (this.country == data.country) {
        if (this.gender == 'male') {
          return data.male;
        } else if (this.gender == 'female') {
          return data.female;
        } else {
          return data.average;
        }
      }
    }
    return false;
  }

  earthYearsLeft() {
    const givenAge = exactEarthYears(this.birthDate, this.today);
    const expectancy = this.lifeExpectency();
    return expectancy-givenAge;
  }

  mercuryYearsLeft() {
    const normalYears = this.earthYearsLeft();
    const mercuryYears = mercury(normalYears);
    return mercuryYears;
  }

  venusYearsLeft() {
    const normalYears = this.earthYearsLeft();
    const venusYears = venus(normalYears);
    return venusYears;
  }

  marsYearsLeft() {
    const normalYears = this.earthYearsLeft();
    const marsYears = mars(normalYears);
    return marsYears;
  }

  jupiterYearsLeft() {
    const normalYears = this.earthYearsLeft();
    const jupiterYears = jupiter(normalYears);
    return jupiterYears;
  }

}
