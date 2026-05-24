@echo off
REM Script de deploy a Netlify - Windows
REM Uso: deploy.bat

echo.
echo 🚀 Iniciando deployment a Netlify...
echo.

REM 1. Instalar dependencias frontend
echo 📦 Instalando dependencias del frontend...
cd frontend
call npm install
cd ..

REM 2. Instalar dependencias backend
echo 📦 Instalando dependencias del backend...
cd backend
call npm install
cd ..

REM 3. Build del frontend
echo 🏗️  Compilando frontend...
cd frontend
call npm run build
if errorlevel 1 (
    echo ❌ Error en el build del frontend
    exit /b 1
)
cd ..

REM 4. Deploy a Netlify
echo 🌐 Subiendo a Netlify...
call netlify deploy --prod --dir frontend/dist

echo.
echo ✅ ¡Deployment completado!
echo 👉 Verifica tu sitio en https://app.netlify.com
echo.
pause
