import { lifeExpectencyChart } from './life-expectency';
import { CalcUser } from './calc-user';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  lifeExpectencyChart.forEach(function(lifeExpectency){
    $('#countries').append(`<option value="${lifeExpectency.country}">${lifeExpectency.country}</option>`);
  });

  $('#user-info').submit(function(event){
    event.preventDefault();

    const dateOfBirth = $('#birth-date option:selected').val();
    const dateCurrent = $('#current-date option:selected').val();
    const gender = $('#gender option:selected').val();
    const country = $('#country option:selected').val();

    const user = new CalcUser(gender, country, dateOfBirth, dateCurrent);

    console.log(user.gender + " " + user.country);
    console.log(`Earth years left: ${user.earthYearsLeft()}`);
    console.log(`Mercury years left: ${user.mercuryYearsLeft()}`);
    console.log(`Venus years left: ${user.venusYearsLeft()}`);
    console.log(`Mercury years left: ${user.mercuryYearsLeft()}`);
    console.log(`Jupiter years left: ${user.jupiterYearsLeft()}`);
  });
});
