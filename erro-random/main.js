const btnPagina = document.querySelector('#btn-entrar')

function aleatorio() {
  return Math.floor(Math.random() * 99 + 1)
}

function podeEntrar() {
  return new Promise((resolve, reject) => {
    const estaCheio = aleatorio()

    if (estaCheio % 2 === 0) {
      alert('Pode entrar na festa!')
      resolve()
    } else {
      alert('A festa está cheia, aguarde mais um pouco!')
      reject(new Error('Festa lotada!'))
    }
  })
}

btnPagina.addEventListener('click', () => {
  podeEntrar().catch(error => console.log(error))
})
