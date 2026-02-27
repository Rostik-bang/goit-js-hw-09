const formData = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', function (event) {
  //   const formEmail = event.target.value.trim();
  const name = event.target.name;
  const value = event.target.value.trim();
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
function loadFormData() {
  const savedTheme = localStorage.getItem('feedback-form-state');
  if (savedTheme !== null) {
    const parsedTheme = JSON.parse(savedTheme);
    formEl.elements.email.value = parsedTheme.email;
    formEl.elements.message.value = parsedTheme.message;
    formData.email = parsedTheme.email;
    formData.message = parsedTheme.message;
  }
}
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
