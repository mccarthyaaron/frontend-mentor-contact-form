
function toggleClasses () {
  if (selectedValue === 'general-enquiry') {
    supportContainer.classList.remove('selected')
    generalContainer.classList.add('selected')
  }
  if (selectedValue === 'support-request') {
    generalContainer.classList.remove('selected')
    supportContainer.classList.add('selected')
  }
}

let selectedValue = ''

function setSelectedValue(value) {
  selectedValue = value;

  if (selectedValue === 'general-enquiry') {
    supportContainer.classList.remove('selected')
    generalContainer.classList.add('selected')
  }
  if (selectedValue === 'support-request') {
    generalContainer.classList.remove('selected')
    supportContainer.classList.add('selected')
  }
}

const generalContainer = document.getElementById('general-container')
const generalRadio = document.getElementById('general')
const supportContainer = document.getElementById('support-container')
const supportRadio = document.getElementById('support')

generalRadio.addEventListener('change', () => setSelectedValue(generalRadio.value))
supportRadio.addEventListener('change', () => setSelectedValue(supportRadio.value))

const form = document.getElementById('form')
const toastElement = document.getElementById('toast')
const firstNameError = document.getElementById('firstName-error')
const lastNameError = document.getElementById('secondName-error')
const emailError = document.getElementById('email-error')
const radioError = document.getElementById('radio-error')
const messageError = document.getElementById('message-error')
const consentError = document.getElementById('consent-error')

form.addEventListener('submit', submitForm)

function showToast () {
  toastElement.classList.add('show-toast');
  setInterval(() => toastElement.classList.remove('show-toast'), 4000)
}

function submitForm(e) {
  e.preventDefault()
  const formData = new FormData(form);
  const firstName= formData.get('firstName')
  const lastName= formData.get('lastName')
  const email = formData.get('email')
  const query = formData.get('query')
  const message = formData.get('message')
  const consent= formData.get('consent')
  let error = null;

  if(!firstName) {
    firstNameError.classList.add('show-error-message')
    error = 'error'
  };
  if(!lastName) {
    lastNameError.classList.add('show-error-message')
    error = 'error'
  }
  if(!email) {
    emailError.classList.add('show-error-message');
    error = 'error'
  }
  if(query !== 'general-enquiry' && query !== 'support-request' ) {
    radioError.classList.add('show-error-message')
    error = 'error'
  }
  if(!message){
    console.log(3)
    messageError.classList.add('show-error-message');
    error = 'error'
  }
  if(!consent) {
    consentError.classList.add('show-error-message');
    error = 'error'
  }
  
    // console.log(1)

  if(!error) {
    showToast()
  }
}

