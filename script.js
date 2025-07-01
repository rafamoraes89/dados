let btnMaiorNumero
let btnMelhorNumero
let sorteMaiorNumero = 0
let sorteMelhorNumero = 0

// Funções que selecionam e escolhem a quantidade dos dados================================================================

let lugar1 = document.querySelector('#lugar1')
let lugar2 = document.getElementById('lugar2')
let lugar3 = document.getElementById('lugar3')
let lugar4 = document.getElementById('lugar4')

let dado2 = {
  dado: 'moeda',
  dadoN: 2,
  lado1: "<img src='image/moeda1.svg'></img>",
  lado2: "<img src='image/moeda2.svg'></img>",
  ladoMaior: "<img src='image/moeda2.svg'></img>",
  da: false,
  db: false,
  dc: false,
  dd: false
}

let dado4 = {
  dado: 'dadoAzul',
  dadoN: 4,
  lado1: "<img src='image/dadoAzul1.png'></img>",
  lado2: "<img src='image/dadoAzul2.png'></img>",
  lado3: "<img src='image/dadoAzul3.png'></img>",
  lado4: "<img src='image/dadoAzul4.png'></img>",
  ladoMaior: "<img src='image/dadoAzul4.png'></img>",
  da: false,
  db: false,
  dc: false,
  dd: false
}

let dado6 = {
  dado: 'dadoAzul',
  dadoN: 6,
  lado1: "<img src='image/dadoAzul1.png'></img>",
  lado2: "<img src='image/dadoAzul2.png'></img>",
  lado3: "<img src='image/dadoAzul3.png'></img>",
  lado4: "<img src='image/dadoAzul4.png'></img>",
  lado5: "<img src='image/dadoAzul5.png'></img>",
  lado6: "<img src='image/dadoAzul6.png'></img>",
  ladoMaior: "<img src='image/dadoAzul6.png'></img>",
  da: false,
  db: false,
  dc: false,
  dd: false
}

let dado8 = {
  dado: 'd20/d20_',
  dadoN: 8,
  lado1: "<img src='image/d20/d20_1.png'></img>",
  lado2: "<img src='image/d20/d20_2.png'></img>",
  lado3: "<img src='image/d20/d20_3.png'></img>",
  lado4: "<img src='image/d20/d20_4.png'></img>",
  lado5: "<img src='image/d20/d20_6.png'></img>",
  lado6: "<img src='image/d20/d20_5.png'></img>",
  lado7: "<img src='image/d20/d20_7.png'></img>",
  lado8: "<img src='image/d20/d20_8.png'></img>",
  ladoMaior: "<img src='image/d20/d20_8.png'></img>",
  da: false,
  db: false,
  dc: false,
  dd: false
}

let dado10 = {
  dado: 'd20/d20_',
  dadoN: 10,
  lado1: "<img src='image/d20/d20_1.png'></img>",
  lado2: "<img src='image/d20/d20_2.png'></img>",
  lado3: "<img src='image/d20/d20_3.png'></img>",
  lado4: "<img src='image/d20/d20_4.png'></img>",
  lado5: "<img src='image/d20/d20_6.png'></img>",
  lado6: "<img src='image/d20/d20_5.png'></img>",
  lado7: "<img src='image/d20/d20_7.png'></img>",
  lado8: "<img src='image/d20/d20_8.png'></img>",
  lado9: "<img src='image/d20/d20_9.png'></img>",
  lado10: "<img src='image/d20/d20_10.png'></img>",
  ladoMaior: "<img src='image/d20/d20_10.png'></img>",
  da: false,
  db: false,
  dc: false,
  dd: false
}

let dado12 = {
  dado: 'd20/d20_',
  dadoN: 12,
  lado1: "<img src='image/d20/d20_1.png'></img>",
  lado2: "<img src='image/d20/d20_2.png'></img>",
  lado3: "<img src='image/d20/d20_3.png'></img>",
  lado4: "<img src='image/d20/d20_4.png'></img>",
  lado5: "<img src='image/d20/d20_6.png'></img>",
  lado6: "<img src='image/d20/d20_5.png'></img>",
  lado7: "<img src='image/d20/d20_7.png'></img>",
  lado8: "<img src='image/d20/d20_8.png'></img>",
  lado9: "<img src='image/d20/d20_9.png'></img>",
  lado10: "<img src='image/d20/d20_10.png'></img>",
  lado11: "<img src='image/d20/d20_11.png'></img>",
  lado12: "<img src='image/d20/d20_12.png'></img>",
  ladoMaior: "<img src='image/d20/d20_12.png'></img>",
  da: false,
  db: false,
  dc: false,
  dd: false
}

let dado20 = {
  dado: 'd20/d20_',
  dadoN: 20,
  lado1: "<img src='image/d20/d20_1.png'></img>",
  lado2: "<img src='image/d20/d20_2.png'></img>",
  lado3: "<img src='image/d20/d20_3.png'></img>",
  lado4: "<img src='image/d20/d20_4.png'></img>",
  lado5: "<img src='image/d20/d20_6.png'></img>",
  lado6: "<img src='image/d20/d20_5.png'></img>",
  lado7: "<img src='image/d20/d20_7.png'></img>",
  lado8: "<img src='image/d20/d20_8.png'></img>",
  lado9: "<img src='image/d20/d20_9.png'></img>",
  lado10: "<img src='image/d20/d20_10.png'></img>",
  lado11: "<img src='image/d20/d20_11.png'></img>",
  lado12: "<img src='image/d20/d20_12.png'></img>",
  lado13: "<img src='image/d20/d20_13.png'></img>",
  lado14: "<img src='image/d20/d20_14.png'></img>",
  lado15: "<img src='image/d20/d20_15.png'></img>",
  lado16: "<img src='image/d20/d20_16.png'></img>",
  lado17: "<img src='image/d20/d20_17.png'></img>",
  lado18: "<img src='image/d20/d20_18.png'></img>",
  lado19: "<img src='image/d20/d20_19.png'></img>",
  lado20: "<img src='image/d20/d20_20.png'></img>",
  ladoMaior: "<img src='image/d20/d20_20.png'></img>",
  da: false,
  db: false,
  dc: false,
  dd: false
}

let btnsD2 = {
  btn_mais: document.getElementById('btn_d2_mais'),
  btn_menos: document.getElementById('btn_d2_menos'),
  id_span: document.getElementById('span2'),
  span_value: Number(document.getElementById('span2').innerText)
}

let btnsD4 = {
  btn_mais: document.getElementById('btn_d4_mais'),
  btn_menos: document.getElementById('btn_d4_menos'),
  id_span: document.getElementById('span4'),
  span_value: Number(document.getElementById('span4').innerText)
}

let btnsD6 = {
  btn_mais: document.getElementById('btn_d6_mais'),
  btn_menos: document.getElementById('btn_d6_menos'),
  id_span: document.getElementById('span6'),
  span_value: Number(document.getElementById('span6').innerText)
}

let btnsD8 = {
  btn_mais: document.getElementById('btn_d8_mais'),
  btn_menos: document.getElementById('btn_d8_menos'),
  id_span: document.getElementById('span8'),
  span_value: Number(document.getElementById('span8').innerText)
}

let btnsD10 = {
  btn_mais: document.getElementById('btn_d10_mais'),
  btn_menos: document.getElementById('btn_d10_menos'),
  id_span: document.getElementById('span10'),
  span_value: Number(document.getElementById('span10').innerText)
}

let btnsD12 = {
  btn_mais: document.getElementById('btn_d12_mais'),
  btn_menos: document.getElementById('btn_d12_menos'),
  id_span: document.getElementById('span12'),
  span_value: Number(document.getElementById('span12').innerText)
}

let btnsD20 = {
  btn_mais: document.getElementById('btn_d20_mais'),
  btn_menos: document.getElementById('btn_d20_menos'),
  id_span: document.getElementById('span20'),
  span_value: Number(document.getElementById('span20').innerText)
}

let putTakeDadosImginPlace = {
  putPlaceImg: function (dx) {
    if (lugar1.childNodes.length == '') {
      lugar1.innerHTML = dx.ladoMaior
      dx.da = true
    } else if (lugar2.childNodes.length == '') {
      lugar2.innerHTML = dx.ladoMaior
      dx.db = true
    } else if (lugar3.childNodes.length == '') {
      lugar3.innerHTML = dx.ladoMaior
      dx.dc = true
    } else if (lugar4.childNodes.length == '') {
      lugar4.innerHTML = dx.ladoMaior
      dx.dd = true
    }
  },
  takePlaceImg: function (dx) {
    if (dx.da) {
      lugar1.innerHTML = ''
      dx.da = false
    } else if (dx.db) {
      lugar2.innerHTML = ''
      dx.db = false
    } else if (dx.dc) {
      lugar3.innerHTML = ''
      dx.dc = false
    } else if (dx.dd) {
      lugar4.innerHTML = ''
      dx.dd = false
    }
  },
  putPlace: function (x2, btns) {
    btns.btn_mais.addEventListener('click', function () {
      if (
        btnsD20.span_value +
          btnsD2.span_value +
          btnsD4.span_value +
          btnsD6.span_value +
          btnsD8.span_value +
          btnsD10.span_value +
          btnsD12.span_value <
        4
      ) {
        btns.span_value += 1
      }

      btns.id_span.innerHTML = btns.span_value

      putTakeDadosImginPlace.putPlaceImg(x2)
    })
  },
  takePlace: function (x2, btns) {
    btns.btn_menos.addEventListener('click', function () {
      if (btns.span_value > 0) {
        putTakeDadosImginPlace.takePlaceImg(x2)
      }
      if (btns.span_value > 0) {
        btns.span_value -= 1
      }
      btns.id_span.innerHTML = btns.span_value
    })
  }
}

putTakeDadosImginPlace.putPlace(dado2, btnsD2)
putTakeDadosImginPlace.takePlace(dado2, btnsD2)
putTakeDadosImginPlace.putPlace(dado4, btnsD4)
putTakeDadosImginPlace.takePlace(dado4, btnsD4)
putTakeDadosImginPlace.putPlace(dado6, btnsD6)
putTakeDadosImginPlace.takePlace(dado6, btnsD6)
putTakeDadosImginPlace.putPlace(dado8, btnsD8)
putTakeDadosImginPlace.takePlace(dado8, btnsD8)
putTakeDadosImginPlace.putPlace(dado10, btnsD10)
putTakeDadosImginPlace.takePlace(dado10, btnsD10)
putTakeDadosImginPlace.putPlace(dado12, btnsD12)
putTakeDadosImginPlace.takePlace(dado12, btnsD12)
putTakeDadosImginPlace.putPlace(dado20, btnsD20)
putTakeDadosImginPlace.takePlace(dado20, btnsD20)
putTakeDadosImginPlace.putPlaceImg(dado6)

// Funções que giram os dados ================================================================================================================================

function ColocarDado_MaiorChanceMaior(x, escolherDado, dadoN) {
  let numeroSorteado = ChanceMaiorNumero(dadoN, sorteMaiorNumero)

  x.classList.add('animacao')
  x.innerHTML = '<img src=image/' + escolherDado + '.gif></img>'
  setTimeout(function () {
    x.classList.remove('animacao')
    x.innerHTML =
      "<img src='image/" + escolherDado + numeroSorteado + ".png'></img>"
  }, 1000)
}

function ColocarDado_MaiorChanceMelhor(x, escolherDado, dadoN) {
  let numeroSorteado = ChanceMelhorNumero(dadoN, sorteMelhorNumero)

  x.classList.add('animacao')
  x.innerHTML = '<img src=image/' + escolherDado + '.gif></img>'
  setTimeout(function () {
    x.classList.remove('animacao')
    x.innerHTML =
      "<img src='image/" + escolherDado + numeroSorteado + ".png'></img>"
  }, 1000)
}

// Girar dado -----------------------------------------------------------------------------------------------------------------

function lancarDadoLugar(x, y, g) {
  if (btnMaiorNumero != undefined) {
    ColocarDado_MaiorChanceMaior(x, y, g)
  } else if (btnMaiorNumero == undefined && btnMelhorNumero == undefined) {
    ColocarDado_MaiorChanceMaior(x, y, g)
  } else if (btnMelhorNumero != undefined) {
    ColocarDado_MaiorChanceMelhor(x, y, g)
  } else if (btnMelhorNumero != undefined) {
    ColocarDado_MaiorChanceMelhor(x, y, g)
  }
}

//========================================================================================================================

// Funções que ouvem os inputs e buttons de aleatoridades específicas=====================================================

const inputMaiorNumero = document.querySelector('#inpMaiorNumero')
const inputMelhorNumero = document.querySelector('#inpMelhorNumero')

inputMaiorNumero.addEventListener('input', updateValueMaior)
inputMelhorNumero.addEventListener('input', updateValueMelhor)

function updateValueMaior() {
  btnMaiorNumero = document.getElementById('inpMaiorNumero').value
  document.getElementById('inpMelhorNumero').value = ''
  btnMelhorNumero = ''
  sorteMaiorNumero = btnMaiorNumero / 100
  document.getElementById('btnMaiorNumero').classList.add('active')
  document.getElementById('btnMelhorNumero').classList.remove('active')
  if (document.getElementById('inpMaiorNumero').value == '') {
    document.getElementById('btnMaiorNumero').classList.remove('active')
  }
}

function updateValueMelhor() {
  btnMelhorNumero = document.getElementById('inpMelhorNumero').value
  document.getElementById('inpMaiorNumero').value = ''
  btnMaiorNumero = undefined
  sorteMelhorNumero = btnMelhorNumero
  document.getElementById('btnMelhorNumero').classList.add('active')
  document.getElementById('btnMaiorNumero').classList.remove('active')
  if (document.getElementById('inpMelhorNumero').value == '') {
    document.getElementById('btnMelhorNumero').classList.remove('active')
  }
}

//=========================================================================================

// Função que ouve o botão jogar e ativa-o ===============================================

document.getElementById('btn').addEventListener('click', function () {
  if (dado2.da) {
    lancarDadoLugar(lugar1, dado2.dado, dado2.dadoN)
  }
  if (dado2.db) {
    lancarDadoLugar(lugar2, dado2.dado, dado2.dadoN)
  }
  if (dado2.dc) {
    lancarDadoLugar(lugar3, dado2.dado, dado2.dadoN)
  }
  if (dado2.dd) {
    lancarDadoLugar(lugar4, dado2.dado, dado2.dadoN)
  }
  if (dado4.da) {
    lancarDadoLugar(lugar1, dado4.dado, dado4.dadoN)
  }
  if (dado4.db) {
    lancarDadoLugar(lugar2, dado4.dado, dado4.dadoN)
  }
  if (dado4.dc) {
    lancarDadoLugar(lugar3, dado4.dado, dado4.dadoN)
  }
  if (dado4.dd) {
    lancarDadoLugar(lugar4, dado4.dado, dado4.dadoN)
  }
  if (dado6.da) {
    lancarDadoLugar(lugar1, dado6.dado, dado6.dadoN)
  }
  if (dado6.db) {
    lancarDadoLugar(lugar2, dado6.dado, dado6.dadoN)
  }
  if (dado6.dc) {
    lancarDadoLugar(lugar3, dado6.dado, dado6.dadoN)
  }
  if (dado6.dd) {
    lancarDadoLugar(lugar4, dado6.dado, dado6.dadoN)
  }
  if (dado8.da) {
    lancarDadoLugar(lugar1, dado8.dado, dado8.dadoN)
  }
  if (dado8.db) {
    lancarDadoLugar(lugar2, dado8.dado, dado8.dadoN)
  }
  if (dado8.dc) {
    lancarDadoLugar(lugar3, dado8.dado, dado8.dadoN)
  }
  if (dado8.dd) {
    lancarDadoLugar(lugar4, dado8.dado, dado8.dadoN)
  }
  if (dado10.da) {
    lancarDadoLugar(lugar1, dado10.dado, dado10.dadoN)
  }
  if (dado10.db) {
    lancarDadoLugar(lugar2, dado10.dado, dado10.dadoN)
  }
  if (dado10.dc) {
    lancarDadoLugar(lugar3, dado10.dado, dado10.dadoN)
  }
  if (dado10.dd) {
    lancarDadoLugar(lugar4, dado10.dado, dado10.dadoN)
  }
  if (dado12.da) {
    lancarDadoLugar(lugar1, dado12.dado, dado12.dadoN)
  }
  if (dado12.db) {
    lancarDadoLugar(lugar2, dado12.dado, dado12.dadoN)
  }
  if (dado12.dc) {
    lancarDadoLugar(lugar3, dado12.dado, dado12.dadoN)
  }
  if (dado12.dd) {
    lancarDadoLugar(lugar4, dado12.dado, dado12.dadoN)
  }
  if (dado20.da) {
    lancarDadoLugar(lugar1, dado20.dado, dado20.dadoN)
  }
  if (dado20.db) {
    lancarDadoLugar(lugar2, dado20.dado, dado20.dadoN)
  }
  if (dado20.dc) {
    lancarDadoLugar(lugar3, dado20.dado, dado20.dadoN)
  }
  if (dado20.dd) {
    lancarDadoLugar(lugar4, dado20.dado, dado20.dadoN)
  }
})
//========================================================================================

// Funções que computam aleatoridades específicas ========================================

function ChanceMaiorNumero(dadoN, sorte) {
  let y = dadoN
  let sorteio
  let chanceMaiorNumero = 1 / y + (sorte * 1) / y
  let chanceGeral = ((1 / y) * y - chanceMaiorNumero) * 100
  validacao = Math.floor(Math.random() * 100 + 1)
  console.log('chance geral', chanceGeral)
  console.log('validação', validacao)
  if (validacao <= chanceGeral) {
    sorteio = Math.floor(Math.random() * (y - 1) + 1)
  } else {
    sorteio = y
    console.log('maior número', sorteio)
  }
  console.log(sorteio)

  return sorteio
}

function ChanceMelhorNumero(dadoN, sorte) {
  let y = dadoN
  let sorteio = Math.floor(Math.random() * y + 1)
  console.log(sorteio, 'inicial')
  let validacao = Math.floor(Math.random() * (100 + 1))
  console.log(sorte, 'sorte')
  console.log(validacao, 'validacao')
  let novo = 0
  let i = 0
  if (sorteio != dadoN && validacao <= sorte) {
    for (i = sorteio; novo <= i; ) {
      novo = Math.floor(Math.random() * y + 1)
      sorteio = novo
      console.log(sorteio)
    }
  }
  return sorteio
}

// ===================================================================================================

// CSS=================================================================
if (lugar2.childNodes.length == '') {
  document.getElementById('caixa_dados0').classList.add('umDado')
}
