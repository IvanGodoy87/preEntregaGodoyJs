// Objeto para almacenar productos
let productos = {};

// Objeto para almacenar carrito de venta
let carrito = {};

// Función para agregar productos (administrador)
function agregarProductos() {
  let nombre = prompt("Ingrese nombre del producto:");
  let precio = parseFloat(prompt("Ingrese precio del producto:"));
  let cantidad = parseInt(prompt("Ingrese cantidad del producto:"));
  
  productos[nombre] = {
    precio: precio,
    cantidad: cantidad
  };
  
  let respuesta = prompt("¿Desea agregar otro producto? (S/N)");
  
  if (respuesta.toUpperCase() === "S") {
    agregarProductos();
  }
}

// Función para mostrar productos (usuario)
function mostrarProductos() {
  let lista = "";
  
  for (let producto in productos) {
    lista += `${producto} - $${productos[producto].precio} - Cantidad: ${productos[producto].cantidad}\n`;
  }
  
  alert(lista);
}

// Función para agregar producto al carrito (usuario)
function agregarProductoAlCarrito() {
  mostrarProductos();
  
  let productoElegido = prompt("Ingrese nombre del producto que desea agregar al carrito:");
  
  if (productos[productoElegido]) {
    let cantidadElegida = parseInt(prompt(`Ingrese cantidad de ${productoElegido} que desea agregar al carrito:`));
    
    if (cantidadElegida <= productos[productoElegido].cantidad) {
      if (carrito[productoElegido]) {
        carrito[productoElegido].cantidad += cantidadElegida;
      } else {
        carrito[productoElegido] = {
          precio: productos[productoElegido].precio,
          cantidad: cantidadElegida
        };
      }
      
      alert(`Producto ${productoElegido} agregado al carrito.`);
      
      productos[productoElegido].cantidad -= cantidadElegida;
    } else {
      alert("No hay suficiente cantidad del producto en stock.");
    }
  } else {
    alert("Producto no encontrado.");
  }
  
  let respuesta = prompt("¿Desea agregar otro producto al carrito? (S/N)");
  
  if (respuesta.toUpperCase() === "S") {
    agregarProductoAlCarrito();
  } else {
    mostrarCarrito();
  }
}

// Función para mostrar carrito
function mostrarCarrito() {
  let lista = "Carrito de venta:\n";
  let total = 0;
  
  for (let producto in carrito) {
    lista += `${producto} - $${carrito[producto].precio} - Cantidad: ${carrito[producto].cantidad}\n`;
    total += carrito[producto].precio * carrito[producto].cantidad;
  }
  
  lista += `\nTotal: $${total}`;
  
  alert(lista);
}

// Función principal
function inicio() {
  let tipoUsuario = prompt("¿Es usted administrador o usuario? (A/U)");
  
  if (tipoUsuario.toUpperCase() === "A") {
    agregarProductos();
  } else if (tipoUsuario.toUpperCase() === "U") {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    
    alert(`Bienvenido, ${nombre} ${apellido}.`);
    
    agregarProductoAlCarrito();
  } else {
    alert("Opción inválida.");
  }
}

// Llamar función principal
inicio();
