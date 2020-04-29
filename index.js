
$('#height-range').on("input", function () {
  $('#about_height').val(this.value);
  let new_bmi = calculate_bmi(about_height, about_weight);
  let bmi_range = calculate_bmi_range(new_bmi);
  $('#BMI-output').text(new_bmi);
  $('#BMI-range').text(bmi_range);
}).trigger("change");

$('#about_height').on("input", function () {
  $('#height-range').val(this.value);
  let new_bmi = calculate_bmi(about_height, about_weight);
  let bmi_range = calculate_bmi_range(new_bmi);
  $('#BMI-output').text(new_bmi);
  $('#BMI-range').text(bmi_range);
}).trigger("change");

$('#weight-range').on("input", function () {
  $('#about_weight').val(this.value);
  let new_bmi = calculate_bmi(about_height, about_weight);
  let bmi_range = calculate_bmi_range(new_bmi);
  $('#BMI-output').text(new_bmi);
  $('#BMI-range').text(bmi_range);
}).trigger("change");

$('#about_weight').on("input", function () {
  $('#weight-range').val(this.value);
  let new_bmi = calculate_bmi(about_height, about_weight);
  let bmi_range = calculate_bmi_range(new_bmi);
  $('#BMI-output').text(new_bmi);
  $('#BMI-range').text(bmi_range);
}).trigger("change");

// $('#intense_exercise, #light_moderate_exercise, #standing_walking, #sleeping').on("input", function () {
//   let sitting_time = calculate_sitting(intense_exercise, light_moderate_exercise, standing_walking, sleeping);
//   $('#sitting').val(sitting_time);
// }).trigger("change");


function calculate_bmi(about_height, about_weight) {
  console.log(about_height.value);

  //weight in kg and height in m
  let num = about_weight.value;
  let den = about_height.value / 100
  let new_bmi = num / (Math.pow(den, 2));

  return Math.round(new_bmi * 10) / 10;
}

function calculate_bmi_range(new_bmi) {
  let bmi_range = '';

  if (new_bmi < 18.5) {
    bmi_range = 'UNDERWEIGHT';
  } else if (new_bmi <= 24.9 && new_bmi >= 18.5) {
    bmi_range = 'HEALTHY';
  } else if (new_bmi <= 29.9 && new_bmi > 25) {
    bmi_range = 'OVERWEIGHT';
  } else if (new_bmi <= 34.9 && new_bmi > 30) {
    bmi_range = 'LOW-RISK OBESITY';
  } else if (new_bmi <= 39.9 && new_bmi > 35) {
    bmi_range = 'MODERATE-RISK OBESITY';
  } else {
    bmi_range = 'HIGH-RISK OBESITY';
  }

  return bmi_range;
}


