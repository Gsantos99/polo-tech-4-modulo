let contadorPagina = document.querySelector('#numero')

function color(numero) {
  if (numero.innerText % 2 == 0) {
    numero.style.color = 'green'
  } else {
    numero.style.color = 'red'
  }
}

function decrementar() {
  if (contadorPagina.innerText > 0) contadorPagina.innerText--
  color(contadorPagina)
}
function zerar() {
  contadorPagina.innerText = 0
  color(contadorPagina)
}

function incrementar() {
  if (contadorPagina.innerText < 100) contadorPagina.innerText++
  color(contadorPagina)
}
