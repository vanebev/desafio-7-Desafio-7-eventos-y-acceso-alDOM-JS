var fila = [];
var cajasHTML = "";

function agregarGato(cara) {
  fila.push(cara);

  var contador = 0;
  for (var i = fila.length - 1; i >= 0; i--) {
    if (fila[i] === cara) {
      contador++;
    } else {
      break;
    }
  }

  if (contador > 5) {
    var nuevaCaja = "<div class='caja'>";
    for (var j = 0; j < contador; j++) {
      nuevaCaja += "<span class='gato'>" + cara + "</span>";
    }
    nuevaCaja += "</div>";
    cajasHTML = nuevaCaja + cajasHTML;
    fila = fila.slice(0, fila.length - contador);
  }

  var linea = "";
  for (var k = 0; k < fila.length; k++) {
    linea += "<span class='gato'>" + fila[k] + "</span>";
  }

  document.getElementById("linea-gatos").innerHTML = cajasHTML + linea;
}