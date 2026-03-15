# PaisaSex — Plan de Arquitectura XL

## Concepto
Plataforma tube de video para adultos con modelos colombianas (paisas). Audiencia global, contenido subido exclusivamente por el admin. Monetización por suscripción de pago por ver.

---

## Arquitectura General

```
┌─────────────────────────────────────────────────┐
│                   FRONTEND                       │
│          Next.js 14+ (App Router)                │
│          TypeScript + Tailwind CSS               │
│          Deploy: Vercel                          │
├─────────────────────────────────────────────────┤
│                   BACKEND                        │
│              Supabase                            │
│  ┌──────────┬──────────┬───────────┐            │
│  │   Auth   │ Database │  Storage  │            │
│  │ (users,  │ (videos, │ (thumbs,  │            │
│  │  subs)   │ cats,    │  assets)  │            │
│  │          │ models)  │           │            │
│  └──────────┴──────────┴───────────┘            │
├─────────────────────────────────────────────────┤
│               VIDEO STREAMING                    │
│           Bunny.net Stream                       │
│  (CDN global, HLS adaptive, bajo costo,         │
│   token auth, anti-hotlink)                      │
├─────────────────────────────────────────────────┤
│                 PAGOS                            │
│              Stripe                              │
│  (suscripciones recurrentes, webhooks,           │
│   portal de cliente, multi-moneda)               │
└─────────────────────────────────────────────────┘
```

## Stack Tecnológico

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| Frontend | Next.js 14+ App Router | SSR/SSG, SEO, rendimiento |
| Estilos | Tailwind CSS | Rápido, responsive, consistente |
| Auth | Supabase Auth | Email/password, OAuth, JWT |
| Database | Supabase PostgreSQL | RLS, realtime, escalable |
| Storage | Supabase Storage | Thumbnails, avatares, assets estáticos |
| Video | Bunny.net Stream | CDN global, HLS, económico ($1/1000 views) |
| Pagos | Stripe | Suscripciones, webhooks, cumplimiento |
| Deploy | Vercel | Edge functions, CI/CD automático |

## Modelo de Datos (Supabase PostgreSQL)

```sql
-- Usuarios (extiende auth.users)
profiles: id, email, username, avatar_url, subscription_tier, subscription_status, stripe_customer_id, created_at

-- Suscripciones
subscriptions: id, user_id, stripe_subscription_id, tier (free|basic|premium), status, current_period_start, current_period_end

-- Modelos
models: id, name, slug, bio, age, city, profile_image, banner_image, is_active, created_at

-- Videos
videos: id, title, slug, description, model_id, category_id, bunny_video_id, thumbnail_url, duration, views_count, is_premium, is_published, created_at

-- Categorías
categories: id, name, slug, description, thumbnail_url, sort_order

-- Tags
tags: id, name, slug
video_tags: video_id, tag_id

-- Favoritos
favorites: id, user_id, video_id, created_at

-- Historial de visualización
watch_history: id, user_id, video_id, watched_at, progress_seconds
```

## Tiers de Suscripción

| Tier | Precio | Acceso |
|------|--------|--------|
| Free | $0 | Trailers (30s), thumbnails, navegar catálogo |
| Basic | $4.99/mes | Videos completos en 720p |
| Premium | $9.99/mes | Videos completos en 1080p/4K, sin ads, acceso anticipado |

## Páginas / Rutas

```
/                     → Landing + videos destacados (público)
/videos               → Catálogo con filtros y búsqueda
/video/[slug]         → Player + info + relacionados
/categories           → Grid de categorías
/category/[slug]      → Videos de la categoría
/models               → Grid de modelos
/model/[slug]         → Perfil + videos del modelo
/search?q=            → Resultados de búsqueda
/pricing              → Planes de suscripción
/auth/login           → Login
/auth/register        → Registro
/auth/forgot-password → Recuperar contraseña
/account              → Perfil del usuario
/account/subscription → Gestión de suscripción
/account/favorites    → Videos favoritos
/account/history      → Historial

--- ADMIN (solo tú) ---
/admin                → Dashboard
/admin/videos         → CRUD videos (subir a Bunny, metadata)
/admin/models         → CRUD modelos
/admin/categories     → CRUD categorías
/admin/users          → Ver usuarios y suscripciones
/admin/analytics      → Métricas (views, revenue, signups)
```

## Seguridad

- RLS en todas las tablas de Supabase
- Videos premium protegidos con signed URLs (Bunny token auth)
- Rate limiting en API routes
- Validación server-side de suscripción antes de servir video
- Admin protegido por rol en DB (no hardcoded)
- CSP headers estrictos
- Verificación de edad (checkbox legal + términos)

## Fases de Implementación

### Fase 1: Fundación (actual)
- [ ] 1.1 Scaffold Next.js + Tailwind + TypeScript
- [ ] 1.2 Configurar Supabase (proyecto, tablas, RLS)
- [ ] 1.3 Sistema de auth (registro, login, perfil)
- [ ] 1.4 Layout principal (navbar, footer, tema oscuro)
- [ ] 1.5 Landing page

### Fase 2: Contenido
- [ ] 2.1 Panel admin (layout + auth de admin)
- [ ] 2.2 CRUD modelos
- [ ] 2.3 CRUD categorías
- [ ] 2.4 CRUD videos (integración Bunny.net upload)
- [ ] 2.5 Página de catálogo de videos (público)
- [ ] 2.6 Player de video con protección por tier
- [ ] 2.7 Páginas de modelos y categorías

### Fase 3: Monetización
- [ ] 3.1 Integración Stripe (productos, precios, checkout)
- [ ] 3.2 Webhooks de Stripe → actualizar suscripción en DB
- [ ] 3.3 Página de pricing
- [ ] 3.4 Portal de gestión de suscripción
- [ ] 3.5 Lógica de acceso por tier (middleware)

### Fase 4: Engagement
- [ ] 4.1 Sistema de búsqueda (full-text search PostgreSQL)
- [ ] 4.2 Favoritos
- [ ] 4.3 Historial de visualización
- [ ] 4.4 Videos relacionados
- [ ] 4.5 Conteo de vistas

### Fase 5: Pulido
- [ ] 5.1 SEO (meta tags, sitemap, structured data)
- [ ] 5.2 Performance (lazy loading, image optimization)
- [ ] 5.3 Analytics dashboard admin
- [ ] 5.4 Verificación de edad
- [ ] 5.5 Términos y condiciones, política de privacidad
- [ ] 5.6 Testing final y deploy

---

## Estado: PENDIENTE APROBACIÓN
Esperando aprobación del plan antes de iniciar Fase 1.
