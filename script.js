const API_URL = 'https://6733a9bca042ab85d1179a0b.mockapi.io/productos';
const carrito = [];

// Función para obtener productos de MockAPI
async function obtenerProductos() {
    try {
        const response = await fetch(API_URL);
        const productos = await response.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}

// Mostrar productos en la página
function mostrarProductos(productos) {
    const contenedor = document.getElementById('producto-contenedor');
    contenedor.innerHTML = ''; // Limpiar contenido previo
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="boton-agregar" onclick="agregarProductoAlCarrito(${producto.id})">
                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
                <button class="boton-eliminar-producto" onclick="eliminarProductoInterfaz(${producto.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        contenedor.appendChild(div);
    });
}

// Agregar producto al carrito
function agregarProductoAlCarrito(id) {
    fetch(`${API_URL}/${id}`)
        .then(response => response.json())
        .then(producto => {
            const productoEnCarrito = carrito.find(item => item.id === producto.id);
            if (productoEnCarrito) {
                // Si el producto ya está en el carrito, aumenta la cantidad
                productoEnCarrito.cantidad++;
                productoEnCarrito.totalPrecio = productoEnCarrito.cantidad * productoEnCarrito.precio;
            } else {
                // Si el producto no está en el carrito, agrégalo
                producto.cantidad = 1;
                producto.totalPrecio = producto.precio;
                carrito.push(producto);
            } 
            actualizarCarrito();
            console.log("El producto tiene el id", id);
        });
}

// Funcion eliminar de la interfaz 

async function eliminarProductoInterfaz(id) {
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (!confirmacion) return;

    try {
        // Realiza la solicitud DELETE o BORRAR a MockAPI
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        // Refrescar la lista de productos en la interfaz
        obtenerProductos();
        alert("Producto eliminado correctamente");

    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        alert("Hubo un problema al eliminar el producto");
    }
}


// Actualizar el carrito en la interfaz
function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = '';
    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('carrito-item');
        item.innerHTML = `
            <span class="carrito-item-nombre">${producto.nombre} (x${producto.cantidad})</span>
            <span class="carrito-item-precio">$${producto.totalPrecio.toFixed(3)}</span>
            <button class="boton-eliminar" onclick="eliminarProducto(${producto.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        carritoLista.appendChild(item);
    });
    actualizarTotal();
}

// Eliminar producto del carrito
function eliminarProducto(id) {
    console.log("Intentando eliminar producto con id:", id);
    console.log("Carrito actual:", carrito); // Verifica el contenido completo del carrito

    const productoIndex = carrito.findIndex(item => item.id === id);
    if (productoIndex !== -1) {
        const producto = carrito[productoIndex];
        if (producto.cantidad > 1) {
            producto.cantidad--;
            producto.totalPrecio = producto.cantidad * producto.precio;
        } else {
            carrito.splice(productoIndex, 1);
        }
        actualizarCarrito();
    } else {
        console.log("Producto no encontrado en el carrito con id:", id);
    }
}



// Calcular y mostrar el total
function actualizarTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.totalPrecio, 0);
    document.getElementById('total-precio').textContent = `Total: $${total.toFixed(3)}`;
}

// Enviar mensaje a WhatsApp
function enviarMensajeWhatsApp() {
    const productos = carrito.map(prod => `${prod.nombre} (x${prod.cantidad}) - $${prod.totalPrecio.toFixed(3)}`).join(', ');
    const url = `https://wa.me/573054668929?text=Hola, deseo encargar estos productos: ${productos}`;
    window.open(url, '_blank');
}

// Selección del formulario agregar producto
const formularioAgregar = document.getElementById('formulario-agregar');

formularioAgregar.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío estándar del formulario

    // Obtén el último ID y crea el nuevo producto
    try {
        const productos = await fetch(API_URL).then(response => response.json());
        const ultimoId = productos.length ? Math.max(...productos.map(p => Number(p.id))) : 0;
        const nuevoProducto = {
            id: ultimoId + 1,
            nombre: document.getElementById('nombre').value,
            precio: parseFloat(document.getElementById('precio').value),
            detalles: document.getElementById('detalles').value,
            imagen: document.getElementById('imagen').value,
            cantidad: 1,
            totalPrecio: parseFloat(document.getElementById('precio').value)
        };

        // Enviar producto a MockAPI
        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoProducto)
        });

        // Actualizar la interfaz y limpiar el formulario
        obtenerProductos();  // Refresca la lista de productos
        formularioAgregar.reset();
        alert("Producto agregado correctamente");

    } catch (error) {
        console.error("Error al agregar el producto:", error);
        alert("Hubo un problema al agregar el producto");
    }
});


// Iniciar la carga de productos al cargar la página
document.addEventListener('DOMContentLoaded', obtenerProductos);