
## Drink Store Ecommerce

Este proyecto es una tienda en línea llamada Drink Store desarrollada con React y Firebase. Permite a los usuarios navegar por una variedad de productos, agregar items a su carrito, y realizar compras. El proyecto está diseñado para ser escalable y fácil de mantener, utilizando herramientas y bibliotecas modernas.

## Tecnologías Utilizadas

+ React: Biblioteca de JavaScript para construir interfaces de usuario.
+ Vite: Herramienta de desarrollo que ofrece un entorno rápido y eficiente para proyectos de frontend.
+ Firebase: Plataforma backend utilizada para almacenar datos de productos y órdenes de compra.

## Funcionalidades Principales

+ Navegación por categorías: Los usuarios pueden filtrar productos por diferentes categorías como Vinos, Cervezas, Gins, y Whiskies.
+ Gestión del carrito: Los usuarios pueden agregar productos al carrito, ajustar la cantidad de cada producto, y eliminar items. También se incluye la funcionalidad para vaciar todo el carrito.
+ Formulario de compra: Validación de datos del comprador (nombre, email y teléfono) antes de realizar la orden.
+ Persistencia de datos: Los productos y órdenes se almacenan en Firebase Firestore.

## Instalación y Uso

1- Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/drink-store-ecommerce.git
cd drink-store-ecommerce
```

2- Instalar las dependencias:

```bash
npm install
```
3-Configurar Firebase:

+ Crear un proyecto en Firebase y configurar Firestore.
+ Reemplazar la configuración de Firebase en main.jsx con las credenciales de tu proyecto.

4- Iniciar el servidor de desarrollo:

```bash
npm run dev
```