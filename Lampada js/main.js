const lampada = document.querySelector('#lampada')
const btnLampada = document.querySelector('#btn-lampada')

btnLampada.addEventListener('click', () => {
  let img = lampada.src
  let lampadaLigada = 'https://www.w3schools.com/js/pic_bulbon.gif'
  let lampadaDesligada = 'https://www.w3schools.com/js/pic_bulboff.gif'

  if (img == lampadaDesligada) {
    lampada.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
    btnLampada.innerText = 'Desligar'
  } else {
    lampada.src = 'https://www.w3schools.com/js/pic_bulboff.gif'
    btnLampada.innerText = 'Ligar'
  }
})
