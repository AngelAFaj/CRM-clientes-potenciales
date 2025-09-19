# CRM - Sistema de Gestión de Clientes Potenciales

Sistema web para la gestión de clientes potenciales con diferentes roles de usuario.

## Características

- Sistema de autenticación con diferentes roles
- Interfaz adaptada para Gerentes de Ventas y Asesores
- Gestión de clientes potenciales
- Panel de administración

## Estructura del Proyecto

```
├── index.html          # Página de inicio/login
├── admin.html          # Panel de administrador
├── manager.html        # Panel de gerente de ventas
├── advisor.html        # Panel de asesor
├── app.js              # Lógica principal de la aplicación
├── styles.css          # Estilos CSS
├── vercel.json         # Configuración de Vercel
└── package.json        # Configuración del proyecto
```

## Credenciales de Prueba

- **Gerente:** usuario: `manager`, contraseña: `manager123`
- **Asesor:** usuario: `advisor`, contraseña: `advisor123`

## Despliegue en Vercel

### Opción 1: Despliegue desde GitHub (Recomendado)

1. Sube tu proyecto a un repositorio de GitHub
2. Ve a [vercel.com](https://vercel.com) y conéctate con tu cuenta de GitHub
3. Haz clic en "New Project"
4. Selecciona tu repositorio
5. Vercel detectará automáticamente que es un sitio estático
6. Haz clic en "Deploy"

### Opción 2: Despliegue desde CLI

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. En la carpeta del proyecto, ejecuta:
```bash
vercel
```

3. Sigue las instrucciones en pantalla

### Opción 3: Arrastrar y Soltar

1. Ve a [vercel.com](https://vercel.com)
2. Arrastra y suelta la carpeta del proyecto en la interfaz web
3. Vercel desplegará automáticamente tu sitio

## Desarrollo Local

Para ejecutar el proyecto localmente:

```bash
npm install
npm start
```

El sitio estará disponible en `http://localhost:3000`

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Vercel (Hosting)

## Licencia

MIT
