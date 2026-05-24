#!/bin/bash

# Script de deploy a Netlify - Linux/Mac
# Uso: ./deploy.sh

echo "🚀 Iniciando deployment a Netlify..."

# 1. Instalar dependencias
echo "📦 Instalando dependencias..."
cd frontend
npm install
cd ..
cd backend
npm install
cd ..

# 2. Build del frontend
echo "🏗️  Compilando frontend..."
cd frontend
npm run build
cd ..

# 3. Deploy a Netlify
echo "🌐 Subiendo a Netlify..."
netlify deploy --prod --dir frontend/dist

echo "✅ ¡Deployment completado!"
echo "👉 Verifica tu sitio en Netlify.com"
