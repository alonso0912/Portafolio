# Portafolio Web Full Stack

Estado del proyecto: En producción

Sitio web oficial:
https://portafolioalonsodelacruz.netlify.app/

---

# Descripción del Proyecto

Este proyecto consiste en el desarrollo de un portafolio web profesional Full Stack, diseñado para presentar proyectos, habilidades técnicas, experiencia profesional y medios de contacto de un desarrollador de software.

La aplicación fue construida utilizando el stack MERN (MongoDB, Express, React y Node.js), implementando una arquitectura moderna, escalable y segura. Además, incluye un panel administrativo privado que permite gestionar el contenido dinámicamente sin necesidad de modificar el código fuente.

---

# Objetivo General

Desarrollar una aplicación web Full Stack que funcione como portafolio profesional, permitiendo la gestión dinámica de proyectos, habilidades y experiencia profesional mediante una interfaz moderna y un panel administrativo seguro.

---

# Características Principales

- Página principal con presentación profesional.
- Galería de proyectos dinámicos.
- Gestión de habilidades técnicas.
- Formulario de contacto funcional.
- Descarga de hoja de vida en PDF.
- Panel administrativo privado.
- Autenticación segura con JWT.
- Diseño responsive adaptable a dispositivos móviles y escritorio.
- API REST para gestión de contenido.
- Despliegue en la nube mediante Netlify.

---

# Tecnologías Utilizadas

## Frontend

- React
- Vite
- CSS3

## Backend

- Node.js
- Express.js
- JWT
- bcryptjs

## Base de Datos

- MongoDB Atlas
- Mongoose

## Herramientas

- Git y GitHub
- Visual Studio Code
- Netlify

---

# Arquitectura del Sistema

El sistema fue desarrollado bajo una arquitectura de tres capas:

1. Capa de presentación (Frontend)
2. Capa lógica de negocio (Backend/API REST)
3. Capa de persistencia de datos (MongoDB)

## Flujo General

```text
Cliente Web
   ↓
React + Vite
   ↓
API REST Express.js
   ↓
MongoDB Atlas
```

---

# Estructura del Proyecto

```text
portafolio-personal/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   ├── dist/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── package.json
│
├── netlify.toml
└── README.md
```

---

# Instalación del Proyecto

## 1. Clonar el repositorio

```bash
git clone https://github.com/alonso0912/Portafolio.git
```

## 2. Entrar al proyecto

```bash
cd Portafolio
```

## 3. Instalar dependencias

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

---

# Variables de Entorno

Crear un archivo `.env` en el backend con las siguientes variables:

```env
MONGODB_URI=tu_uri_mongodb
JWT_SECRET=tu_clave_secreta
PORT=3000
```

---

# Ejecución del Proyecto

## Ejecutar frontend

```bash
npm run dev
```

## Ejecutar backend

```bash
npm start
```

---

# Seguridad Implementada

- Autenticación con JWT.
- Contraseñas cifradas con bcryptjs.
- Protección de rutas privadas.
- Validación de datos en backend.
- Uso de variables de entorno.
- Configuración de CORS.
- Middleware de autenticación para panel administrativo.

---

# Despliegue en Netlify

La aplicación fue desplegada utilizando Netlify, permitiendo integración continua (CI/CD) conectada directamente con GitHub. Cada actualización realizada en el repositorio genera automáticamente una nueva compilación y despliegue del proyecto.

## Características del despliegue

- Hosting del frontend en producción.
- Funciones serverless para el backend.
- HTTPS automático.
- Despliegue automático.
- Integración continua con GitHub.
- Alta disponibilidad y escalabilidad.

## Archivo de configuración

```toml
[build]
  command = "cd frontend && npm run build"
  publish = "frontend/dist"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

## URL del Proyecto

https://portafolioalonsodelacruz.netlify.app/

---

# Pruebas Realizadas

- Conexión a MongoDB.
- Validación de autenticación JWT.
- Operaciones CRUD.
- Validación de formularios.
- Responsividad móvil.
- Optimización de rendimiento.
- Verificación de despliegue en producción.

---

# Resultados Obtenidos

El proyecto logró cumplir con los objetivos planteados inicialmente, ofreciendo una plataforma funcional, estable y moderna. Se obtuvo un sistema con buen rendimiento, interfaz intuitiva y seguridad adecuada para la administración del contenido.

---

# Mejoras Futuras

- Implementación de analíticas de visitas.
- Integración con APIs externas.
- Sistema de blog personal.
- Panel administrativo avanzado.
- Notificaciones en tiempo real.

---

# Repositorio Oficial

https://github.com/alonso0912/Portafolio.git

---

# Autor

Alonso De la Cruz Orozco  
Ingeniería de Sistemas  
Universidad de la Costa - CUC

---

# Licencia

Este proyecto fue desarrollado con fines académicos y profesionales.
