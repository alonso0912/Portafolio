# ✅ Checklist de Deployment

## 1. Preparación Local

- [x] **Build del Frontend Completado**
  - Archivos en: `frontend/dist/`
  - Tamaño: ~208 KB (optimizado)
  - Tiempo de build: 1.48s

- [x] **Código Backend Listo**
  - Express API configurado
  - MongoDB connection ready
  - Routes y controllers configurados

- [x] **Configuración Netlify**
  - `netlify.toml` con redirects y headers
  - Caching habilitado (1 año para assets)
  - GZIP comprimido
  - Función serverless configurada

- [x] **Variables de Entorno Documentadas**
  - Archivo `.env.example` creado
  - Variables necesarias listadas

## 2. Antes de Hacer Deploy

- [ ] **Crear cuenta Netlify** (si no tienes)
  - Ve a https://netlify.com
  - Usa GitHub, GitLab o correo

- [ ] **Configurar MongoDB Atlas**
  - Cuenta activa
  - Cluster creado
  - IP whitelist configurada (permitir todas: 0.0.0.0/0)
  - Usuario y contraseña generados

- [ ] **Preparar Variables de Entorno**
  ```
  MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/portafolio
  ADMIN_EMAIL=admin@tudominio.com
  ADMIN_PASSWORD=contraseña_segura_123
  JWT_SECRET=clave_super_secreta_muy_larga
  ```

## 3. Opciones de Deploy

### ✅ Opción A: GitHub + Netlify (RECOMENDADO)

```bash
# 1. Inicializar Git
git init
git add .
git commit -m "Portafolio listo para producción"

# 2. Crear repositorio en GitHub
# (github.com/new)

# 3. Push
git remote add origin https://github.com/TU_USUARIO/portafolio.git
git branch -M main
git push -u origin main

# 4. Conectar en Netlify
# - Ve a netlify.com
# - Click "New site from Git"
# - Autoriza GitHub
# - Selecciona tu repo
# - Configurar variables de entorno
# - Deploy automático
```

**Ventajas:**
- Deployment automático con cada push
- CI/CD incluido
- Fácil de revertir cambios
- Control de versiones completo

### ✅ Opción B: Deploy Manual con CLI

```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. Iniciar sesión
netlify login

# 3. Deploy
netlify deploy --prod --dir frontend/dist

# O ejecutar script
.\deploy.bat  (Windows)
./deploy.sh   (Linux/Mac)
```

**Ventajas:**
- Deploy inmediato
- No necesita GitHub
- Control total

### ✅ Opción C: Drag & Drop

1. Ve a app.netlify.com
2. Arrastra `frontend/dist` al área de deploy
3. Tu sitio estará listo en minutos

## 4. Después del Deploy

- [ ] **Verificar que funciona**
  - Homepage carga correctamente
  - Formulario de contacto envía mensajes
  - Admin login funciona (credenciales de .env)
  - CV descarga sin problemas

- [ ] **Configurar dominio personalizado** (opcional)
  - En Netlify: Domain settings
  - Apunta DNS a Netlify nameservers

- [ ] **Enabler HTTPS** (automático en Netlify)
  - Certificado Let's Encrypt
  - Renovación automática

- [ ] **Monitorear en tiempo real**
  - Netlify Analytics
  - Logs de deployment
  - Errores en producción

## 5. Credenciales Iniciales

```
Email: admin@portafolio.com
Contraseña: Admin1234
```

**⚠️ IMPORTANTE:** Cambia estas credenciales después del primer login en el panel admin.

## 6. URLs Importantes

- **Sitio:** Tu dominio en Netlify
- **Admin Panel:** Tu dominio + `/admin` (botón en nav)
- **Netlify Dashboard:** https://app.netlify.com
- **MongoDB Atlas:** https://cloud.mongodb.com
- **GitHub:** Tu repositorio

## 7. Troubleshooting

### Error: MongoDB connection failed
- Verifica MONGO_URI en variables de entorno
- Whitelist la IP de Netlify (0.0.0.0/0)
- Verifica usuario y contraseña

### Error: JWT_SECRET not found
- Verifica que JWT_SECRET está en Environment variables
- Redeploy después de agregar la variable

### Error: Admin login no funciona
- Verifica ADMIN_EMAIL y ADMIN_PASSWORD
- Intenta con las credenciales por defecto
- Revisa logs en Netlify Functions

### Sitio carga lento
- Vacía caché en tu navegador
- Verifica CDN en Netlify (debe estar activado)
- Revisa tamaño de imágenes (optimizadas en `public/`)

## 8. Próximos Pasos Opcionales

- [ ] Implementar Google Analytics
- [ ] Agregar Dark Mode
- [ ] Mejorar SEO (meta tags)
- [ ] Agregar más proyectos
- [ ] Implementar blog
- [ ] Configurar email transaccional
- [ ] Agregar certificado SSL personalizado

---

**¿Necesitas ayuda?**
- Revisión: [DEPLOYMENT.md](DEPLOYMENT.md)
- Preguntas: Documenta en GitHub Issues
- Bugs: Crea un PR con la solución
