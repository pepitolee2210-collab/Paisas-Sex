export const MOCK_VIDEOS = [
  { id: "1", title: "Valentina — Noche en El Poblado", slug: "valentina-noche-poblado", model: "Valentina M.", modelId: "1", category: "Sensual", categorySlug: "sensual", duration: "12:34", views: "24.5K", isPremium: true, isNew: true, description: "Una noche caliente en el exclusivo barrio El Poblado de Medellín. Valentina te seduce con su encanto paisa en lencería fina." },
  { id: "2", title: "Camila — Sesión Privada", slug: "camila-sesion-privada", model: "Camila R.", modelId: "2", category: "Solo", categorySlug: "solo", duration: "18:22", views: "31.2K", isPremium: true, isNew: false, description: "Camila en su sesión más íntima y provocadora. Una experiencia que no olvidarás." },
  { id: "3", title: "Isabella — Suite Presidencial", slug: "isabella-suite", model: "Isabella G.", modelId: "3", category: "Lencería", categorySlug: "lenceria", duration: "15:45", views: "19.8K", isPremium: false, isNew: true, description: "Isabella te espera en la suite más lujosa de Medellín con un outfit que quita el aliento." },
  { id: "4", title: "Sofía — Atardecer en Guatapé", slug: "sofia-guatape", model: "Sofía L.", modelId: "4", category: "Outdoor", categorySlug: "outdoor", duration: "22:10", views: "42.1K", isPremium: true, isNew: false, description: "Sofía aprovecha la luz dorada del atardecer en Guatapé para una sesión al aire libre inolvidable." },
  { id: "5", title: "Mariana — Lencería Fina", slug: "mariana-lenceria", model: "Mariana P.", modelId: "5", category: "Lencería", categorySlug: "lenceria", duration: "09:55", views: "15.6K", isPremium: true, isNew: true, description: "Mariana modela las piezas más provocadoras de lencería europea en su apartamento de Laureles." },
  { id: "6", title: "Daniela — Jacuzzi VIP", slug: "daniela-jacuzzi", model: "Daniela V.", modelId: "6", category: "Sensual", categorySlug: "sensual", duration: "20:30", views: "28.3K", isPremium: false, isNew: false, description: "Daniela disfruta de un jacuzzi privado en esta sesión llena de burbujas y provocación." },
  { id: "7", title: "Luciana — Despertar", slug: "luciana-despertar", model: "Luciana S.", modelId: "7", category: "Solo", categorySlug: "solo", duration: "14:18", views: "33.7K", isPremium: true, isNew: true, description: "Luciana recién despierta, natural y sin filtros. La belleza paisa en su estado más puro." },
  { id: "8", title: "Gabriela — Noche de Salsa", slug: "gabriela-salsa", model: "Gabriela T.", modelId: "8", category: "Latina", categorySlug: "latina", duration: "16:40", views: "21.4K", isPremium: false, isNew: false, description: "Gabriela baila salsa con movimientos que hipnotizan. El ritmo colombiano en su máxima expresión." },
  { id: "9", title: "Valentina — Ducha Caliente", slug: "valentina-ducha", model: "Valentina M.", modelId: "1", category: "Solo", categorySlug: "solo", duration: "11:20", views: "38.9K", isPremium: true, isNew: false, description: "Valentina en una ducha de vapor. El agua recorre cada curva de esta diosa paisa." },
  { id: "10", title: "Camila — Cosplay Anime", slug: "camila-cosplay", model: "Camila R.", modelId: "2", category: "Cosplay", categorySlug: "cosplay", duration: "13:55", views: "17.2K", isPremium: true, isNew: true, description: "Camila se transforma en tu personaje anime favorito con un toque paisa irresistible." },
  { id: "11", title: "Isabella — Yoga Sensual", slug: "isabella-yoga", model: "Isabella G.", modelId: "3", category: "Sensual", categorySlug: "sensual", duration: "19:30", views: "26.8K", isPremium: false, isNew: false, description: "Isabella hace yoga en ropa mínima. Flexibilidad y sensualidad en cada postura." },
  { id: "12", title: "Sofía — Pool Party", slug: "sofia-pool", model: "Sofía L.", modelId: "4", category: "Outdoor", categorySlug: "outdoor", duration: "17:15", views: "35.1K", isPremium: true, isNew: true, description: "Sofía disfruta de la piscina privada de una finca en el Oriente antioqueño." },
] as const;

export const MOCK_MODELS = [
  { id: "1", name: "Valentina M.", slug: "valentina-m", city: "Medellín", age: 23, videos: 45, likes: "12.3K", bio: "Paisa de corazón, amante de la noche y el buen vestir. Mis videos te llevarán a un mundo de fantasía y deseo.", isTop: true },
  { id: "2", name: "Camila R.", slug: "camila-r", city: "Envigado", age: 21, videos: 38, likes: "9.8K", bio: "Dulce por fuera, atrevida por dentro. Me encanta sorprender y dejar sin aliento a mis suscriptores.", isTop: true },
  { id: "3", name: "Isabella G.", slug: "isabella-g", city: "Medellín", age: 25, videos: 52, likes: "15.1K", bio: "Modelo profesional y amante del fitness. Mi cuerpo es mi arte y quiero compartirlo contigo.", isTop: false },
  { id: "4", name: "Sofía L.", slug: "sofia-l", city: "Sabaneta", age: 22, videos: 29, likes: "8.4K", bio: "Aventurera y espontánea. Mis sesiones outdoor son las favoritas de mis fans.", isTop: true },
  { id: "5", name: "Mariana P.", slug: "mariana-p", city: "Medellín", age: 24, videos: 41, likes: "11.7K", bio: "Adicta a la lencería fina y las sesiones provocadoras. Cada video es una obra de arte.", isTop: false },
  { id: "6", name: "Daniela V.", slug: "daniela-v", city: "Bello", age: 20, videos: 33, likes: "7.9K", bio: "La más joven del crew pero la más atrevida. No me pongo límites.", isTop: false },
  { id: "7", name: "Luciana S.", slug: "luciana-s", city: "Medellín", age: 26, videos: 27, likes: "10.2K", bio: "Natural y sin filtros. Mi belleza es auténtica y mis videos también.", isTop: true },
  { id: "8", name: "Gabriela T.", slug: "gabriela-t", city: "Itagüí", age: 23, videos: 36, likes: "9.1K", bio: "Salsera, rumbera y muy sensual. El ritmo corre por mis venas.", isTop: false },
] as const;

export const MOCK_CATEGORIES = [
  { name: "Latina", slug: "latina", emoji: "🔥", count: 120, description: "La esencia caliente de las mujeres latinas en todo su esplendor." },
  { name: "Solo", slug: "solo", emoji: "💎", count: 85, description: "Sesiones íntimas donde ellas son las protagonistas absolutas." },
  { name: "Lencería", slug: "lenceria", emoji: "🖤", count: 64, description: "Las piezas más provocadoras sobre los cuerpos más deseados." },
  { name: "Sensual", slug: "sensual", emoji: "🌹", count: 98, description: "Erotismo elegante que despierta todos los sentidos." },
  { name: "Striptease", slug: "striptease", emoji: "✨", count: 72, description: "El arte de desvestirse con estilo y provocación." },
  { name: "Pareja", slug: "pareja", emoji: "💋", count: 43, description: "Química explosiva entre dos cuerpos que se desean." },
  { name: "Outdoor", slug: "outdoor", emoji: "🌿", count: 31, description: "La naturaleza colombiana como escenario de la sensualidad." },
  { name: "Cosplay", slug: "cosplay", emoji: "🎭", count: 27, description: "Tus fantasías de anime y ficción hechas realidad paisa." },
] as const;

export type Video = (typeof MOCK_VIDEOS)[number];
export type Model = (typeof MOCK_MODELS)[number];
export type Category = (typeof MOCK_CATEGORIES)[number];
