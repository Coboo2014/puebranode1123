const fs = require('fs');
const path = require('path');

function importar(marca) {
  const rutaArchivo = './datos/figuras' + marca + '.json';

  const datos = fs.readFileSync(path.resolve(rutaArchivo), 'utf8');
  const figuras = JSON.parse(datos);

  return figuras;
}

module.exports = { importar };
//const marca = 'Bandai';
//const figuras = importar(2);
//console.log('Figuras de la marca ' + marca + ':', figuras);
