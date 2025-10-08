# 🎨 InkedAlpha Frontend

![Project status](https://img.shields.io/badge/status-activo-brightgreen)
![Last version](https://img.shields.io/github/v/release/LUBUSI-TECH-SOLUTIONS/inkedalpha.frontend)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.0-green)
 ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-cyan)

> Modern e-commerce frontend for tattoo and custom apparel designs built with React, TypeScript, and TailwindCSS.

## 📌 Índice

- [Descripción](#-descripción)
- [Características](#-características)
- [Tech Stack](#-tech-stack)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Scripts Disponibles](#-scripts-disponibles)
- [Configuraciones](#-configuraciones)
- [Contribuidores](#-contribuidores)
- [Licencia](#-licencia)
- [Última Modificación](#-última-modificación)

## 📌 Descripción

InkedAlpha Frontend es una aplicación web moderna de e-commerce especializada en diseños de tatuajes y ropa personalizada. La aplicación ofrece una experiencia de usuario fluida con soporte multiidioma, temas personalizables, y una arquitectura escalable basada en componentes reutilizables.

## 🚀 Características

- 🎨 **Diseño Moderno**: UI/UX con componentes de Radix UI y TailwindCSS
- 🌍 **Multiidioma**: Soporte completo con i18next
- 🌙 **Temas**: Modo claro/oscuro con next-themes
- 🛒 **E-commerce**: Catálogo de productos con carrito de compras
- 📱 **Responsive**: Totalmente adaptable a dispositivos móviles
- ⚡ **Performance**: Optimizado con Vite y React SWC
- 🔄 **Estado Global**: Gestión de estado con Zustand
- 🎠 **Carousels**: Galerías interactivas con Embla Carousel
- 🔍 **Navegación**: Sistema de rutas con React Router
- 🎯 **TypeScript**: Tipado estático completo
- 📦 **Componentes**: Sistema de diseño basado en shadcn/ui

## 🛠️ Tech Stack

### Frontend Core
- **React 19.1.0** - Biblioteca de UI
- **TypeScript 5.8.3** - Lenguaje de programación
- **Vite 7.0.0** - Build tool y dev server
- **React Router 7.8.0** - Enrutamiento

### Styling & UI
- **TailwindCSS 4.1.11** - Framework CSS utilitario
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React** - Librería de iconos
- **shadcn/ui** - Sistema de componentes

### State Management & Data
- **Zustand 5.0.6** - Gestión de estado global
- **Axios 1.11.0** - Cliente HTTP
- **i18next** - Internacionalización

### Development Tools
- **ESLint** - Linting
- **Better Commits** - Commits convencionales
- **SWC** - Compilador rápido para React

## 📁 Estructura del Proyecto

```
inkedalpha.frontend/
├── public/                          # Assets estáticos
│   ├── background/                  # Imágenes de fondo
│   ├── fonts/                       # Fuentes personalizadas
│   ├── images/                      # Imágenes del sitio
│   │   ├── banners/                # Banners promocionales
│   │   ├── logo/                   # Logotipos
│   │   └── products/               # Imágenes de productos
│   └── logos/                      # Logos adicionales
│
├── src/                            # Código fuente
│   ├── app/                        # Configuración principal
│   │   ├── components/             # Componentes globales
│   │   │   ├── changeLenguage.tsx  # Selector de idioma
│   │   │   ├── themeProvider.tsx   # Proveedor de temas
│   │   │   └── typewriterText.tsx  # Efecto de texto
│   │   ├── dataExample/            # Datos de prueba
│   │   ├── hooks/                  # Hooks personalizados
│   │   ├── i18n/                   # Configuración i18n
│   │   ├── layouts/                # Layouts de la app
│   │   │   └── components/         # Componentes del layout
│   │   ├── routes/                 # Configuración de rutas
│   │   ├── store/                  # Stores de Zustand
│   │   └── apiClient.ts            # Cliente API
│   │
│   ├── components/                 # Componentes reutilizables
│   │   └── ui/                     # Componentes UI base
│   │
│   ├── features/                   # Funcionalidades por módulos
│   │   ├── about/                  # Página About
│   │   ├── category/               # Páginas de categorías
│   │   ├── home/                   # Página principal
│   │   ├── product/                # Páginas de productos
│   │   └── shop/                   # Tienda
│   │
│   ├── entities/                   # Tipos y entidades
│   │   └── product/               # Entidades de productos
│   │
│   ├── lib/                       # Utilidades
│   ├── assets/                    # Assets del código
│   ├── index.css                  # Estilos globales
│   ├── main.tsx                   # Punto de entrada
│   └── vite-env.d.ts             # Tipos de Vite
│
├── .better-commits.json           # Configuración commits
├── components.json                # Configuración shadcn/ui
├── eslint.config.js              # Configuración ESLint
├── package.json                  # Dependencias
├── tsconfig.json                 # Configuración TypeScript
├── vite.config.ts               # Configuración Vite
└── README.md                    # Este archivo
```

## 📦 Instalación

### Requisitos previos

- 🟢 **Node.js** >= 18.0.0
- 📦 **Bun** >= 1.0.0 (recomendado) o npm/yarn
- 🌐 **Git**

### Pasos de instalación

```bash
# Clonar el repositorio
git clone https://github.com/LUBUSI-TECH-SOLUTIONS/inkedalpha.frontend.git

# Ingresar al directorio
cd inkedalpha.frontend

# Instalar dependencias
bun install
# o con npm
# npm install
```

## ⚙️ Configuración

### Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=InkedAlpha

# Development
VITE_DEV_MODE=true
```

### Configuración de idiomas

El proyecto soporta múltiples idiomas configurados en `src/app/i18n/i18n.ts`.

## ▶️ Uso

### Desarrollo

```bash
# Iniciar servidor de desarrollo
bun run dev
# La aplicación estará disponible en http://localhost:5173
```

### Producción

```bash
# Generar build de producción
bun run build

# Vista previa del build
bun run preview
```

## 📋 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **dev** | `bun run dev` | Inicia el servidor de desarrollo |
| **build** | `bun run build` | Genera el build de producción |
| **lint** | `bun run lint` | Ejecuta ESLint para análisis de código |
| **preview** | `bun run preview` | Vista previa del build de producción |

## ⚙️ Configuraciones

### shadcn/ui Configuration (`components.json`)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### TypeScript Configuration

El proyecto utiliza una configuración modular de TypeScript:
- `tsconfig.json` - Configuración principal
- `tsconfig.app.json` - Configuración de la aplicación
- `tsconfig.node.json` - Configuración para Node.js

### Vite Configuration (`vite.config.ts`)

```typescript
import { defineConfig } from 'vite'
import path from "path"
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
```

### Better Commits Configuration

El proyecto utiliza `better-commits` para mantener commits convencionales:

**Tipos de commit disponibles:**
- `feat` 🌟 - Nueva funcionalidad
- `fix` 🐛 - Corrección de errores
- `docs` 📚 - Cambios en documentación
- `refactor` 🔨 - Refactorización de código
- `perf` 🚀 - Mejoras de rendimiento
- `test` 🚨 - Pruebas
- `build` 🚧 - Sistema de build
- `ci` 🤖 - Configuración CI
- `chore` 🧹 - Tareas de mantenimiento

## 🚀 Deployment

### Netlify (Recomendado)

El proyecto está configurado para deployment en Netlify:

1. Conecta tu repositorio a Netlify
2. Configuración de build:
   - **Build command:** `bun run build`
   - **Publish directory:** `dist`

### Otros Proveedores

**Vercel:**
```bash
npm i -g vercel
vercel --prod
```

**GitHub Pages:**
```bash
bun run build
# Sube el contenido de dist/ a tu rama gh-pages
```

## 🧪 Testing (Próximamente)

Planeado para implementar con Vitest:

```bash
# Instalación de dependencias de testing
bun add -d vitest @vitest/ui @vitest/coverage-v8
bun add -d jsdom @testing-library/react @testing-library/jest-dom

# Scripts de testing (a agregar)
# "test": "vitest",
# "test:ui": "vitest --ui",
# "test:coverage": "vitest --coverage"
```

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 **Mobile:** 320px - 768px
- 💻 **Tablet:** 768px - 1024px
- 🖥️ **Desktop:** 1024px+
- 📺 **Large Desktop:** 1440px+

## 🎨 Design System

Basado en **shadcn/ui** con:
- ✅ Componentes accesibles
- 🎨 Temas personalizables
- 📏 Tipografía consistente
- 🌈 Paleta de colores neutral
- 📐 Espaciado sistemático

## 🔒 Variables de Entorno

```env
# Configuración de API
VITE_API_BASE_URL=https://api.inkedalpha.com
VITE_API_VERSION=v1

# Configuración de la App
VITE_APP_NAME=InkedAlpha
VITE_APP_VERSION=1.0.0

# Configuración de Desarrollo
VITE_DEV_MODE=false
VITE_SHOW_DEVTOOLS=false

# Analytics (opcional)
VITE_GA_ID=G-XXXXXXXXXX
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios usando better-commits (`bunx better-commits`)
4. Push a la branch (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

### Estándares de código

- ✅ Usar TypeScript estricto
- 🎨 Seguir las convenciones de TailwindCSS
- 📝 Documentar componentes complejos
- 🧪 Escribir pruebas para nuevas funcionalidades
- 🔍 Ejecutar `bun run lint` antes de commit

## 👥 Contribuidores

Personas que han contribuido a este proyecto:

<a href="https://github.com/LUBUSI-TECH-SOLUTIONS/inkedalpha.frontend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LUBUSI-TECH-SOLUTIONS/inkedalpha.frontend" />
</a>

## 📄 Licencia

Este proyecto es propiedad de **LUBUSI TECH SOLUTIONS**. Todos los derechos reservados.

## 🆘 Soporte

¿Necesitas ayuda? 

- 📧 **Email:** support@lubusitech.com
- 💬 **Issues:** [GitHub Issues](https://github.com/LUBUSI-TECH-SOLUTIONS/inkedalpha.frontend/issues)
- 📖 **Docs:** [Documentación del proyecto](https://docs.inkedalpha.com)

## 📅 Última Modificación

Este archivo fue actualizado por última vez el: `01/10/2025`

---

<div align="center">
  <strong>🎨 Hecho con ❤️ por el equipo de LUBUSI TECH SOLUTIONS</strong>
</div>
