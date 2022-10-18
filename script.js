const btnForm = document.getElementById('btnSubmit');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const agree = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const showCounter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementById('familia');

btnForm.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agree.addEventListener('change', () => {
  btnSubmit.disabled = !agree.checked;
});

textArea.addEventListener('input', () => {
  const text = textArea.value.length;
  showCounter.innerHTML = 500 - text;
});
// marco
// adição dos inputs no localStotage:
firstName.addEventListener('input', () => localStorage.setItem('keyFirstName', firstName.value));
lastName.addEventListener('input', () => localStorage.setItem('keyLastName', lastName.value));
email.addEventListener('input', () => localStorage.setItem('keyEmail', email.value));
house.addEventListener('change', (e) => localStorage.setItem('keyHouse', e.target.value));
family.addEventListener('click', (e) => localStorage.setItem('keyFamily', e.target.value));
