
let btn = document.querySelector('.fa-eye');

btn.addEventListener('click', ()=>{ 
    let inputSenha = document.querySelector('#Senha');

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
    } else{
        inputSenha.setAttribute('type', 'password');
    }
});



function cadastrar(){
    

    var name = document.getElementById('Nome').value;
    var user = document.getElementById('Usuario').value;
    var password = document.getElementById('Senha').value;

    

    if(user == "admin" && password == "admin"){
        alert('Cadastrato');
    }
}