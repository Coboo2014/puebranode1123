let Fruta1 = ["frutilla", "Banana", "Mango"];
let Fruta2 = ["Naranja", "Durazno", "Manzana"];

let TodasLasFrutas = [...Fruta1, ...Fruta2];
console.log(TodasLasFrutas);
 let GeneroComedia ={
    Nombredelgenero: "comedia",
    Valor: 3 

 }
let endGame = { 
    Nombre: "End game ",
    calificacion : 120,
    ...GeneroComedia
}
let quepasoayer = {
    Nombre: "Que paso ayer",
    calificacion:110,
    ...GeneroComedia
}
console.log(endGame)