import * as readline from "readline-sync";
import { Lista } from "./lista";
import { Productos } from "./productos";

let continuar: boolean = true;
let lista = new Lista();
while (continuar) {
  console.log("--- Carrito de la Compra ---");
  console.log("1 - Añadir Producto / 2 - Eliminar Producto / 3 - Mostrar Total / 0 - Salir")
  let accion: string = readline.question("Que desea realizar?: ");

  switch (parseInt(accion)) {
    case 1:
      let productoNuevo: string = "S";
      do {
        if (productoNuevo.toLocaleUpperCase() === "S") {
          let nombre = readline.question("Nombre del producto: ");
          let precio = readline.question("Precio del producto: ");
          let producto = new Productos(nombre, parseFloat(precio));
          
          lista.carrito.push(producto);
        }
        productoNuevo = readline.question("Desea agregar otro producto al carrito? - S/N: ");
      } while (productoNuevo.toLocaleUpperCase() === "S");
      console.log("----------------------------------------");
      if (lista.carrito.length == 1) {
        console.log("--- Producto añadido correctamente ---");
      } else {
        console.log("--- Productos añadidos correctamente ---");
      }
      console.log("----------------------------------------");
      break;

    case 2:
      let id = readline.question("Numero de producto: ");
      lista.carrito.splice(parseInt(id) - 1, 1);
      console.log("--------------------------------------");
      console.log("--- Producto borrado correctamente ---");
      console.log("--------------------------------------");
      break;

    case 3:
      let total: number = 0;
      lista.carrito.forEach((productos) => {
        total += productos.precio;
      });
      for (let i = 0; i < lista.carrito.length; i++) {
        console.log(`${lista.carrito[i].nombre} -----> ${lista.carrito[i].precio}€`);
      }
      console.log("-----------------------");
      console.log(`Precio Total: ${total}€`);
      console.log("-----------------------");
      break;

    case 0:
      continuar = false;
  }
}
