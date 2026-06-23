import React, { useState, useEffect } from 'react';
import Chatbot from './Chatbot';

const fleetTranslations = {
  en: {
    heroTitle: 'Your private jet fleet.',
    bombardierHeading: 'Bombardier',
    bombardierDesc: 'Bombardier aircraft fly up to 7,700nm with a flight time of up to 17 hours non-stop, offering seamless and time-efficient travel. With purpose-built cabin space, these aircraft are designed for ultimate comfort and productivity in-flight. Bombardier manufactures two leading aircraft families – Challenger and Global, both come with facilities for fine dining on board. Bombardier aircraft accommodate up to 14 passengers seated or 8 sleeping.',
    gulfstreamHeading: 'Gulfstream',
    gulfstreamDesc: 'Aircraft manufactured by Gulfstream can fly up to 4,300nm with a flight time of around 9 hours. The iconic Gulfstream business jets allow passengers to stay connected in-flight whether for business or relaxation, and arrive at destination feeling refreshed due to ultra-low cabin altitude. Aircraft accommodate up to 16 passengers seated or 6 sleeping.',
    embraerHeading: 'Embraer',
    embraerDesc: 'Aircraft manufactured by Embraer can fly up to 4,600nm with a flight time of around 8 hours. These Embraer business jets offer outstanding versatility and wide cabin space for up to 18 passengers seated or 7 sleeping. Aircraft include the Lineage 1000E, Legacy 650/650E and Praetor 600.',
    cessnaHeading: 'Cessna',
    cessnaDesc: 'This midsize aircraft combines the stellar runway performance of a light jet with the sought-after comfort of a stand-up cabin, featuring leather club seats, six of which recline.',
    dassaultHeading: 'Dassault',
    dassaultDesc: 'Dassault aircraft can fly up to 5,950nm with a flight time of around 11 hours. Currently offered is the Falcon 7X, an aerodynamic and uniquely elegant aircraft with unrivaled performance, particularly on short runway airports. The aircraft features an advanced cabin pressure system with three ample separate living spaces that accommodates up to 12 passengers seated.',
    enquireHeading: 'Enquire for a membership',
    formTitle: 'Contact Us',
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone Number',
    email: 'Email Address',
    flyPrivate: 'How often do you fly private?',
    flyPrivateOptions: ['Less than once a year', '1-2 times per year', '3-5 times per year', '6-10 times per year', 'More than 10 times per year'],
    currentSolution: 'What is your current flying solution?',
    hearAbout: 'How did you hear about SivitaJet?',
    hearAboutOptions: ['Search Engine', 'Social Media', 'Referral', 'Advertisement', 'Event', 'Other'],
    message: 'Message',
    submit: 'Submit',
    marketingText: 'I would like to receive marketing communications from SivitaJet by email, post or text message.',
    privacyText: 'Your personal data will be processed in accordance with our ',
    privacyLink: 'Privacy Notice',
    copyright: '© 2025 Airline. All rights reserved.',
  },
  es: {
    heroTitle: 'Tu flota de jets privados.',
    bombardierHeading: 'Bombardier',
    bombardierDesc: 'Los aviones Bombardier vuelan hasta 7,700nm con un tiempo de vuelo de hasta 17 horas sin escalas, ofreciendo viajes fluidos y eficientes. Con un espacio de cabina diseñado a medida, estas aeronaves están diseñadas para la máxima comodidad y productividad durante el vuelo. Bombardier fabrica dos familias líderes de aeronaves: Challenger y Global, ambas cuentan con instalaciones para cena fina a bordo. Los aviones Bombardier acomodan hasta 14 pasajeros sentados u 8 durmiendo.',
    gulfstreamHeading: 'Gulfstream',
    gulfstreamDesc: 'Las aeronaves fabricadas por Gulfstream pueden volar hasta 4,300nm con un tiempo de vuelo de aproximadamente 9 horas. Los icónicos jets ejecutivos Gulfstream permiten a los pasajeros mantenerse conectados durante el vuelo, ya sea por negocios o por ocio, y llegar a su destino sintiéndose renovados gracias a la altitud ultrabaja de la cabina. Las aeronaves acomodan hasta 16 pasajeros sentados o 6 durmiendo.',
    embraerHeading: 'Embraer',
    embraerDesc: 'Las aeronaves fabricadas por Embraer pueden volar hasta 4,600nm con un tiempo de vuelo de alrededor de 8 horas. Estos jets ejecutivos Embraer ofrecen una versatilidad excepcional y un amplio espacio de cabina para hasta 18 pasajeros sentados o 7 durmiendo. Las aeronaves incluyen Lineage 1000E, Legacy 650/650E y Praetor 600.',
    cessnaHeading: 'Cessna',
    cessnaDesc: 'Esta aeronave de tamaño mediano combina el excelente rendimiento en pista de un jet ligero con la codiciada comodidad de una cabina de pie, con asientos de cuero tipo club, seis de los cuales se reclinan.',
    dassaultHeading: 'Dassault',
    dassaultDesc: 'Los aviones Dassault pueden volar hasta 5,950nm con un tiempo de vuelo de alrededor de 11 horas. Actualmente se ofrece el Falcon 7X, una aeronave aerodinámica y elegantemente única con un rendimiento incomparable, particularmente en aeropuertos de pista corta. La aeronave cuenta con un sistema avanzado de presión de cabina con tres amplios espacios habitables separados que acomodan hasta 12 pasajeros sentados.',
    enquireHeading: 'Consulte una membresía',
    formTitle: 'Contáctenos',
    firstName: 'Nombre',
    lastName: 'Apellido',
    phone: 'Número de teléfono',
    email: 'Correo electrónico',
    flyPrivate: '¿Con qué frecuencia vuela en privado?',
    flyPrivateOptions: ['Menos de una vez al año', '1-2 veces al año', '3-5 veces al año', '6-10 veces al año', 'Más de 10 veces al año'],
    currentSolution: '¿Cuál es su solución de vuelo actual?',
    hearAbout: '¿Cómo se enteró de SivitaJet?',
    hearAboutOptions: ['Motor de búsqueda', 'Redes sociales', 'Recomendación', 'Publicidad', 'Evento', 'Otro'],
    message: 'Mensaje',
    submit: 'Enviar',
    marketingText: 'Me gustaría recibir comunicaciones de marketing de SivitaJet por correo electrónico, correo postal o mensaje de texto.',
    privacyText: 'Sus datos personales serán tratados de acuerdo con nuestro ',
    privacyLink: 'Aviso de Privacidad',
    copyright: '© 2025 Aerolínea. Todos los derechos reservados.',
  },
  ja: {
    heroTitle: 'あなたのプライベートジェット機隊。',
    bombardierHeading: 'ボンバルディア',
    bombardierDesc: 'ボンバルディア機は最大7,700nm、最大17時間のノンストップ飛行が可能で、シームレスで時間効率の良い旅行を提供します。目的に合わせて設計されたキャビンスペースにより、これらの航空機は機内での究極の快適さと生産性のために設計されています。ボンバルディアは、チャレンジャーとグローバルの2つの主要な航空機ファミリーを製造しており、どちらも機内でのファインダイニング設備を備えています。ボンバルディア機は着席で最大14名、就寝で最大8名まで収容できます。',
    gulfstreamHeading: 'ガルフストリーム',
    gulfstreamDesc: 'ガルフストリーム製の航空機は最大4,300nm、約9時間の飛行が可能です。象徴的なガルフストリームのビジネスジェットは、ビジネスやリラクゼーションのために機内で接続を維持し、超低キャビン高度によりリフレッシュした状態で目的地に到着できます。航空機は着席で最大16名、就寝で最大6名まで収容できます。',
    embraerHeading: 'エンブラエル',
    embraerDesc: 'エンブラエル製の航空機は最大4,600nm、約8時間の飛行が可能です。これらのエンブラエルのビジネスジェットは、卓越した versatility と広いキャビンスペースを提供し、着席で最大18名、就寝で最大7名まで収容できます。航空機には、リネージュ1000E、レガシー650/650E、プレーター600が含まれます。',
    cessnaHeading: 'セスナ',
    cessnaDesc: 'この中型機は、軽ジェットの優れた滑走路性能と、立ち上がりキャビンの人気の快適さを兼ね備えており、レザーのクラブシート（うち6席はリクライニング）を備えています。',
    dassaultHeading: 'ダッソー',
    dassaultDesc: 'ダッソー機は最大5,950nm、約11時間の飛行が可能です。現在提供されているのはファルコン7Xで、空力性能に優れ、特に短滑走路の空港で比類のない性能を発揮する独特のエレガントな航空機です。この航空機は、3つの広い独立した居住スペースを備えた高度なキャビン加圧システムを特徴としており、着席で最大12名まで収容できます。',
    enquireHeading: 'メンバーシップのお問い合わせ',
    formTitle: 'お問い合わせ',
    firstName: '名',
    lastName: '姓',
    phone: '電話番号',
    email: 'メールアドレス',
    flyPrivate: 'プライベートジェットの利用頻度は？',
    flyPrivateOptions: ['年に1回未満', '年に1-2回', '年に3-5回', '年に6-10回', '年に10回以上'],
    currentSolution: '現在のフライトソリューションは？',
    hearAbout: 'SivitaJetをどのように知りましたか？',
    hearAboutOptions: ['検索エンジン', 'ソーシャルメディア', '紹介', '広告', 'イベント', 'その他'],
    message: 'メッセージ',
    submit: '送信',
    marketingText: 'SivitaJetからのマーケティングコミュニケーションをメール、郵便、テキストメッセージで受け取りたいです。',
    privacyText: 'お客様の個人データは、当社の ',
    privacyLink: 'プライバシー通知',
    copyright: '© 2025 航空会社. 無断転載を禁じます。',
  },
  ar: {
    heroTitle: 'أسطول طائرتك الخاصة.',
    bombardierHeading: 'بومباردييه',
    bombardierDesc: 'يمكن لطائرات بومباردييه الطيران لمسافة تصل إلى 7,700nm مع وقت طيران يصل إلى 17 ساعة بدون توقف، مما يوفر سفرًا سلسًا وموفرًا للوقت. مع مساحة كابينة مصممة خصيصًا، تم تصميم هذه الطائرات لتحقيق أقصى درجات الراحة والإنتاجية أثناء الطيران. تقوم بومباردييه بتصنيع عائلتين رائدتين من الطائرات – تشالنجر وجلوبال، وكلاهما يأتي مع مرافق لتناول الطعام الفاخر على متن الطائرة. تستوعب طائرات بومباردييه ما يصل إلى 14 راكبًا جالسين أو 8 نائمين.',
    gulfstreamHeading: 'جلف ستريم',
    gulfstreamDesc: 'يمكن للطائرات المصنعة من قبل جلف ستريم الطيران لمسافة تصل إلى 4,300nm مع وقت طيران يبلغ حوالي 9 ساعات. تسمح طائرات رجال الأعمال الأيقونية جلف ستريم للركاب بالبقاء على اتصال أثناء الطيران سواء للعمل أو الاسترخاء، والوصول إلى الوجهة وهم يشعرون بالانتعاش بسبب انخفاض ارتفاع المقصورة. تستوعب الطائرات ما يصل إلى 16 راكبًا جالسين أو 6 نائمين.',
    embraerHeading: 'إمبراير',
    embraerDesc: 'يمكن للطائرات المصنعة من قبل إمبراير الطيران لمسافة تصل إلى 4,600nm مع وقت طيران يبلغ حوالي 8 ساعات. توفر طائرات رجال الأعمال إمبراير هذه تنوعًا استثنائيًا ومساحة واسعة للمقصورة تتسع لما يصل إلى 18 راكبًا جالسين أو 7 نائمين. تشمل الطائرات Lineage 1000E و Legacy 650/650E و Praetor 600.',
    cessnaHeading: 'سيسنا',
    cessnaDesc: 'تجمع هذه الطائرة متوسطة الحجم بين أداء المدرج النجمي للطائرة الخفيفة والراحة المطلوبة لمقصورة الوقوف، وتتميز بمقاعد جلدية على شكل نادي، ستة منها قابلة للإمالة.',
    dassaultHeading: 'داسو',
    dassaultDesc: 'يمكن لطائرات داسو الطيران لمسافة تصل إلى 5,950nm مع وقت طيران يبلغ حوالي 11 ساعة. الطائرة المعروضة حاليًا هي فالكون 7X، وهي طائرة ديناميكية هوائية وأنيقة بشكل فريد مع أداء لا يضاهى، خاصة في مطارات المدارج القصيرة. تتميز الطائرة بنظام ضغط متقدم للمقصورة مع ثلاث مساحات معيشة منفصلة واسعة تتسع لما يصل إلى 12 راكبًا جالسين.',
    enquireHeading: 'استفسر عن العضوية',
    formTitle: 'اتصل بنا',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    phone: 'رقم الهاتف',
    email: 'البريد الإلكتروني',
    flyPrivate: 'كم مرة تسافر بطائرة خاصة؟',
    flyPrivateOptions: ['أقل من مرة في السنة', '1-2 مرة في السنة', '3-5 مرات في السنة', '6-10 مرات في السنة', 'أكثر من 10 مرات في السنة'],
    currentSolution: 'ما هو حل الطيران الحالي الخاص بك؟',
    hearAbout: 'كيف سمعت عن SivitaJet؟',
    hearAboutOptions: ['محرك بحث', 'وسائل التواصل الاجتماعي', 'إحالة', 'إعلان', 'حدث', 'أخرى'],
    message: 'رسالة',
    submit: 'إرسال',
    marketingText: 'أرغب في تلقي اتصالات تسويقية من SivitaJet عبر البريد الإلكتروني أو البريد العادي أو الرسائل النصية.',
    privacyText: 'ستتم معالجة بياناتك الشخصية وفقًا لـ ',
    privacyLink: 'إشعار الخصوصية',
    copyright: '© 2025 الخطوط الجوية. جميع الحقوق محفوظة.',
  },
  fr: {
    heroTitle: 'Votre flotte de jets privés.',
    bombardierHeading: 'Bombardier',
    bombardierDesc: 'Les avions Bombardier peuvent voler jusqu’à 7 700 nm avec un temps de vol allant jusqu’à 17 heures sans escale, offrant des voyages fluides et efficaces. Grâce à un espace de cabine spécialement conçu, ces avions sont conçus pour un confort et une productivité ultimes en vol. Bombardier fabrique deux familles d’avions de premier plan – Challenger et Global, toutes deux dotées d’installations pour un dîner gastronomique à bord. Les avions Bombardier peuvent accueillir jusqu’à 14 passagers assis ou 8 personnes dormant.',
    gulfstreamHeading: 'Gulfstream',
    gulfstreamDesc: 'Les avions fabriqués par Gulfstream peuvent voler jusqu’à 4 300 nm avec un temps de vol d’environ 9 heures. Les emblématiques jets d’affaires Gulfstream permettent aux passagers de rester connectés en vol, que ce soit pour le travail ou pour se détendre, et d’arriver à destination en pleine forme grâce à l’altitude ultra-basse de la cabine. Les avions peuvent accueillir jusqu’à 16 passagers assis ou 6 personnes dormant.',
    embraerHeading: 'Embraer',
    embraerDesc: 'Les avions fabriqués par Embraer peuvent voler jusqu’à 4 600 nm avec un temps de vol d’environ 8 heures. Ces jets d’affaires Embraer offrent une polyvalence exceptionnelle et un large espace de cabine pouvant accueillir jusqu’à 18 passagers assis ou 7 personnes dormant. Les avions comprennent les Lineage 1000E, Legacy 650/650E et Praetor 600.',
    cessnaHeading: 'Cessna',
    cessnaDesc: 'Cet avion de taille moyenne allie les performances de piste exceptionnelles d’un jet léger au confort recherché d’une cabine où l’on peut se tenir debout, avec des sièges en cuir de type club, dont six sont inclinables.',
    dassaultHeading: 'Dassault',
    dassaultDesc: 'Les avions Dassault peuvent voler jusqu’à 5 950 nm avec un temps de vol d’environ 11 heures. Actuellement proposé, le Falcon 7X est un avion aérodynamique et d’une élégance unique aux performances inégalées, en particulier sur les aéroports à piste courte. L’avion dispose d’un système de pressurisation de cabine avancé avec trois espaces de vie séparés et amples pouvant accueillir jusqu’à 12 passagers assis.',
    enquireHeading: 'Renseignez-vous sur l’adhésion',
    formTitle: 'Contactez-nous',
    firstName: 'Prénom',
    lastName: 'Nom',
    phone: 'Numéro de téléphone',
    email: 'Adresse e-mail',
    flyPrivate: 'À quelle fréquence volez-vous en privé ?',
    flyPrivateOptions: ['Moins d’une fois par an', '1-2 fois par an', '3-5 fois par an', '6-10 fois par an', 'Plus de 10 fois par an'],
    currentSolution: 'Quelle est votre solution de vol actuelle ?',
    hearAbout: 'Comment avez-vous entendu parler de SivitaJet ?',
    hearAboutOptions: ['Moteur de recherche', 'Médias sociaux', 'Recommandation', 'Publicité', 'Événement', 'Autre'],
    message: 'Message',
    submit: 'Envoyer',
    marketingText: 'Je souhaite recevoir des communications marketing de SivitaJet par e-mail, courrier ou SMS.',
    privacyText: 'Vos données personnelles seront traitées conformément à notre ',
    privacyLink: 'Avis de confidentialité',
    copyright: '© 2025 Compagnie aérienne. Tous droits réservés.',
  },
  pt: {
    heroTitle: 'Sua frota de jatos particulares.',
    bombardierHeading: 'Bombardier',
    bombardierDesc: 'As aeronaves Bombardier voam até 7.700nm com um tempo de voo de até 17 horas sem escalas, oferecendo viagens perfeitas e eficientes. Com espaço de cabine projetado especificamente, essas aeronaves são projetadas para máximo conforto e produtividade durante o voo. A Bombardier fabrica duas famílias líderes de aeronaves – Challenger e Global, ambas com instalações para jantar fino a bordo. As aeronaves Bombardier acomodam até 14 passageiros sentados ou 8 dormindo.',
    gulfstreamHeading: 'Gulfstream',
    gulfstreamDesc: 'As aeronaves fabricadas pela Gulfstream podem voar até 4.300nm com um tempo de voo de cerca de 9 horas. Os icônicos jatos executivos Gulfstream permitem que os passageiros permaneçam conectados durante o voo, seja para negócios ou lazer, e cheguem ao destino revigorados devido à altitude ultrabaixa da cabine. As aeronaves acomodam até 16 passageiros sentados ou 6 dormindo.',
    embraerHeading: 'Embraer',
    embraerDesc: 'As aeronaves fabricadas pela Embraer podem voar até 4.600nm com um tempo de voo de cerca de 8 horas. Esses jatos executivos Embraer oferecem versatilidade excepcional e amplo espaço de cabine para até 18 passageiros sentados ou 7 dormindo. As aeronaves incluem Lineage 1000E, Legacy 650/650E e Praetor 600.',
    cessnaHeading: 'Cessna',
    cessnaDesc: 'Esta aeronave de médio porte combina o excelente desempenho em pista de um jato leve com o conforto procurado de uma cabine onde se pode ficar em pé, com assentos de couro tipo clube, seis dos quais reclinam.',
    dassaultHeading: 'Dassault',
    dassaultDesc: 'As aeronaves Dassault podem voar até 5.950nm com um tempo de voo de cerca de 11 horas. Atualmente oferecido é o Falcon 7X, uma aeronave aerodinâmica e elegantemente única com desempenho incomparável, particularmente em aeroportos com pistas curtas. A aeronave possui um sistema avançado de pressurização da cabine com três amplos espaços de convivência separados que acomodam até 12 passageiros sentados.',
    enquireHeading: 'Consulte uma assinatura',
    formTitle: 'Contate-nos',
    firstName: 'Nome',
    lastName: 'Sobrenome',
    phone: 'Número de telefone',
    email: 'Endereço de e-mail',
    flyPrivate: 'Com que frequência você voa em jato particular?',
    flyPrivateOptions: ['Menos de uma vez por ano', '1-2 vezes por ano', '3-5 vezes por ano', '6-10 vezes por ano', 'Mais de 10 vezes por ano'],
    currentSolution: 'Qual é a sua solução de voo atual?',
    hearAbout: 'Como você soube da SivitaJet?',
    hearAboutOptions: ['Mecanismo de busca', 'Redes sociais', 'Indicação', 'Publicidade', 'Evento', 'Outro'],
    message: 'Mensagem',
    submit: 'Enviar',
    marketingText: 'Gostaria de receber comunicações de marketing da SivitaJet por e-mail, correio ou mensagem de texto.',
    privacyText: 'Seus dados pessoais serão processados de acordo com nosso ',
    privacyLink: 'Aviso de Privacidade',
    copyright: '© 2025 Companhia Aérea. Todos os direitos reservados.',
  },
};

const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'ja', name: '日本語' },
  { code: 'ar', name: 'العربية' },
  { code: 'fr', name: 'Français' },
  { code: 'pt', name: 'Português' },
];

function Fleet({ onBack, language = 'en', setLanguage, onExperienceClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    flyPrivate: '',
    currentSolution: '',
    hearAbout: '',
    message: '',
    marketingConsent: false,
    privacyConsent: false
  });

  const t = fleetTranslations[language] || fleetTranslations.en;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuOpen && !event.target.closest('.language-dropdown')) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langMenuOpen]);

  const handleLanguageChange = (langCode) => {
    if (setLanguage) setLanguage(langCode);
    setLangMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you soon.');
    setFormData({
      firstName: '', lastName: '', phone: '', email: '',
      flyPrivate: '', currentSolution: '', hearAbout: '', message: '',
      marketingConsent: false, privacyConsent: false
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ========== RESPONSIVE NAVBAR ========== */}
      <nav className="sticky top-0 z-50 bg-white shadow-md py-3 sm:py-4 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <button onClick={() => setMenuOpen(true)} className="p-2 rounded-md hover:bg-gray-100 focus:outline-none" aria-label="Menu">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul className="hidden md:flex gap-4 lg:gap-6" style={{ fontFamily: "Apple Garamond, sans-serif" }}>
              <li><button onClick={onBack} className="hover:text-blue-600 text-sm lg:text-base">Home</button></li>
              <li><span className="cursor-default text-sm lg:text-base">Fleet</span></li>
              <li><button onClick={onExperienceClick} className="hover:text-blue-600 text-sm lg:text-base">Experience</button></li>
            </ul>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-28 sm:w-32 md:w-auto">
            <img src="logo.png" alt="Airline Logo" className="h-8 sm:h-10 md:h-14 lg:h-20 w-auto" />
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative language-dropdown">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="p-1 sm:p-2 rounded-md hover:bg-gray-100 focus:outline-none"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-md shadow-lg z-20">
                  <div className="py-1">
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="block w-full text-left px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100"
                        style={{ fontFamily: "Afacad, sans-serif" }}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Replaced buttons with <a> tags to /auth */}
            <a
              href="/auth"
              className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 transition"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Log in
            </a>
            <a
              href="/auth"
              className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* ========== MOBILE DRAWER ========== */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMenuOpen(false)}></div>
          <div className="absolute inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl">
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">
              <ul className="space-y-6" style={{ fontFamily: "Apple Garamond, sans-serif" }}>
                <li><button onClick={() => { onBack(); setMenuOpen(false); }} className="block text-xl hover:text-blue-600">Home</button></li>
                <li><span className="block text-xl cursor-default">Fleet</span></li>
                <li><button onClick={() => { onExperienceClick(); setMenuOpen(false); }} className="block text-xl hover:text-blue-600">Experience</button></li>
              </ul>
              <hr className="my-4" />
              <div>
                <p className="text-sm font-semibold mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>Language</p>
                <div className="space-y-2">
                  {languageOptions.map((lang) => (
                    <button key={lang.code} onClick={() => { handleLanguageChange(lang.code); setMenuOpen(false); }} className="block w-full text-left text-sm text-gray-600 hover:text-blue-600" style={{ fontFamily: "Afacad, sans-serif" }}>{lang.name}</button>
                  ))}
                </div>
              </div>
              <hr className="my-4" />
              <div className="space-y-3">
                <a
                  href="/auth"
                  onClick={() => setMenuOpen(false)}
                  className="w-full px-4 py-2 rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 transition text-center block"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  Log in
                </a>
                <a
                  href="/auth"
                  onClick={() => setMenuOpen(false)}
                  className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-center block"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== HERO HEADING ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold" style={{ fontFamily: "Apple Garamond, serif" }}>
          {t.heroTitle}
        </h1>
      </div>

      {/* ========== BOMBARDIER CARD ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-5 sm:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                {t.bombardierHeading}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                {t.bombardierDesc}
              </p>
            </div>
            <div className="md:w-2/5">
              <img src="Image1.jpeg" alt="Bombardier" className="w-full h-64 sm:h-80 md:h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* ========== GULFSTREAM CARD ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img src="Image2.jpeg" alt="Gulfstream" className="w-full h-64 sm:h-80 md:h-full object-cover" />
            </div>
            <div className="flex-1 p-5 sm:p-8 text-center md:text-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                {t.gulfstreamHeading}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                {t.gulfstreamDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== EMBRAER CARD ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-5 sm:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                {t.embraerHeading}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                {t.embraerDesc}
              </p>
            </div>
            <div className="md:w-2/5">
              <img src="Image33.jpeg" alt="Embraer" className="w-full h-64 sm:h-80 md:h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* ========== CESSNA CARD ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img src="Image44.jpeg" alt="Cessna" className="w-full h-64 sm:h-80 md:h-full object-cover" />
            </div>
            <div className="flex-1 p-5 sm:p-8 text-center md:text-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                {t.cessnaHeading}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                {t.cessnaDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== DASSAULT CARD ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-5 sm:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                {t.dassaultHeading}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                {t.dassaultDesc}
              </p>
            </div>
            <div className="md:w-2/5">
              <img src="Image55.jpeg" alt="Dassault" className="w-full h-64 sm:h-80 md:h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* ========== ENQUIRE SECTION ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8" style={{ fontFamily: "Apple Garamond, serif" }}>
          {t.enquireHeading}
        </h1>
        <img src="logo.png" alt="Logo" className="mx-auto w-32 sm:w-48 md:w-64 h-auto" />
      </div>

      {/* ========== CONTACT FORM ========== */}
      <div className="max-w-4xl mx-auto mt-12 sm:mt-20 px-4 pb-20">
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8" style={{ fontFamily: "Apple Garamond, serif" }}>
            {t.formTitle}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.firstName}</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.lastName}</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.phone}</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.email}</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.flyPrivate}</label>
              <select name="flyPrivate" value={formData.flyPrivate} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select...</option>
                {t.flyPrivateOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.currentSolution}</label>
              <input type="text" name="currentSolution" value={formData.currentSolution} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.hearAbout}</label>
              <select name="hearAbout" value={formData.hearAbout} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select...</option>
                {t.hearAboutOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.message}</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>

            <div className="flex items-start gap-2 sm:gap-3">
              <input type="checkbox" id="marketingConsent" name="marketingConsent" checked={formData.marketingConsent} onChange={handleInputChange} className="mt-1 w-4 h-4 text-blue-600" />
              <label htmlFor="marketingConsent" className="text-gray-700 text-xs sm:text-sm" style={{ fontFamily: "Afacad, sans-serif" }}>{t.marketingText}</label>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <input type="checkbox" id="privacyConsent" name="privacyConsent" checked={formData.privacyConsent} onChange={handleInputChange} required className="mt-1 w-4 h-4 text-blue-600" />
              <label htmlFor="privacyConsent" className="text-gray-700 text-xs sm:text-sm" style={{ fontFamily: "Afacad, sans-serif" }}>{t.privacyText}<a href="#" className="text-blue-600 hover:underline">{t.privacyLink}</a>.</label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>
              {t.submit}
            </button>
          </form>
        </div>
      </div>

      {/* ========== RESPONSIVE FOOTER ========== */}
      <footer className="bg-blue-700 text-white mt-12 sm:mt-16 py-6 sm:py-8" style={{ fontFamily: "Afacad, sans-serif" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <span className="cursor-default text-sm sm:text-base">Fleet</span>
            <button onClick={onBack} className="hover:underline text-sm sm:text-base">Membership</button>
            <button onClick={onExperienceClick} className="hover:underline text-sm sm:text-base">Experience</button>
            <a href="#" className="hover:underline text-sm sm:text-base">Contact Us</a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 mb-8 sm:mb-10">
            <div className="text-center sm:text-left space-y-1">
              <div>Gulfstream</div>
              <div>Dassault</div>
              <div>Cessna</div>
              <div>Bombardier</div>
              <div>Embraer</div>
            </div>
            <div className="text-center sm:text-right space-y-1">
              <div>+645737383466</div>
              <div>+987654345679</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
            </div>
          </div>
          <div className="text-center text-xs sm:text-sm mt-6 sm:mt-8 pt-4 border-t border-blue-500">
            {t.copyright}
          </div>
        </div>
      </footer>

      {/* Chatbot appears on fleet page */}
      <Chatbot />
    </div>
  );
}

export default Fleet;