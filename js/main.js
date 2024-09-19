let cliente

cliente = prompt("Bienvenido a DISTRIBUIDORA LEON, aca encontraras los mejores productos DON YEYO, por favor ingrese su nombre de cliente para acceder a la lista de productos disponibles");

// Lista de productos disponibles
let productosDisponibles = {
    
    "Panchos": { 
        precio: 1234.99, 
        cantidad: 5 
    },
    "Super Panchos": { 
        precio: 1750.99, 
        cantidad: 10, 
    },
    "Lomitos": { 
        precio: 1689.99, 
        cantidad: 7, 
    },
    "Hamburguesa": { 
        precio: 1234.99, 
        cantidad: 15, 
    },
    "Lactal": { 
        precio: 2550.99, 
        cantidad: 3, 
    }
  };
  
  // Carrito de venta vacío
  let carrito = {};
  
  // Función para mostrar lista de productos disponibles
  function mostrarProductosDisponibles() {
    let lista = "";
    
    for (let producto in productosDisponibles) {
        
      lista += `${producto} - $${productosDisponibles[producto].precio} - Cantidad: ${productosDisponibles[producto].cantidad}\n`;
    }
    
    alert(lista);
  }
  
  // Función para agregar producto al carrito
  function agregarProductoAlCarrito() {
    mostrarProductosDisponibles();
    
    let productoElegido = prompt("Ingrese el nombre del producto que desea agregar al carrito:");
    
    if (productosDisponibles[productoElegido]) {
      let cantidadElegida = parseInt(prompt(`Ingrese la cantidad de ${productoElegido} que desea agregar al carrito:`));
      
      if (cantidadElegida <= productosDisponibles[productoElegido].cantidad) {
        if (carrito[productoElegido]) {
          carrito[productoElegido].cantidad += cantidadElegida;
        } else {
          carrito[productoElegido] = {
            precio: productosDisponibles[productoElegido].precio,
            cantidad: cantidadElegida
          };
        }
        
        alert(`Producto ${productoElegido} agregado al carrito.`);
        
        productosDisponibles[productoElegido].cantidad -= cantidadElegida;
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
    
    lista += `\nTotal: $${total.toFixed(2)}`;
    
    alert(lista);
  }
  
  // Llamar función para agregar productos al carrito
  agregarProductoAlCarrito();
  
  