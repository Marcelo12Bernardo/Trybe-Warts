const btnForm = document.getElementById('btnSubmit');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const agree = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
btnForm.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  console.log(inputEmail.value);
  console.log(inputSenha.value);
});


agree.addEventListener('change', function() {
  btnSubmit.disabled = !agree.checked;
})