// ═══ CREATORS (antes "models") ═══
export const MOCK_CREATORS = [
  { id: "1", username: "valentina.m", name: "Valentina M.", city: "Medellín", age: 23, bio: "Paisa de corazón, amante de la noche y el buen vestir. Mis videos te llevarán a un mundo de fantasía.", avatar: "/logo.png", isVerified: true, isTop: true, followersCount: 12300, subscribersCount: 890, postsCount: 45, storiesActive: 3, subscriptionPrice: 4.99 },
  { id: "2", username: "camila.r", name: "Camila R.", city: "Envigado", age: 21, bio: "Dulce por fuera, atrevida por dentro. Me encanta sorprender a mis suscriptores.", avatar: "/logo.png", isVerified: true, isTop: true, followersCount: 9800, subscribersCount: 620, postsCount: 38, storiesActive: 5, subscriptionPrice: 3.99 },
  { id: "3", username: "isabella.g", name: "Isabella G.", city: "Medellín", age: 25, bio: "Modelo profesional y amante del fitness. Mi cuerpo es mi arte y quiero compartirlo contigo.", avatar: "/logo.png", isVerified: true, isTop: false, followersCount: 15100, subscribersCount: 1200, postsCount: 52, storiesActive: 2, subscriptionPrice: 5.99 },
  { id: "4", username: "sofia.l", name: "Sofía L.", city: "Sabaneta", age: 22, bio: "Aventurera y espontánea. Mis sesiones outdoor son las favoritas de mis fans.", avatar: "/logo.png", isVerified: true, isTop: true, followersCount: 8400, subscribersCount: 430, postsCount: 29, storiesActive: 4, subscriptionPrice: 4.99 },
  { id: "5", username: "mariana.p", name: "Mariana P.", city: "Medellín", age: 24, bio: "Adicta a la lencería fina y las sesiones provocadoras. Cada video es una obra de arte.", avatar: "/logo.png", isVerified: false, isTop: false, followersCount: 11700, subscribersCount: 780, postsCount: 41, storiesActive: 1, subscriptionPrice: 3.99 },
  { id: "6", username: "daniela.v", name: "Daniela V.", city: "Bello", age: 20, bio: "La más joven del crew pero la más atrevida. No me pongo límites.", avatar: "/logo.png", isVerified: true, isTop: false, followersCount: 7900, subscribersCount: 340, postsCount: 33, storiesActive: 0, subscriptionPrice: 2.99 },
  { id: "7", username: "luciana.s", name: "Luciana S.", city: "Medellín", age: 26, bio: "Natural y sin filtros. Mi belleza es auténtica y mis videos también.", avatar: "/logo.png", isVerified: true, isTop: true, followersCount: 10200, subscribersCount: 560, postsCount: 27, storiesActive: 6, subscriptionPrice: 5.99 },
  { id: "8", username: "gabriela.t", name: "Gabriela T.", city: "Itagüí", age: 23, bio: "Salsera, rumbera y muy sensual. El ritmo corre por mis venas.", avatar: "/logo.png", isVerified: false, isTop: false, followersCount: 9100, subscribersCount: 410, postsCount: 36, storiesActive: 2, subscriptionPrice: 3.99 },
] as const;

// ═══ STORIES ═══
export const MOCK_STORIES = [
  { id: "s1", creatorId: "1", creatorName: "Valentina M.", creatorUsername: "valentina.m", mediaType: "image" as const, caption: "Buenos días desde Medellín 💋", timeAgo: "2h" },
  { id: "s2", creatorId: "1", creatorName: "Valentina M.", creatorUsername: "valentina.m", mediaType: "video" as const, caption: "Preparándome para la sesión de hoy 🔥", timeAgo: "5h" },
  { id: "s3", creatorId: "2", creatorName: "Camila R.", creatorUsername: "camila.r", mediaType: "image" as const, caption: "Outfit del día ✨", timeAgo: "1h" },
  { id: "s4", creatorId: "2", creatorName: "Camila R.", creatorUsername: "camila.r", mediaType: "image" as const, caption: "Gym time 💪", timeAgo: "3h" },
  { id: "s5", creatorId: "4", creatorName: "Sofía L.", creatorUsername: "sofia.l", mediaType: "video" as const, caption: "Sunset en Guatapé 🌅", timeAgo: "30m" },
  { id: "s6", creatorId: "7", creatorName: "Luciana S.", creatorUsername: "luciana.s", mediaType: "image" as const, caption: "Sin filtros, sin maquillaje 🌿", timeAgo: "4h" },
  { id: "s7", creatorId: "3", creatorName: "Isabella G.", creatorUsername: "isabella.g", mediaType: "video" as const, caption: "Yoga matutino 🧘‍♀️", timeAgo: "6h" },
] as const;

// ═══ POSTS (feed social) ═══
export const MOCK_POSTS = [
  { id: "p1", creatorId: "1", creatorName: "Valentina M.", creatorUsername: "valentina.m", type: "photo" as const, caption: "Nueva sesión de fotos en El Poblado. ¿Les gusta? 😏🔥", isPremium: false, likesCount: 342, commentsCount: 28, timeAgo: "2h" },
  { id: "p2", creatorId: "2", creatorName: "Camila R.", creatorUsername: "camila.r", type: "reel" as const, caption: "Mi nuevo reel de baile... esto se puso caliente 💃🔥", isPremium: false, likesCount: 891, commentsCount: 67, timeAgo: "4h" },
  { id: "p3", creatorId: "1", creatorName: "Valentina M.", creatorUsername: "valentina.m", type: "photo" as const, caption: "Este set exclusivo solo para mis suscriptores premium 👑", isPremium: true, individualPrice: 2.99, likesCount: 156, commentsCount: 12, timeAgo: "6h" },
  { id: "p4", creatorId: "4", creatorName: "Sofía L.", creatorUsername: "sofia.l", type: "reel" as const, caption: "Pool party en finca privada 🏊‍♀️ El video completo en mi premium", isPremium: false, likesCount: 1203, commentsCount: 89, timeAgo: "8h" },
  { id: "p5", creatorId: "3", creatorName: "Isabella G.", creatorUsername: "isabella.g", type: "gallery" as const, caption: "5 fotos que no me dejaron subir a Instagram 😈", isPremium: true, individualPrice: 1.99, likesCount: 445, commentsCount: 34, timeAgo: "12h" },
  { id: "p6", creatorId: "7", creatorName: "Luciana S.", creatorUsername: "luciana.s", type: "photo" as const, caption: "Recién despierta, así tal cual. ¿Les gusto natural? 🌸", isPremium: false, likesCount: 678, commentsCount: 45, timeAgo: "1d" },
  { id: "p7", creatorId: "2", creatorName: "Camila R.", creatorUsername: "camila.r", type: "reel" as const, caption: "Cosplay de tu personaje favorito... pero versión paisa 🎭", isPremium: true, individualPrice: 3.99, likesCount: 234, commentsCount: 19, timeAgo: "1d" },
  { id: "p8", creatorId: "5", creatorName: "Mariana P.", creatorUsername: "mariana.p", type: "photo" as const, caption: "Lencería nueva. ¿Cuál les gusta más? 🖤", isPremium: false, likesCount: 567, commentsCount: 52, timeAgo: "2d" },
] as const;

// ═══ TUBE VIDEOS (profesionales del admin) ═══
export const MOCK_TUBE_VIDEOS = [
  { id: "1", title: "Valentina — Noche en El Poblado", slug: "valentina-noche-poblado", creatorId: "1", creatorName: "Valentina M.", category: "Sensual", categorySlug: "sensual", duration: "12:34", views: "24.5K", isPremium: true, isNew: true, description: "Una noche caliente en el exclusivo barrio El Poblado de Medellín." },
  { id: "2", title: "Camila — Sesión Privada", slug: "camila-sesion-privada", creatorId: "2", creatorName: "Camila R.", category: "Solo", categorySlug: "solo", duration: "18:22", views: "31.2K", isPremium: true, isNew: false, description: "Camila en su sesión más íntima y provocadora." },
  { id: "3", title: "Isabella — Suite Presidencial", slug: "isabella-suite", creatorId: "3", creatorName: "Isabella G.", category: "Lencería", categorySlug: "lenceria", duration: "15:45", views: "19.8K", isPremium: false, isNew: true, description: "Isabella te espera en la suite más lujosa de Medellín." },
  { id: "4", title: "Sofía — Atardecer en Guatapé", slug: "sofia-guatape", creatorId: "4", creatorName: "Sofía L.", category: "Outdoor", categorySlug: "outdoor", duration: "22:10", views: "42.1K", isPremium: true, isNew: false, description: "Sofía aprovecha la luz dorada del atardecer en Guatapé." },
  { id: "5", title: "Mariana — Lencería Fina", slug: "mariana-lenceria", creatorId: "5", creatorName: "Mariana P.", category: "Lencería", categorySlug: "lenceria", duration: "09:55", views: "15.6K", isPremium: true, isNew: true, description: "Mariana modela las piezas más provocadoras de lencería europea." },
  { id: "6", title: "Daniela — Jacuzzi VIP", slug: "daniela-jacuzzi", creatorId: "6", creatorName: "Daniela V.", category: "Sensual", categorySlug: "sensual", duration: "20:30", views: "28.3K", isPremium: false, isNew: false, description: "Daniela disfruta de un jacuzzi privado." },
  { id: "7", title: "Luciana — Despertar", slug: "luciana-despertar", creatorId: "7", creatorName: "Luciana S.", category: "Solo", categorySlug: "solo", duration: "14:18", views: "33.7K", isPremium: true, isNew: true, description: "Luciana recién despierta, natural y sin filtros." },
  { id: "8", title: "Gabriela — Noche de Salsa", slug: "gabriela-salsa", creatorId: "8", creatorName: "Gabriela T.", category: "Latina", categorySlug: "latina", duration: "16:40", views: "21.4K", isPremium: false, isNew: false, description: "Gabriela baila salsa con movimientos que hipnotizan." },
] as const;

export const MOCK_CATEGORIES = [
  { name: "Latina", slug: "latina", emoji: "🔥", count: 120, description: "La esencia caliente de las mujeres latinas." },
  { name: "Solo", slug: "solo", emoji: "💎", count: 85, description: "Sesiones íntimas donde ellas son las protagonistas." },
  { name: "Lencería", slug: "lenceria", emoji: "🖤", count: 64, description: "Las piezas más provocadoras sobre los cuerpos más deseados." },
  { name: "Sensual", slug: "sensual", emoji: "🌹", count: 98, description: "Erotismo elegante que despierta todos los sentidos." },
  { name: "Striptease", slug: "striptease", emoji: "✨", count: 72, description: "El arte de desvestirse con estilo." },
  { name: "Pareja", slug: "pareja", emoji: "💋", count: 43, description: "Química explosiva entre dos cuerpos." },
  { name: "Outdoor", slug: "outdoor", emoji: "🌿", count: 31, description: "La naturaleza colombiana como escenario." },
  { name: "Cosplay", slug: "cosplay", emoji: "🎭", count: 27, description: "Tus fantasías hechas realidad paisa." },
] as const;

// ═══ CREATOR EARNINGS (mock) ═══
export const MOCK_EARNINGS = {
  totalEarnings: 4532.50,
  thisMonth: 1245.80,
  lastMonth: 987.30,
  pendingPayout: 523.40,
  subscriberRevenue: 3200.00,
  contentSalesRevenue: 1332.50,
  history: [
    { month: "Mar 2026", amount: 1245.80, subscribers: 89, sales: 34 },
    { month: "Feb 2026", amount: 987.30, subscribers: 76, sales: 28 },
    { month: "Ene 2026", amount: 1102.40, subscribers: 82, sales: 31 },
    { month: "Dic 2025", amount: 1197.00, subscribers: 91, sales: 37 },
  ],
} as const;

// ═══ TYPES ═══
export type Creator = (typeof MOCK_CREATORS)[number];
export type Story = (typeof MOCK_STORIES)[number];
export type Post = (typeof MOCK_POSTS)[number];
export type TubeVideo = (typeof MOCK_TUBE_VIDEOS)[number];
export type Category = (typeof MOCK_CATEGORIES)[number];
