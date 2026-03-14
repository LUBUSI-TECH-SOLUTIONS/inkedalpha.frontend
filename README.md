# InkedAlpha Frontend

![Project status](https://img.shields.io/badge/status-activo-brightgreen)
![Last version](https://img.shields.io/github/v/release/LUBUSI-TECH-SOLUTIONS/inkedalpha.frontend)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.0-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-cyan)

> Storefront web para **InkedAlpha**, una tienda de ropa urbana/streetwear. Construido con React 19, TypeScript y Vite, con soporte multilenguaje, modo oscuro y checkout via WhatsApp.

---

## Indice

- [Descripcion](#descripcion)
- [Caracteristicas](#caracteristicas)
- [Tech Stack](#tech-stack)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas](#rutas)
- [Estado Global](#estado-global-zustand)
- [Instalacion](#instalacion)
- [Configuracion](#configuracion)
- [Scripts Disponibles](#scripts-disponibles)
- [API](#api)
- [Deployment](#deployment)
- [Contribucion](#contribucion)
- [Licencia](#licencia)

---

## Descripcion

InkedAlpha Frontend es una aplicacion web de e-commerce especializada en ropa urbana con disenos de tatuajes y arte personalizado. Ofrece una experiencia de usuario fluida con soporte multiidioma (ES/EN), temas claro/oscuro, catalogo de productos dinamico y checkout integrado via WhatsApp.

---

## Caracteristicas

- **Catalogo de productos** con filtrado por categoria, seleccion de color/talla e indicadores de stock (disponible, bajo, agotado)
- **Carrito de compras** persistente en `localStorage` con manejo de cantidades
- **Checkout via WhatsApp** — genera un mensaje formateado con los productos y abre WhatsApp Web directamente
- **Multilenguaje** (Espanol / Ingles) con deteccion automatica del navegador
- **Modo oscuro / claro** persistente, oscuro por defecto
- **Loading skeletons** en listas de productos y paginas de detalle
- **Cache de productos** con expiracion de 10 minutos en `localStorage`
- **Diseno responsive** — mobile, tablet y desktop
- **Fuentes y estetica personalizadas** con efecto neon y paleta urbana

---

## Tech Stack

### Core
| Tecnologia | Version | Rol |
|---|---|---|
| React | 19.1.0 | Framework UI |
| TypeScript | 5.8.3 | Lenguaje |
| Vite + SWC | 7.0.0 | Build tool y dev server |
| React Router | 7.8.0 | Enrutamiento |

### Styling & UI
| Tecnologia | Version | Rol |
|---|---|---|
| TailwindCSS | 4.1.11 | Framework CSS utilitario |
| Radix UI | varios | Componentes primitivos accesibles |
| shadcn/ui | — | Sistema de componentes (variante New York) |
| Lucide React | 0.525.0 | Iconos |
| Embla Carousel | 8.6.0 | Slider/carrusel |
| next-themes | 0.4.6 | Gestion de temas claro/oscuro |
| Sonner | 2.0.7 | Notificaciones toast |

### Estado y datos
| Tecnologia | Version | Rol |
|---|---|---|
| Zustand | 5.0.8 | Estado global |
| Axios | 1.12.2 | Cliente HTTP |
| i18next | 25.3.4 | Internacionalizacion |
| react-i18next | 15.6.1 | Integracion React i18n |

### Herramientas de desarrollo
| Tecnologia | Rol |
|---|---|
| ESLint 9 | Linting |
| Better Commits | Commits convencionales |
| class-variance-authority | Variantes de componentes |
| clsx + tailwind-merge | Utilidades de clases CSS |

---

## Estructura del Proyecto

```
inkedalpha.frontend/
├── public/
│   ├── background/              # Imagenes de fondo
│   ├── fonts/                   # Fuentes personalizadas (Manu, Copperplate - WOFF)
│   ├── images/
│   │   ├── banners/             # Banners promocionales
│   │   ├── logo/                # Logotipos
│   │   └── products/            # Imagenes de productos
│   └── logos/
│
├── src/
│   ├── app/
│   │   ├── apiClient.ts         # Cliente Axios singleton con deduplicacion y timeouts
│   │   ├── App.tsx              # Root con Router y ThemeProvider
│   │   ├── components/
│   │   │   ├── changeLenguage.tsx   # Selector de idioma
│   │   │   ├── themeProvider.tsx    # Proveedor de temas
│   │   │   └── typewriterText.tsx   # Efecto typewriter animado
│   │   ├── hooks/
│   │   │   └── useTypewriter.ts
│   │   ├── i18n/
│   │   │   └── i18n.ts              # Config i18next (ES/EN embebido en codigo)
│   │   ├── layouts/
│   │   │   ├── layoutMain.tsx       # Layout principal con Header y Footer
│   │   │   └── components/
│   │   │       ├── header.tsx
│   │   │       ├── footer.tsx
│   │   │       └── search.tsx
│   │   ├── routes/
│   │   │   └── routes.tsx           # Definicion de rutas con React Router
│   │   ├── service/
│   │   │   ├── category/
│   │   │   │   ├── categoryService.ts
│   │   │   │   └── categoryType.ts
│   │   │   └── products/
│   │   │       ├── productService.ts    # Llamadas API de productos
│   │   │       └── productType.ts       # Interfaces TypeScript
│   │   └── store/                       # Stores Zustand
│   │       ├── cart/useCart.ts          # Carrito (persistente localStorage)
│   │       ├── category/useCategory.ts
│   │       ├── product/useProduct.ts    # Productos con cache TTL
│   │       └── lenguageStateStore.ts
│   │
│   ├── components/
│   │   └── ui/                          # Componentes shadcn/ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── product-cart.tsx
│   │       ├── skeleton.tsx
│   │       ├── tabs.tsx
│   │       ├── sonner.tsx
│   │       └── ...
│   │
│   ├── entities/
│   │   └── product/types.ts             # Tipos de dominio
│   │
│   ├── features/                        # Paginas y logica por feature
│   │   ├── about/                       # Pagina About con historia de marca
│   │   ├── cart/
│   │   │   ├── cart.tsx                 # Panel de carrito (Sheet overlay)
│   │   │   └── utils/useMessageProducts.ts  # Generador de mensaje WhatsApp
│   │   ├── category/
│   │   ├── home/                        # Landing page con hero + categorias + productos
│   │   ├── product/                     # Detalle de producto (imagenes, color, talla)
│   │   └── shop/
│   │
│   ├── lib/utils.ts                     # cn(), formatCurrency()
│   ├── index.css                        # Estilos globales (Tailwind imports)
│   └── main.tsx                         # Entry point
│
├── .better-commits.json
├── .env                                 # Variables de entorno (no commitear)
├── components.json                      # Config shadcn/ui
├── eslint.config.js
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Rutas

| Ruta | Pagina | Descripcion |
|---|---|---|
| `/` | HomePage | Hero, categorias destacadas, productos |
| `/shop` | ShopPage | Catalogo completo |
| `/category` | CategoryPage | Todas las categorias |
| `/category/:id_category` | CategoryPage | Filtrada por categoria |
| `/product/:id_product` | ProductPage | Detalle de producto (imagenes, color, talla, stock) |
| `/about` | AboutPage | Historia y valores de la marca |

---

## Estado Global (Zustand)

| Store | Persistencia | Responsabilidades |
|---|---|---|
| `useCart` | `localStorage` (`cart-storage`) | Items del carrito, visibilidad del panel, totales, cantidad por item |
| `useProduct` | `localStorage` (`product-storage`) | Lista de productos, producto seleccionado, cache con TTL 10 min |
| `useCategory` | No | Categorias disponibles |
| `useLanguageStore` | No | Idioma activo |

El carrito se sanitiza automaticamente al rehidratar para evitar datos corruptos.

---

## Instalacion

### Requisitos previos

- **Node.js** >= 18.0.0
- **npm** >= 9 o **Bun** >= 1.0 (recomendado)
- **Git**

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/LUBUSI-TECH-SOLUTIONS/inkedalpha.frontend.git
cd inkedalpha.frontend

# 2. Instalar dependencias
npm install
# o con bun
bun install

# 3. Configurar variables de entorno
cp .env.example .env   # editar con la URL del backend
```

---

## Configuracion

### Variables de entorno

Crea un archivo `.env` en la raiz del proyecto:

```env
# URL base del backend REST API
VITE_API_URL_PROD=http://127.0.0.1:8000
```

> Todas las variables deben llevar el prefijo `VITE_` para ser accesibles desde el cliente Vite.

### i18n

El proyecto soporta **Espanol** e **Ingles**. Las traducciones estan embebidas en `src/app/i18n/i18n.ts` y se detecta el idioma del navegador automaticamente. El usuario puede cambiarlo desde el header.

### Temas

El tema oscuro esta activo por defecto. El usuario puede alternar entre claro/oscuro desde el header. La preferencia se persiste en `localStorage`.

### shadcn/ui (`components.json`)

```json
{
  "style": "new-york",
  "tailwind": { "baseColor": "neutral", "cssVariables": true },
  "aliases": { "components": "@/components", "ui": "@/components/ui" },
  "iconLibrary": "lucide"
}
```

---

## Scripts Disponibles

| Script | Comando | Descripcion |
|---|---|---|
| `dev` | `npm run dev` | Servidor de desarrollo en `http://localhost:5173` |
| `build` | `npm run build` | Build de produccion (tsc + vite) |
| `preview` | `npm run preview` | Preview del build de produccion |
| `lint` | `npm run lint` | Analisis de codigo con ESLint |

---

## API

El cliente HTTP (`src/app/apiClient.ts`) es un **singleton Axios** con:
- Deduplicacion de requests en vuelo via `Map`
- Normalizacion de errores con notificaciones Sonner
- Timeout de 90 segundos por defecto

### Endpoint principal de productos

```
GET /v1/product
```

| Parametro | Tipo | Descripcion |
|---|---|---|
| `lang` | `string` | Idioma (`es` / `en`) |
| `product_id` | `string?` | ID de producto especifico |
| `collection_id` | `string?` | Filtrar por coleccion |
| `product_category_id` | `string?` | Filtrar por categoria |
| `include_details` | `boolean?` | Incluir detalles completos |
| `single` | `boolean?` | Respuesta de producto unico |

### Checkout WhatsApp

El carrito genera un mensaje de texto formateado con los productos seleccionados (nombre, color, talla, cantidad) y redirige a WhatsApp Web con el numero de contacto configurado.

---

## Convenciones de commits

El proyecto usa [Better Commits](https://github.com/Everduin94/better-commits):

```bash
npx better-commits
# o
bunx better-commits
```

**Tipos:** `feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`
**Scopes:** `app`, `shared`, `server`, `tools`

---

## Deployment

### Netlify (recomendado)

1. Conecta tu repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

```bash
npm i -g vercel
vercel --prod
```

El plugin de Netlify esta disponible en `vite.config.ts` (comentado) para deployment automatico.

---

## Responsive Design

| Breakpoint | Rango |
|---|---|
| Mobile | 320px – 768px |
| Tablet | 768px – 1024px |
| Desktop | 1024px+ |
| Large Desktop | 1440px+ |

---

## Contribucion

1. Fork el proyecto
2. Crea tu feature branch: `git checkout -b feature/mi-feature`
3. Haz commit con better-commits: `npx better-commits`
4. Push: `git push origin feature/mi-feature`
5. Abre un Pull Request hacia `develop`

**Estandares:**
- Usar TypeScript estricto sin `any` innecesario
- Seguir convenciones de TailwindCSS (no CSS custom para componentes)
- Ejecutar `npm run lint` antes de hacer commit

---

## Contribuidores

<a href="https://github.com/LUBUSI-TECH-SOLUTIONS/inkedalpha.frontend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LUBUSI-TECH-SOLUTIONS/inkedalpha.frontend" />
</a>

---

## Licencia

Este proyecto es propiedad de **LUBUSI TECH SOLUTIONS**. Todos los derechos reservados.

---

## Soporte

- **Issues:** [GitHub Issues](https://github.com/LUBUSI-TECH-SOLUTIONS/inkedalpha.frontend/issues)
- **Email:** support@lubusitech.com

---

<div align="center">
  Hecho con amor por el equipo de LUBUSI TECH SOLUTIONS
</div>
