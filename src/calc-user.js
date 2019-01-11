import { lifeExpectencyChart } from './life-expectancy.js';
import { exactEarthYears, mercury, venus, mars, jupiter } from './../src/interplanetary-age-calculator.js';

export class CalcUser {
  constructor(gender, countryOfResidence, dateOfBirth, currentDate = Date.now()) {
    this.gender = gender;
    this.country = countryOfResidence;
    this.birthDate = dateOfBirth;
    this.today = currentDate;
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

  earthDaysLeft() {
    const givenAge = exactEarthYears(this.birthDate, this.today);
    const expectency = this.lifeExpectency();
    return expectency-givenAge;
  }

  mercuryDaysLeft() {

  }

  venusDaysLeft() {

  }

  marsDaysLeft() {

  }

  jupiterDaysLeft() {

  }

}
