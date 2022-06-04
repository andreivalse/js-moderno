const producto = 'Monitor 20 pulgadas';

//.replace para reemplazar
console.log(producto);
console.log(producto.replace(' pulgadas', '"'))
console.log(producto.replace('Monitor', 'Monitor Curvo '));

// .slice para cortar
console.log(producto.slice(1, 10));
// console.log(producto.slice(8));
// console.log(producto.slice(2, 1));

// Alternativa slice
console.log(producto.substring(0,10));

// Como colocar inicial de el nombre
const usuario="Andreiev";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));

