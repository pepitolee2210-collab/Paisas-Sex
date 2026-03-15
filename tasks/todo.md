# PaisaSex — Red Social para Adultos + Tube Profesional

## Concepto (EVOLUCIÓN)
PaisaSex ya no es solo un tube. Es una **red social para adultos con monetización** donde:
- **Creadoras** tienen perfiles con stories (24h), reels, posts + contenido premium de pago
- **Fans** siguen creadoras, ven contenido gratuito, pagan por exclusivo
- **Tube** (videos profesionales del admin) es una sección integrada
- **Comisión**: plataforma cobra 10-15% de las ganancias de cada creadora

Propuesta de valor: Las chicas que venden contenido por WhatsApp tienen una plataforma profesional, segura y con herramientas de monetización. Algo que NO existe hoy.

---

## Arquitectura General

```
┌──────────────────────────────────────────────────────────┐
│                      FRONTEND                             │
│              Next.js 16 (App Router)                      │
│           TypeScript + Tailwind CSS v4                    │
│              Deploy: Vercel                               │
├──────────────────────────────────────────────────────────┤
│                      BACKEND                              │
│                    Supabase                                │
│  ┌────────────┬────────────┬─────────────┬────────────┐  │
│  │    Auth     │  Database  │   Storage   │  Realtime  │  │
│  │ (users,    │ (creators, │ (stories,   │ (notifs,   │  │
│  │  creators) │  content,  │  thumbnails,│  feed      │  │
│  │            │  payments) │  avatars)   │  updates)  │  │
│  └────────────┴────────────┴─────────────┴────────────┘  │
├──────────────────────────────────────────────────────────┤
│                  VIDEO / MEDIA                            │
│               Bunny.net Stream + CDN                      │
│  (Stories, reels, videos premium, tube content)           │
├──────────────────────────────────────────────────────────┤
│                     PAGOS                                 │
│              Stripe Connect                               │
│  (Split payments: 85-90% creadora / 10-15% plataforma,   │
│   suscripciones por creadora, compras individuales)       │
└──────────────────────────────────────────────────────────┘
```

## Stack Tecnológico

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| Frontend | Next.js 16 App Router | SSR/SSG, SEO, rendimiento |
| Estilos | Tailwind CSS v4 | Rápido, responsive |
| Auth | Supabase Auth | Email, OAuth, roles (fan/creadora/admin) |
| Database | Supabase PostgreSQL | RLS, realtime, escalable |
| Storage | Supabase Storage | Stories, fotos, thumbnails |
| Video | Bunny.net Stream | CDN global, HLS, económico |
| Pagos | Stripe Connect | Split payments automáticos por creadora |
| Realtime | Supabase Realtime | Notificaciones, feed en vivo |
| Deploy | Vercel | Edge functions, CI/CD |

## Roles de Usuario

| Rol | Puede hacer |
|-----|-------------|
| Fan (free) | Navegar, seguir creadoras, ver contenido gratuito, ver trailers tube |
| Fan (suscrito) | Todo lo free + contenido premium de creadoras suscritas + tube completo |
| Creadora | Subir stories/reels/posts, contenido premium, gestionar precios, ver ganancias |
| Admin | Todo + gestionar tube, aprobar creadoras, analytics globales, configurar comisión |

## Modelo de Datos

```sql
-- ═══ USUARIOS ═══
profiles:
  id (uuid, FK auth.users)
  username (unique)
  display_name
  avatar_url
  bio
  role (fan | creator | admin)
  is_verified (boolean)
  stripe_customer_id
  created_at

-- ═══ CREADORAS ═══
creator_profiles:
  id (uuid, FK profiles)
  banner_url
  city
  age
  subscription_price (decimal, ej: 4.99)
  stripe_account_id (Stripe Connect)
  commission_rate (decimal, default 0.15)
  total_earnings (decimal)
  followers_count (int)
  subscribers_count (int)
  is_approved (boolean)
  approved_at

-- ═══ RELACIONES SOCIALES ═══
follows:
  id, follower_id (FK profiles), creator_id (FK creator_profiles)
  created_at
  UNIQUE(follower_id, creator_id)

creator_subscriptions:
  id, fan_id (FK profiles), creator_id (FK creator_profiles)
  stripe_subscription_id
  status (active | canceled | past_due)
  price_at_time (decimal)
  current_period_start, current_period_end
  created_at

-- ═══ CONTENIDO ═══
stories:
  id, creator_id (FK creator_profiles)
  media_url (image or video)
  media_type (image | video)
  duration (int, seconds, for video)
  views_count
  expires_at (created_at + 24h)
  created_at

posts:
  id, creator_id (FK creator_profiles)
  type (reel | photo | gallery)
  caption
  media_urls (jsonb, array of URLs)
  thumbnail_url
  is_premium (boolean)
  individual_price (decimal, nullable — for buy-per-item)
  likes_count, comments_count, views_count
  created_at

post_likes:
  id, user_id (FK profiles), post_id (FK posts)
  created_at

post_comments:
  id, user_id (FK profiles), post_id (FK posts)
  content (text, max 500 chars)
  created_at

-- ═══ COMPRAS INDIVIDUALES ═══
content_purchases:
  id, buyer_id (FK profiles), post_id (FK posts)
  amount (decimal)
  platform_fee (decimal)
  creator_earning (decimal)
  stripe_payment_id
  created_at

-- ═══ TUBE (videos profesionales del admin) ═══
tube_videos:
  id, title, slug, description
  creator_id (FK creator_profiles, nullable — admin videos)
  category_id (FK categories)
  bunny_video_id, thumbnail_url
  duration, views_count
  is_premium (boolean)
  is_published (boolean)
  created_at

categories:
  id, name, slug, description, thumbnail_url, sort_order

tags:
  id, name, slug

tube_video_tags:
  video_id, tag_id

-- ═══ FAVORITOS / HISTORIAL ═══
favorites:
  id, user_id, tube_video_id, created_at

watch_history:
  id, user_id, tube_video_id, watched_at, progress_seconds

-- ═══ NOTIFICACIONES ═══
notifications:
  id, user_id (FK profiles)
  type (new_story | new_post | new_subscriber | payout)
  title, body
  reference_id (uuid, generic)
  is_read (boolean)
  created_at

-- ═══ PAYOUTS ═══
creator_payouts:
  id, creator_id (FK creator_profiles)
  amount, status (pending | processing | completed | failed)
  stripe_payout_id
  period_start, period_end
  created_at
```

## Monetización

| Fuente | Fan paga | Creadora recibe | Plataforma recibe |
|--------|----------|-----------------|-------------------|
| Suscripción a creadora | $X/mes | 85-90% | 10-15% |
| Compra contenido individual | $X único | 85-90% | 10-15% |
| Suscripción tube (Basic) | $4.99/mes | — | 100% |
| Suscripción tube (Premium) | $9.99/mes | — | 100% |

## Páginas / Rutas

```
═══ PÚBLICO ═══
/                         → Landing (hero + creadoras destacadas + tube trending)
/explore                  → Explorar creadoras + contenido
/auth/login               → Login
/auth/register            → Registro (fan o creadora)
/auth/forgot-password     → Recuperar contraseña

═══ FEED SOCIAL ═══
/feed                     → Timeline de creadoras que sigues (stories arriba + posts)
/stories/[creatorId]      → Viewer de stories (fullscreen, swipe)

═══ PERFILES DE CREADORAS ═══
/[username]               → Perfil público (bio, stats, posts gratuitos, botón suscribirse)
/[username]/premium       → Contenido premium (solo suscriptores)
/[username]/reels         → Reels de la creadora

═══ TUBE (videos profesionales) ═══
/tube                     → Catálogo de videos profesionales
/tube/[slug]              → Player de video
/tube/categories          → Categorías del tube
/tube/category/[slug]     → Videos por categoría

═══ FAN (usuario autenticado) ═══
/account                  → Mi perfil / configuración
/account/subscriptions    → Mis suscripciones activas
/account/purchases        → Mis compras de contenido
/account/favorites        → Mis favoritos (tube)
/account/history          → Mi historial

═══ PANEL CREADORA ═══
/creator                  → Dashboard (ganancias, stats, contenido reciente)
/creator/stories          → Subir/gestionar stories
/creator/posts            → Subir/gestionar posts y reels
/creator/premium          → Gestionar contenido premium + precios
/creator/earnings         → Historial de ganancias y payouts
/creator/subscribers      → Ver lista de suscriptores
/creator/settings         → Configurar perfil, precio suscripción

═══ ADMIN ═══
/admin                    → Dashboard global
/admin/creators           → Aprobar/gestionar creadoras
/admin/tube               → CRUD videos profesionales
/admin/categories         → CRUD categorías
/admin/users              → Usuarios y suscripciones
/admin/earnings           → Revenue global, comisiones
/admin/analytics          → Métricas (MAU, revenue, growth)

═══ LEGAL ═══
/pricing                  → Planes tube + info para creadoras
/terms                    → Términos de uso
/privacy                  → Política de privacidad
/compliance               → 2257 Compliance
/dmca                     → DMCA
/creators/apply           → Landing para atraer creadoras + formulario
```

## Seguridad

- RLS en TODAS las tablas de Supabase
- Contenido premium protegido: signed URLs con expiración
- Stories: verificar expiración server-side antes de servir
- Stripe Connect: onboarding verificado para creadoras
- Moderación: admin aprueba creadoras antes de publicar
- Rate limiting en uploads y API routes
- Validación server-side de suscripción/compra antes de servir contenido
- CSP headers estrictos
- Verificación de edad obligatoria
- Reportar contenido (flag system)

## Fases de Implementación

### Fase 1: Fundación ✅ (COMPLETADA)
- [x] 1.1 Scaffold Next.js + Tailwind + TypeScript
- [x] 1.2 Layout principal (navbar, footer, tema oscuro)
- [x] 1.3 Landing page con hero sensual
- [x] 1.4 Todas las páginas del tube (19 páginas)
- [x] 1.5 Verificación de edad + música de fondo
- [x] 1.6 Diseño mobile-first responsive
- [x] 1.7 Push a GitHub

### Fase 2: Backend + Auth
- [ ] 2.1 Crear proyecto Supabase
- [ ] 2.2 Esquema de base de datos completo (todas las tablas)
- [ ] 2.3 RLS policies para cada tabla
- [ ] 2.4 Sistema de auth (registro como fan o creadora)
- [ ] 2.5 Roles y permisos (fan, creator, admin)
- [ ] 2.6 Middleware de protección de rutas

### Fase 3: Red Social — Creadoras
- [ ] 3.1 Landing "Sé una creadora" (/creators/apply)
- [ ] 3.2 Onboarding de creadora (formulario, verificación)
- [ ] 3.3 Panel creadora: dashboard + subir stories
- [ ] 3.4 Panel creadora: subir posts/reels + contenido premium
- [ ] 3.5 Panel creadora: configurar precio de suscripción
- [ ] 3.6 Perfil público de creadora (/[username])
- [ ] 3.7 Sistema de stories (subir, ver, expiración 24h)

### Fase 4: Red Social — Fans
- [ ] 4.1 Sistema de follow (seguir creadoras gratis)
- [ ] 4.2 Feed principal (/feed) — stories arriba + posts
- [ ] 4.3 Story viewer fullscreen
- [ ] 4.4 Likes y comentarios en posts
- [ ] 4.5 Explorar creadoras (/explore)
- [ ] 4.6 Notificaciones

### Fase 5: Monetización
- [ ] 5.1 Stripe Connect: onboarding de creadoras
- [ ] 5.2 Suscripción por creadora (checkout + webhooks)
- [ ] 5.3 Compra individual de contenido premium
- [ ] 5.4 Split automático de pagos (85-90% / 10-15%)
- [ ] 5.5 Dashboard de ganancias para creadoras
- [ ] 5.6 Sistema de payouts
- [ ] 5.7 Suscripción tube (Basic/Premium) — tu contenido profesional

### Fase 6: Tube Profesional (integrado)
- [ ] 6.1 Admin: CRUD videos profesionales
- [ ] 6.2 Integración Bunny.net para upload/streaming
- [ ] 6.3 Catálogo público + player con protección por tier
- [ ] 6.4 Categorías y búsqueda del tube

### Fase 7: Admin + Pulido
- [ ] 7.1 Panel admin: aprobar creadoras
- [ ] 7.2 Panel admin: analytics globales
- [ ] 7.3 Panel admin: revenue y comisiones
- [ ] 7.4 SEO (meta tags, sitemap, structured data)
- [ ] 7.5 Performance (lazy loading, image optimization)
- [ ] 7.6 Testing final y deploy a producción

---

## Estado: PLAN APROBADO — Iniciando Fase 2
