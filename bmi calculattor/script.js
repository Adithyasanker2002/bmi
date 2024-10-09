const form1 = document.querySelector('.col1');
const popup = document.querySelector('#pup');
const close = document.querySelector('#hasy1');
const height_input = document.querySelector('#bm2');
const weight_input = document.querySelector('#bm3');
form1.addEventListener('submit', function (e) {
  e.preventDefault();
  let height = parseInt(height_input.value);
  let weight = parseInt(weight_input.value);
  const bmi_score = document.querySelector('#hi');
  const bmi_text = document.querySelector('#dim');
  let text;
  if (height === '' || height < 0 || isNaN(height)) {
        alert("Please enter a valid height");
        height_input.focus();
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
        alert("Please enter a valid weight");
        weight_input.focus();
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
     if (bmi < 25) {
        text = 'You are underweight';
      } else if (bmi >= 25 && bmi < 30) {
        text = 'You are a healthy weight';
      } else {
        text = 'You are overweight';
      }
     
      popup.style.display = 'block';
     
      bmi_score.innerHTML = bmi;
     
      bmi_text.innerHTML = text;
     
      height_input.value = '';
      weight_input.value = '';
      
  }
});
close.addEventListener('click', function (e) {
    popup.style.display = 'none';
});