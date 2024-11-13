# Piensa IA 🧠🤖

**Piensa IA** es una página web de ecommerce que permite a los clientes explorar productos, agregarlos a un carrito de compras y hacer pedidos a través de WhatsApp. La aplicación está construida utilizando **HTML**, **CSS**, **JavaScript** y **MockAPI** como backend simulado para almacenar y gestionar los productos.

---

## Índice

- [Vista General](#vista-general)
- [Funcionalidades](#funcionalidades)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura de Archivos](#estructura-de-archivos)
- [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)
- [Mejoras Futuras](#mejoras-futuras)

---

## Vista General

**Piensa IA** es una tienda en línea que permite a los usuarios visualizar productos con sus respectivos precios, añadirlos al carrito y realizar pedidos. La página también permite que el cliente agregue nuevos productos, especificando el nombre, precio, detalles y URL de la imagen. Los datos se almacenan y gestionan mediante **MockAPI**.

---

## Funcionalidades

1. **Visualización de Productos**: Los productos se obtienen de MockAPI y se muestran en tarjetas con su imagen, nombre y precio.
2. **Carrito de Compras**: 
   - Permite añadir productos, aumentando la cantidad si el producto ya existe en el carrito.
   - Los productos en el carrito muestran el nombre, cantidad y precio total.
   - Calcula y muestra el precio total de los productos en el carrito.
3. **Agregar Nuevos Productos**: Los clientes pueden agregar productos personalizados a través de un formulario.
4. **Eliminar Productos**: 
   - Se pueden eliminar productos del carrito de compras.
   - Se pueden eliminar productos directamente de la interfaz y de MockAPI.
5. **Pedido por WhatsApp**: Envía el contenido del carrito como mensaje a un número de WhatsApp para completar el pedido.

---

## Tecnologías Utilizadas

| Tecnología   | Descripción                                                                                                     |
|--------------|-----------------------------------------------------------------------------------------------------------------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Lenguaje de marcado para estructurar el contenido.            |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)   | Estilos visuales de la página, diseño responsive y animaciones.|
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Programación de la lógica del frontend, manipulación del DOM y eventos. |
| ![MockAPI](https://img.shields.io/badge/-MockAPI-FF6C37?style=for-the-badge&logoColor=white)       | API simulada para almacenar y gestionar los datos de los productos.|

---

## Estructura de Archivos

```plaintext
📁 proyecto-raiz
├── 📄 index.html           # Estructura principal de la página
├── 📄 styles.css           # Estilos visuales y diseño de la página
├── 📄 script.js            # Lógica del frontend y conexión con MockAPI
├── 📄 README.md            # Documentación del proyecto

```
---

## Cómo Ejecutar el Proyecto

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/piensa-ia.git

2. **Abrir `index.html`**: Abre el archivo `index.html` en tu navegador para ver la página en funcionamiento.
3. * **Configuración de MockAPI**: * Asegúrate de que la URL de MockAPI en `script.js` (`API_URL`) esté configurada correctamente.
4. * **Prueba las Funcionalidades**: Navega, agrega productos al carrito, elimina productos y envía el pedido a WhatsApp.
  

---

## Mejoras futuras

* Autenticación de Usuarios: Implementar un sistema de autenticación para que los clientes tengan cuentas personales.
* Integración de Pago: Agregar una opción de pago en línea con servicios como Stripe o PayPal.
* Búsqueda y Filtrado: Incorporar funciones de búsqueda y filtro para mejorar la navegación en la tienda.
* Notificaciones: Agregar notificaciones o alertas para mejorar la experiencia de usuario al añadir o eliminar productos del carrito.

---

## Contribución

* Las contribuciones son bienvenidas. Si deseas agregar funcionalidades o mejorar el código, no dudes en hacer un pull request.

