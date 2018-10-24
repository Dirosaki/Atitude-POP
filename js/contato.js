let botao = document.querySelector('button');
let modal = document.querySelector('.modal');
let opaca = document.querySelector('.opaca');
let xis = document.querySelector('.quadrado');


xis.onclick = function(){
    modal.style.display = 'none';
    opaca.style.display = 'none';
    document.location.reload();
}

onkeyup = function(evento){
    if(evento.key === "Enter"){
        modal.style.display = 'none';
        opaca.style.display = 'none';
    }
}

function enviarDados(){
    if(document.dados.nome.value.trim == "")
    {
    console.log( "Campo NOME vazio!" );
    document.dados.nome.focus();
    return false;
    }
    if (document.dados.sobrenome.value.trim == "")
    {
    console.log( "Campo SOBRENOME vazio!" );
    document.dados.sobrenome.focus();
    return false;
    }
        
    if( document.dados.mail.value.trim == "" || document.dados.mail.value.indexOf('.') === -1 || document.dados.mail.value.indexOf('@') === -1)
    {
        console.log( "Campo E-MAIL incorreto!" );
        document.dados.mail.focus();
        return false;
    }
    if(document.dados.assunto.value.trim == ""){
        console.log("Campo ASSUNTO vazio!");
        document.dados.assunto.focus();
        return false;
    }
    if(document.dados.telefone.value.trim == "" || document.dados.telefone.value.lenght < 8){
        console.log('Campo TELEFONE vazio ou incorreto!');
        document.dados.telefone.focus();
        return false;
    }
    if (document.dados.mensagem.value.trim == "")
    {
    console.log( "Campo MENSAGEM! vazio!" );
    document.dados.mensagem.focus();
    return false;
    }
    else{
        modal.style.display = 'flex';
        opaca.style.display = 'flex';     
        event.preventDefault();
        return true;

    }
}




    




      