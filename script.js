var button = document.getElementById('button')
var buttonLimpar = document.getElementById('buttonLimpar')
function limparcampos() {
  document.getElementById('aInput').value = ''
  document.getElementById('hInput').value = ''
  document.getElementById('oInput').value = ''
}
function calcular() {
  var a = document.getElementById('aInput').value
  var h = document.getElementById('hInput').value
  var o = document.getElementById('oInput').value
  var resultado = ''
  if (a != '' && o != '') {
    calcularHipotenusa(document.getElementById('hInput'), a, o)
  } else if (o != '' && h != '') {
    calcularAdjacente(document.getElementById('aInput'), o, h)
  } else if (a != '' && h != '') {
    calcularOposto(document.getElementById('oInput'), a, h)
  } else alert('Informe os valores correspondentes!')
}
function calcularApi(url, inputResult, valor1, valor2) {
  var urlRaiz = 'https://TeoremaAPI.sthephanys.repl.co/'
  if (url != '') {
    axios
      .get(urlRaiz + url + '?' + valor1 + '&' + valor2, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':
            'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
      .then(resposta => {
        console.log(Math.round(resposta.data))
        inputResult.value = resposta.data.toFixed(3)
      })
      .catch(erro => console.log(erro))
  }
}
button.addEventListener('click', calcular)
buttonLimpar.addEventListener('click', limparcampos)

function calcularOposto(inputResult, a, h) {
  var hip = 'hip=' + h
  var ca = 'ca=' + a

  calcularApi('calcularoposto', inputResult, hip, ca)
}
function calcularAdjacente(inputResult, o, h) {
  var hip = 'hip=' + h
  var co = 'co=' + o
  calcularApi('calcularadjacente', inputResult, hip, co)
}
function calcularHipotenusa(inputResult, a, o) {
  var ca = 'ca=' + a
  var co = 'co=' + o
  calcularApi('calcularhipotenusa', inputResult, ca, co)
}
