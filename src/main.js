import { lifeExpectencyChart } from './life-expectancy';
import { CalcUser } from './calc-user';
import { mercury, venus, mars, jupiter } from './interplanetary-age-calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function fillCountries() {
  lifeExpectencyChart.forEach(function(lifeExpectency){
    $('#country').append(`<option value="${lifeExpectency.country}">${lifeExpectency.country}</option>`);
  });
}



$(document).ready(function() {

  fillCountries();

  $('#user-info').submit(function(event){
    event.preventDefault();

    const dateOfBirth = $('#birth-date').val();
    const dateCurrent = $('#current-date').val();
    const gender = $('#gender option:selected').val();
    const country = $('#country option:selected').val();
    const user = new CalcUser(gender, country, dateOfBirth, dateCurrent);

    $('#earth-expectancy').text(user.earthYearsLeft());
    $('#mercury-expectancy').text(user.mercuryYearsLeft());
    $('#venus-expectancy').text(user.venusYearsLeft());
    $('#mars-expectancy').text(user.mercuryYearsLeft());
    $('#jupiter-expectancy').text(user.jupiterYearsLeft());

    $('#earth-age').text(user.age);
    $('#mercury-age').text(mercury(user.age));
    $('#venus-age').text(venus(user.age));
    $('#mars-age').text(mars(user.age));
    $('#jupiter-age').text(jupiter(user.age));
  });
});
