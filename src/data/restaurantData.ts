import { MenuItem, Review, SpecialOffer } from '../types';

import heroImg from '../assets/images/hero_pizza_feteer_1791395325788.jpg';
import pizzaImg from '../assets/images/pizza_showcase_1791395339445.jpg';
import feteerSavoryImg from '../assets/images/feteer_savory_1791395352806.jpg';
import feteerSweetImg from '../assets/images/feteer_sweet_1791395364787.jpg';

export const RESTAURANT_INFO = {
  name: 'بيتزا فطائر السلام',
  tagline: 'بيتزا وفطائر طازة بطعم تحبه',
  description: 'أشهى أنواع البيتزا الشرقية والإيطالية والفطائر المشلتت والحاتي والمحشية بالسمن البلدي. نخبز طلبك طازجاً في قلب بهتيم بشبرا الخيمة بخامات بلدية ونظافة فائقة على مدار 24 ساعة.',
  phone: '01001539895',
  phoneFormatted: '0100 153 9895',
  whatsappPhone: '201001539895',
  address: 'الهجان، بهتيم، قسم ثان شبرا الخيمة، محافظة القليوبية',
  mapsQuery: 'الهجان، بهتيم، شبرا الخيمة، القليوبية',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13803.968603612574!2d31.2825!3d30.1345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815a5f187a531%3A0x6b6df5c68f23439b!2z2KjZh9iq2YrZhdiMINmC2LPZhSDYq9in2YYg2LTYqNix2Kcg2KfZhNiu2YrZhdip2Iwg2YLYhNmK2YjYqNmK2Kk!5e0!3m2!1sar!2seg!4v1710000000000!5m2!1sar!2seg',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=الهجان+بهتيم+شبرا+الخيمة',
  rating: 4.4,
  reviewCount: 29,
  openingHours: 'مفتوح 24 ساعة يومياً (طوال الأسبوع)',
  services: [
    { title: 'الجلوس داخل المكان', icon: 'Armchair' },
    { title: 'طعام سفري', icon: 'ShoppingBag' },
    { title: 'خدمة التوصيل السريع', icon: 'Bike' },
    { title: 'مفتوح 24 ساعة', icon: 'Clock' },
  ],
};

export const MENU_CATEGORIES = [
  { id: 'all', name: 'الكل' },
  { id: 'pizza', name: 'البيتزا' },
  { id: 'feteer', name: 'الفطائر' },
  { id: 'sandwiches', name: 'الساندوتشات' },
  { id: 'offers', name: 'العروض' },
  { id: 'sides', name: 'الإضافات' },
  { id: 'drinks', name: 'المشروبات' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // البيتزا
  {
    id: 'pizza-suguk',
    name: 'بيتزا سجق إسكندراني بلدي',
    category: 'pizza',
    description: 'سجق بلدي متبل، فلفل ألوان، زيتون أسود، صلصة طماطم مسبكة، وجبنة موتزاريلا سايحة',
    price: 110,
    image: pizzaImg,
    sizes: [
      { name: 'وسط', price: 95 },
      { name: 'كبير', price: 110 },
      { name: 'عائلي', price: 140 },
    ],
    isPopular: true,
    badge: 'الأكثر طلباً',
  },
  {
    id: 'pizza-mixed-cheese',
    name: 'بيتزا مشكل جبن فاخرة',
    category: 'pizza',
    description: 'مزيج موتزاريلا طبيعي، شيدر نيوزيلندي، وجبنة رومي قديمة مع صلصة الأعشاب الخاصة',
    price: 105,
    image: pizzaImg,
    sizes: [
      { name: 'وسط', price: 90 },
      { name: 'كبير', price: 105 },
      { name: 'عائلي', price: 135 },
    ],
    isPopular: true,
  },
  {
    id: 'pizza-pastrami-kiri',
    name: 'بيتزا بسطرمة كيري',
    category: 'pizza',
    description: 'شرائح بسطرمة بلدي مع مكعبات جبنة كيري غنية وموتزاريلا وفلفل رومي طازج',
    price: 125,
    image: pizzaImg,
    sizes: [
      { name: 'وسط', price: 110 },
      { name: 'كبير', price: 125 },
      { name: 'عائلي', price: 160 },
    ],
  },
  {
    id: 'pizza-chicken-bbq',
    name: 'بيتزا دجاج باربكيو',
    category: 'pizza',
    description: 'قطع صدور دجاج مشوية متبلة، صوص باربكيو مدخن، بصل، فلفل، وموتزاريلا غنية',
    price: 115,
    image: pizzaImg,
    sizes: [
      { name: 'وسط', price: 100 },
      { name: 'كبير', price: 115 },
      { name: 'عائلي', price: 145 },
    ],
  },
  {
    id: 'pizza-margherita',
    name: 'بيتزا مارجريتا كلاسيك',
    category: 'pizza',
    description: 'صلصة طماطم بيتزا غنية بالأوريجانو وزيت الزيتون ومغطاة بجبنة موتزاريلا طبيعية مضاعفة',
    price: 85,
    image: pizzaImg,
    sizes: [
      { name: 'وسط', price: 75 },
      { name: 'كبير', price: 85 },
      { name: 'عائلي', price: 110 },
    ],
  },
  {
    id: 'pizza-tuna',
    name: 'بيتزا تونة بالزيتون',
    category: 'pizza',
    description: 'تونة قطع فاخرة، بصل مكرمل، فلفل حار أو بارد حسب الرغبة، وزيتون مع موتزاريلا',
    price: 110,
    image: pizzaImg,
    sizes: [
      { name: 'وسط', price: 95 },
      { name: 'كبير', price: 110 },
      { name: 'عائلي', price: 140 },
    ],
  },

  // الفطائر
  {
    id: 'feteer-meshaltet',
    name: 'فطيرة مشلتت بالسمن البلدي',
    category: 'feteer',
    description: 'فطير فلاحي أصيل مورق ومخبوز بالسمن البلدي الفاخر، مقرمش من الخارج وطري ودايب من الداخل',
    price: 90,
    image: feteerSweetImg,
    sizes: [
      { name: 'وسط', price: 75 },
      { name: 'كبير', price: 90 },
      { name: 'عائلي سوبر', price: 120 },
    ],
    isPopular: true,
    badge: 'طعم بلدي أصيل',
  },
  {
    id: 'feteer-suguk-kiri',
    name: 'فطيرة سجق بلدي وجبنة كيري (حادق)',
    category: 'feteer',
    description: 'حشوة سجق إسكندراني محمرة مع قطع جبنة كيري كريمة، موتزاريلا، وطماطم وفلفل رومي',
    price: 120,
    image: feteerSavoryImg,
    sizes: [
      { name: 'وسط', price: 100 },
      { name: 'كبير', price: 120 },
      { name: 'عائلي', price: 155 },
    ],
    isPopular: true,
  },
  {
    id: 'feteer-pastrami-cheese',
    name: 'فطيرة بسطرمة ومكس جبن (حادق)',
    category: 'feteer',
    description: 'طبقات عجينة مورقة محشوة ببسطرمة بلدي مع جبن رومي وموتزاريلا وطماطم وزيتون',
    price: 130,
    image: feteerSavoryImg,
    sizes: [
      { name: 'وسط', price: 115 },
      { name: 'كبير', price: 130 },
      { name: 'عائلي', price: 165 },
    ],
  },
  {
    id: 'feteer-sweet-custard',
    name: 'فطيرة حلو كاسترد وسكر ولبن',
    category: 'feteer',
    description: 'فطيرة ساخنة محشوة بكاسترد غني ومسقية بالحليب الدافئ المحلى ومرشوشة بسكر بودرة ناعم',
    price: 80,
    image: feteerSweetImg,
    sizes: [
      { name: 'وسط', price: 65 },
      { name: 'كبير', price: 80 },
      { name: 'عائلي', price: 105 },
    ],
    isPopular: true,
  },
  {
    id: 'feteer-sweet-chocolate',
    name: 'فطيرة شوكولاتة نوتيلا ومكسرات',
    category: 'feteer',
    description: 'فطيرة حلوة مورقة غارقة بشوكولاتة بندق غنية ورشة مكسرات مقرمشة',
    price: 105,
    image: feteerSweetImg,
    sizes: [
      { name: 'وسط', price: 90 },
      { name: 'كبير', price: 105 },
      { name: 'عائلي', price: 135 },
    ],
  },

  // الساندوتشات
  {
    id: 'hawawshi-alex',
    name: 'حواوشي إسكندراني مخصوص في العجين',
    category: 'sandwiches',
    description: 'لحمة مفرومة بلدي متبلة بالبصل والبهارات الخاصة مخبوزة داخل عجين بيتزا طازج',
    price: 55,
    image: feteerSavoryImg,
    isPopular: true,
    badge: 'طازة من الفرن',
  },
  {
    id: 'hawawshi-cheese-alex',
    name: 'حواوشي إسكندراني بالموتزاريلا وشيدر',
    category: 'sandwiches',
    description: 'عجين طازج محشو لحم بلدي متبل مع طبقة سخية من الجبن السايح والفلفل',
    price: 65,
    image: feteerSavoryImg,
  },
  {
    id: 'sandwich-suguk-roll',
    name: 'ساندوتش رول سجق إسكندراني',
    category: 'sandwiches',
    description: 'رول عجين بيتزا مقرمش محشو سجق متبل وصوص طحينة وموتزاريلا ومخلل خيار',
    price: 60,
    image: pizzaImg,
  },

  // العروض
  {
    id: 'offer-daily-combo',
    name: '🔥 عرض اليوم: بيتزا وسط + بطاطس + كانز',
    category: 'offers',
    description: 'بيتزا وسط من اختيارك (سجق أو فراخ أو مشكل جبن) + باكت بطاطس فارم فريتس مقرمشة + كانز بيبسي أو كولا بارد',
    price: 135,
    originalPrice: 170,
    image: heroImg,
    isPopular: true,
    badge: 'خصم 20%',
  },
  {
    id: 'offer-family-gathering',
    name: '💥 عرض اللمة العائلي: 2 بيتزا كبيرة + بطاطس + لتر كولا',
    category: 'offers',
    description: 'بيتزا كبيرة سجق بلدي + بيتزا كبيرة مشكل جبن + طبق بطاطس عائلي + زجاجة لتر كولا',
    price: 260,
    originalPrice: 320,
    image: heroImg,
    badge: 'توفير 60 ج.م',
  },

  // الإضافات
  {
    id: 'side-fries',
    name: 'باكت بطاطس فارم فريتس مقرمشة',
    category: 'sides',
    description: 'بطاطس ذهبية مقلية طازجة ببهارات البطاطس الخاصة',
    price: 30,
    image: pizzaImg,
  },
  {
    id: 'side-extra-cheese',
    name: 'علبة صوص جبنة شيدر سايحة',
    category: 'sides',
    description: 'صوص شيدر دافئ كريمي غني للتغميس',
    price: 20,
    image: pizzaImg,
  },
  {
    id: 'side-honey-cream',
    name: 'طبق عسل أبيض وقشطة بلدي',
    category: 'sides',
    description: 'عسل نحل نقي مع قشطة بلدي طازجة للفطير المشلتت',
    price: 35,
    image: feteerSweetImg,
  },
  {
    id: 'side-pickles',
    name: 'علبة مخلل بلدي مشكل',
    category: 'sides',
    description: 'مخلل بيتي لفت وخيار وجزر متبل ومقرمش',
    price: 10,
    image: feteerSavoryImg,
  },

  // المشروبات
  {
    id: 'drink-cola-can',
    name: 'كانز كوكاكولا أو بيبسي 330 مل',
    category: 'drinks',
    description: 'مشروب غازي مثلج ومنعش',
    price: 15,
    image: heroImg,
  },
  {
    id: 'drink-cola-liter',
    name: 'زجاجة لتر كوكاكولا / بيبسي عائلي',
    category: 'drinks',
    description: 'حجم عائلي مثلج للمشاركة',
    price: 30,
    image: heroImg,
  },
  {
    id: 'drink-water',
    name: 'زجاجة مياه معدنية نقية',
    category: 'drinks',
    description: 'مياه طبيعية نقية باردة 600 مل',
    price: 8,
    image: heroImg,
  },
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: '🔥 عرض اليوم المميز',
    tagline: 'وجبة متكاملة توفر عليك',
    description: 'بيتزا وسط من اختيارك (سجق بلدي أو دجاج باربكيو أو مكس جبن) + باكيت بطاطس فارم فريتس مقرمش + مشروب كانز مثلج.',
    price: 135,
    originalPrice: 170,
    items: ['بيتزا وسط شهية', 'باكيت بطاطس مقلية', 'كانز مثلج منعش'],
    image: pizzaImg,
    expiresIn: 'العرض متاح اليوم حتى منتصف الليل',
  },
  {
    id: 'offer-2',
    title: '💥 عرض لمة الصحاب والعيلة',
    tagline: 'أكبر توفير لأحلى ليلة',
    description: '2 بيتزا كبيرة (واحدة سجق إسكندراني + واحدة مشكل جبن) + باكيت بطاطس حجم عائلي + زجاجة لتر كولا ساقعة.',
    price: 260,
    originalPrice: 320,
    items: ['2 بيتزا كبيرة فاخرة', 'باكيت بطاطس عائلي', 'زجاجة لتر كولا'],
    image: heroImg,
    expiresIn: 'ساري طوال الأسبوع',
  },
  {
    id: 'offer-3',
    title: '🍯 عرض الحلو البلدي',
    tagline: 'أصالة الفطير الفلاحي على أصوله',
    description: 'فطيرة مشلتت سمن بلدي كبيرة + طبق عسل أبيض وقشطة بلدي طازجة + فطيرة حلوة صغيرة سكر ولبن.',
    price: 145,
    originalPrice: 180,
    items: ['فطيرة مشلتت بالسمن البلدي', 'طبق عسل وقشطة', 'فطيرة حلوة سكر ولبن'],
    image: feteerSweetImg,
    expiresIn: 'طلب مفضل لعشاق الفطير',
  },
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'أحمد عبد الله',
    rating: 5,
    comment: 'خدمة ممتازة أتمنى لهم مزيد من التقدم. البيتزا جات سخنة جداً والجبنة بتمط وطعم السجق بلدي فعلاً مش مجمد.',
    date: 'منذ أسبوعين',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'محمود حسني',
    rating: 4.5,
    comment: 'كويس وسعره مناسب جداً مقارنة بالجودة في بهتيم، والفطير المشلتت معمول بسمنة نضيفة وخفيف على المعدة.',
    date: 'منذ شهر',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'أم ياسين - شبرا الخيمة',
    rating: 5,
    comment: 'أحلى فطيرة سجق وكيري كلتها في حياتي، وميزتهم إنهم شغالين 24 ساعة لما بنجوع بالليل بنطلب وبيوصل في نص ساعة.',
    date: 'منذ شهرين',
    verified: true,
  },
];

export const WHY_US_FEATURES = [
  {
    id: 'feat-1',
    title: 'مكونات طازة يومياً',
    description: 'نستخدم خضروات طازجة يومياً، أجبان طبيعية، ولحوم وسجق بلدي بدون مجمدات.',
    icon: 'Sparkles',
  },
  {
    id: 'feat-2',
    title: 'تحضير حسب الطلب',
    description: 'عجينة بيتزا وفطير تُفرد وتُخبز فور طلبك في أفران حجرية حرارية ليأتيك الأكل سخن ومقرمش.',
    icon: 'Flame',
  },
  {
    id: 'feat-3',
    title: 'أسعار مناسبة وأعلى قيمة',
    description: 'حشوات وفيرة وجودة عالية تناسب جميع أهالي بهتيم وشبرا الخيمة دون مبالغة في الأسعار.',
    icon: 'BadgePercent',
  },
  {
    id: 'feat-4',
    title: 'خدمة توصيل سريعة',
    description: 'طيارين توصيل يغطون منطقة بهتيم، الهجان، وشبرا الخيمة لحفظ حرارة وطزاجة الأكل.',
    icon: 'Bike',
  },
  {
    id: 'feat-5',
    title: 'طعام سفري وتجهيز فوري',
    description: 'اطلب مسبقاً بالتليفون أو مر علينا واستلم طلبك مغلف بأعلى معايير النظافة والسرعة.',
    icon: 'ShoppingBag',
  },
  {
    id: 'feat-6',
    title: 'صالة جلوس داخل المطعم',
    description: 'مكان مجهز ونظيف لاستقبالك أنت وأسرتك أو أصحابك لتناول وجبتك طازجة من الفرن للترابيزة.',
    icon: 'Armchair',
  },
];
