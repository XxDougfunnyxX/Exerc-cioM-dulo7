const campoA = document.getElementById('CampoA');
const campoB = document.getElementById('CampoB');
const form = document.getElementById('form')

function calcular(numero){
  numero = campoA.value > campoB.value;
  return numero; 
}

form.addEventListener('submit', function(e) {}
  e.preventDefault();

  const mensagemSucesso = O número ;<b>${campoA.value}</b> "é maior que o campo B" ; <b>${campoB.value</b>
  const mensagemErro = "O número";<b>${campoB.value}</b> "é maior que o Campo A" ; <b>${campoB.value</b>
  if (calcular()) {
    document.querySelector('#mensagem').innerHTML = mensagemSucesso;
    document.querySelector('#mensagem').classList.add =("sucess-message") ;
    document.querySelector('#mensagem').classList.remove("errorMessage");
    document.querySelector("mensagem").style.display = "flex";
  } else {
    document.querySelector('#mensagem').innerHTML = mensagemErro;
    document.querySelector('#mensagem').style.display =("flex") ;
    document.querySelector('#mensagem').classList.remove("sucess-message");
    document.querySelector("mensagem").classList.add(errormenssage) = "flex";
  } else
  }
