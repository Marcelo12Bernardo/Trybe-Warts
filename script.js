const btnForm = document.getElementById('btnSubmit');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
btnForm.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  console.log(inputEmail.value);
  console.log(inputSenha.value);
  console.log('oi');
});
