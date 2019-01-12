import { lifeExpectencyChart } from './life-expectency';
import { CalcUser } from './calc-user';
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
    $('').text("birth: " + dateOfBirth);
    const dateCurrent = $('#current-date').val();
    $('').text("today: " + dateCurrent);
    const gender = $('#gender option:selected').val();
    $('').text("gender: " + gender);
    const country = $('#country option:selected').val();
    $('').text("country name: " + country);
    const user = new CalcUser(gender, country, dateOfBirth, dateCurrent);

    $('').text(user.gender + " " + user.country);
    $('').text(`Earth years left: ${user.earthYearsLeft()}`);
    $('').text(`Mercury years left: ${user.mercuryYearsLeft()}`);
    $('').text(`Venus years left: ${user.venusYearsLeft()}`);
    $('').text(`Mercury years left: ${user.mercuryYearsLeft()}`);
    $('').text(`Jupiter years left: ${user.jupiterYearsLeft()}`);
  });
});
