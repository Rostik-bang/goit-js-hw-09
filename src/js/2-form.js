const formData = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData !== null) {
    const parsedData = JSON.parse(savedData);
    formEl.elements.email.value = parsedData.email || '';
    formEl.elements.message.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
}

window.addEventListener('DOMContentLoaded', loadFormData);

formEl.addEventListener('input', function (event) {
  const name = event.target.name;
  const value = event.target.value.trim();
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  formData.email = '';
  formData.message = '';
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
});
