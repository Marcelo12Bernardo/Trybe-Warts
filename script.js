window.onload = function () {
    const btnForm = document.querySelector('btnSubmit');
    const inpuEmail = document.getElementById('email');
    const inputSenha = document.getElementById('senha');
    btnForm.addEventListener('click', function () {

        if (inpuEmail.innerText === 'tryber@teste.com' && inputSenha.innerText === '123456') {
            alert('Olá, Tryber!');
        }else {
            alert('Email ou senha inválidos.');
        }
    });
};
