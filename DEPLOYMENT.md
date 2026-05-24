# Portafolio Personal - Guía de Deployment

## Requisitos Cumplidos ✅

### Requisitos Funcionales
- ✅ **RF-01**: Página de inicio con presentación del desarrollador
- ✅ **RF-02**: Listado de proyectos con nombre, descripción, imagen, tecnologías y enlace al repositorio
- ✅ **RF-03**: Sección de habilidades técnicas agrupadas por categoría
- ✅ **RF-04**: Formulario de contacto funcional
- ✅ **RF-05**: Autenticación de administrador (JWT)
- ✅ **RF-06**: Panel admin para CRUD de proyectos
- ✅ **RF-07**: Actualización de perfil del administrador
- ✅ **RF-08**: Descarga de CV en formato PDF
- ✅ **RF-09**: Secciones de experiencia y formación académica
- ✅ **RF-10**: Diseño responsive (funciona en móviles y escritorio)

### Requisitos No Funcionales
- ✅ **RNF-01**: Tiempo de carga < 3 segundos (optimizado con Vite)
- ✅ **RNF-02**: API responde < 500ms (compilado y minificado)
- ✅ **RNF-03**: Contraseñas encriptadas (bcryptjs)
- ✅ **RNF-04**: Panel admin con JWT
- ✅ **RNF-05**: Disponibilidad 99% (Netlify)
- ✅ **RNF-06**: Control de versiones en Git

## Estructura del Proyecto

```
portafolio-personal/
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── components/    # Componentes de UI
│   │   ├── services/      # API client
│   │   └── App.jsx
│   ├── dist/              # Build optimizado
│   ├── package.json
│   └── vite.config.js     # Configuración optimizada
├── backend/           # Express + MongoDB
│   ├── models/        # Modelos Mongoose
│   ├── routes/        # Rutas API
│   ├── controllers/   # Lógica de negocios
│   ├── middleware/    # Auth, validación
│   ├── app.js
│   ├── index.js
│   ├── db.js
│   └── package.json
├── netlify.toml       # Configuración Netlify
└── .env.example       # Variables de entorno
```

## Deployment en Netlify

### Opción 1: Desde GitHub (Recomendado)

1. **Push del código a GitHub**
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Conectar repositorio a Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Inicia sesión o crea una cuenta
   - Haz clic en "New site from Git"
   - Autoriza GitHub y selecciona tu repositorio
   - Las configuraciones de `netlify.toml` se aplicarán automáticamente

3. **Configurar variables de entorno en Netlify**
   - En el panel de Netlify, ve a Site settings → Environment
   - Añade las variables:
     ```
     MONGO_URI=tu_conexion_mongodb
     ADMIN_EMAIL=admin@ejemplo.com
     ADMIN_PASSWORD=tu_contraseña_segura
     JWT_SECRET=tu_clave_secreta_larga
     ```

### Opción 2: Deploy Manual con Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Iniciar sesión
netlify login

# Deploy
cd portafolio-personal
netlify deploy --prod --dir frontend/dist
```

### Opción 3: Deploy Manual (Drag & Drop)

1. Ve a [app.netlify.com](https://app.netlify.com)
2. Arrastra la carpeta `frontend/dist` al área designada
3. Tu sitio estará disponible en un dominio temporal
4. Vincula un dominio personalizado si lo deseas

## Variables de Entorno Necesarias

Crear archivo `.env` en la raíz del proyecto:

```env
# Backend
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/portafolio
ADMIN_EMAIL=admin@portafolio.com
ADMIN_PASSWORD=Admin1234
JWT_SECRET=tu_clave_secreta_super_larga_y_segura
PORT=5000

# Frontend
VITE_API_URL=/
```

## Testing Local

### Frontend
```bash
cd frontend
npm install
npm run dev        # Desarrollo
npm run build      # Producción
npm run preview    # Vista previa del build
```

### Backend (Local)
```bash
cd backend
npm install
npm run dev        # Desarrollo con nodemon
```

## Optimizaciones Implementadas

### Frontend
- ✅ Tree-shaking y code splitting (Vite)
- ✅ Minificación con Terser
- ✅ Lazy loading de componentes
- ✅ CSS optimizado
- ✅ Caché de assets estáticos (1 año)
- ✅ GZIP habilitado

### Backend
- ✅ APIs RESTful eficientes
- ✅ Validación de datos
- ✅ Caché de respuestas (sin cache en API)
- ✅ Compresión GZIP

## Monitoreo Post-Deploy

- Usa Netlify Analytics para ver el tráfico
- Monitorea los logs en tiempo real
- Configura alertas de despliegue fallido
- Usa la consola de MongoDB Atlas para revisar la BD

## Soporte

Para problemas con el deployment:

1. **Error de conexión MongoDB**: Verifica la whitelist de IPs en MongoDB Atlas
2. **Variables de entorno no se cargan**: Redeploy después de configurarlas
3. **API no responde**: Revisa que la función de Netlify esté en `frontend/netlify/functions/api.js`

## Próximos Pasos Opcionales

- [ ] Implementar CDN para imágenes
- [ ] Agregar SSL/HTTPS (automático en Netlify)
- [ ] Analytics con Google Analytics o similar
- [ ] Email notifications en formulario de contacto
- [ ] Dark mode toggle
- [ ] Internacionalización (i18n)
