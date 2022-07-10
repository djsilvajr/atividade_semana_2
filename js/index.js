console.log("teste")

 function enviaDados(){
    let nome = document.getElementById('txtNome').value
    let email = document.getElementById('txtEmail').value
    let descricao = document.getElementById('txtDescricao').value

    console.log("Formulário de contato => Nome: "+nome+" - E-mail: "+email+" - Descriçao: "+descricao)

    alert("Formulario enviado com sucesso!")
 }
