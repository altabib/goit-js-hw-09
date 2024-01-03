const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const input = feedbackForm.elements.email;
const textarea = feedbackForm.elements.message;

feedbackForm.addEventListener('input', handleForm);
feedbackForm.addEventListener('submit', handleSubmit);
populateForm();

function handleForm(event) {
  const feedbackStorage = {};

  feedbackStorage.email = event.currentTarget.elements.email.value.trim();
  feedbackStorage.message = event.currentTarget.elements.message.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackStorage));
}

function populateForm() {
  const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedInfo) {
    input.value = savedInfo.email;
    textarea.value = savedInfo.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const message = event.currentTarget.elements.message.value.trim();
  if (email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
}
