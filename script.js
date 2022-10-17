const btnForm = document.getElementById('btnSubmit');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const agree = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const showCounter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

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
