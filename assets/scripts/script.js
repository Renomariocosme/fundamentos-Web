
/*
caseSensitive =  reconhe letras A e a

por tag: getElementByTagName()
por Id: getElementById()
por nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()

*/

let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txt.innerHTML = "Nome inválido"
        txt.style.color = 'red'
    } else{
        txt.innerHTML = "Nome Válido"
        txt.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    //regex para validação do email

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //if modificado para chegar se o email bate com o padrão

    if(email.value.match(regex)){
        txtEmail.innerHTML = 'Email válido';
        txtEmail.style.color = '#006400';
        txtEmail.style.background = '#DCDCDC		';
        emailOk =  true;
    } else{
        txtEmail.innerHTML = "Email inválido";
        txtEmail.style.color = '#DC143C';
        txtEmail.style.background = '#DCDCDC';
        	
    }


}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto');
    //condições para que funcione e dá info pro usuario que não pode execeder esse valor.
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto é muito grande po, digite um menorzin aí máximo 100 caracteres';
        txtAssunto.style.color = '#DC143C';
        txtEmail.style.background = "151313";
        txtAssunto.style.display = 'block';
    } else {
        //serve para tirar a mensagem da tela, informando que está válido.
        txtAssunto.style.display = 'none'
        assuntoOk = true;
    }
}

function mapaZoom(){
    mapa.style.width = '800px';
    mapa.style.height = '600px';
}

function mapaNormal(){
    mapa.style.width = '400px';
    mapa.style.height = '250px';
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')

    } else{
        alert('Preencha o formulário corretamente antes de enviar')
    }
}