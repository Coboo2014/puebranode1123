
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [primerNumero, , segundoNumero, , tercerNumero, ...restoNumeros] = numeros;
console.log('Valores en posiciones específicas:');
console.log('Primer número:', primerNumero);
console.log('Segundo número:', segundoNumero);
console.log('Tercer número:', tercerNumero);
console.log('Resto de los números:');
console.log(restoNumeros);
//
const mascota = {
  nombre: 'Max',
  tipo: 'Perro',
  color: 'Marrón',
  raza: 'Labrador'
};

const { nombre, tipo, color, raza } = mascota;

console.log('Datos de la mascota:');
console.log('Nombre:', nombre);
console.log('Tipo:', tipo);
console.log('Color:', color);
console.log('Raza:', raza);
