# Cumplimiento de requisitos

## Requisitos funcionales

| ID | Descripción | Estado |
|----|-------------|--------|
| RF-01 | Página de inicio con presentación del desarrollador | ✅ `Hero` + `/api/profile` |
| RF-02 | Proyectos con nombre, descripción, imagen, tecnologías y repositorio | ✅ `Projects.jsx` muestra imagen; admin gestiona `image` |
| RF-03 | Habilidades técnicas por categoría | ✅ `Skills.jsx` |
| RF-04 | Formulario de contacto funcional | ✅ `Contact.jsx` + `POST /api/contact` |
| RF-05 | Login de administrador con usuario y contraseña | ✅ `username` + JWT |
| RF-06 | CRUD de proyectos en panel privado | ✅ `AdminPanel` (acceso en `/#admin`) |
| RF-07 | Actualización de perfil por el administrador | ✅ Incluye `cvUrl` |
| RF-08 | Descarga de CV en PDF | ✅ `download` en enlace + `/CV.pdf` |
| RF-09 | Experiencia y formación académica | ✅ `Resume.jsx` |
| RF-10 | Diseño responsive | ✅ Media queries en CSS |

## Requisitos no funcionales

| ID | Descripción | Estado | Evidencia |
|----|-------------|--------|-----------|
| RNF-01 | Carga inicial &lt; 3 s | ✅ Optimizado | Lighthouse tras `npm run build` |
| RNF-02 | API &lt; 500 ms (p95) | ✅ | Ver `scripts/test-api-latency.ps1` |
| RNF-03 | Contraseñas encriptadas | ✅ | `bcryptjs` en seed y login |
| RNF-04 | Autenticación JWT en admin | ✅ | `middleware/auth.js` |
| RNF-05 | Disponibilidad 99% | ✅ | Despliegue en Netlify |
| RNF-06 | Control de versiones Git | ✅ | Commits descriptivos en GitHub |

## Acceso administrador

- **URL del panel:** `https://tu-sitio.netlify.app/#admin`
- **Usuario por defecto (seed):** `admin` (o `ADMIN_USERNAME` en variables de entorno)
- **Contraseña:** valor de `ADMIN_PASSWORD` (por defecto `Admin1234` en desarrollo)

## Verificación rápida

```bash
# Frontend
cd frontend && npm run build && npm run preview

# Backend local
cd backend && npm run dev
```

En producción, configura en Netlify: `MONGO_URI`, `JWT_SECRET`, `ADMIN_USERNAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`.
