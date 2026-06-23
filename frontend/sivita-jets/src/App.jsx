import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { RiFlightTakeoffLine, RiFlightLandLine } from 'react-icons/ri';
import Membership from './Membership';
import Fleet from './Fleet';
import Experience from './Experience';
import Chatbot from './Chatbot';
import Auth from './Auth';

// ---------- TRANSLATIONS (fully preserved) ----------
const translations = {
  en: {
    navMembership: 'Membership',
    navFleet: 'Fleet',
    navExperience: 'Experience',
    heroTitle: 'Sky Luxury Made Seamless',
    heroSub1: 'Plan a flight and spend hours you need',
    heroSub2: 'Membership without fees',
    heroPlanBtn: 'Plan a flight',
    heroMemberBtn: 'Membership',
    bookFlight: 'Book your flight',
    roundTrip: 'Round trip',
    from: 'From',
    to: 'To',
    passengers: 'Passengers:',
    max14: 'Max 14',
    search: 'Search',
    membershipTitle: 'Membership',
    membershipDesc: 'Sivita offers flexible, investment-free solutions to suit your flying requirements. All Members enjoy global access and unparalleled service on board a consistent and branded fleet of super-midsize, long-range and super-long-range aircraft.',
    programTitle: 'Program',
    programDesc: 'Our bespoke flight subscription membership, offering guaranteed access to the entire fleet.',
    vj25Title: 'VJ25',
    vj25Desc: 'The membership for high-quality, low-frequency travel, from 25 flight hours per year.',
    corporateTitle: 'Corporate',
    corporateDesc: 'A full suite of flexible business jet solutions for corporations and executives around the world.',
    viewMembership: 'View Membership',
    fleetTitle: 'A global jet fleet',
    fleetDesc: 'Renowned for its consistency, the distinctive silver and red fleet is equipped for all needs — whether you need a fully enabled business suite or a restful home away from home space.',
    exploreFleet: 'Explore the fleet',
    globalTitle: 'The Global 7500',
    globalDesc: 'Sivita unlocks the world with the first Global 7500 fleet, the largest and longest-range business jet. The Global 7500 offers four true living spaces, including a full-size kitchen and a permanent bedroom.',
    promiseTitle: 'Our Promise',
    promiseDesc: 'Want to know more? Let us draft a plan for you. Tell us about your most frequent flights, where you are based, nature of your flights, preferred aircraft, times of the year you fly often and our team of aviation experts will happily give you a real life example of what flying with VistaJet will look like for you. Give us the chance to arrange a consultation and create a personal proposal that perfectly fits all your needs.',
    makeEnquiry: 'Make An Enquiry',
    footerFleet: 'Fleet',
    footerMembership: 'Membership',
    footerExperience: 'Experience',
    footerContact: 'Contact Us',
    footerCopyright: '© 2025 Airline. All rights reserved.',
  },
  es: {
    navMembership: 'Membresía',
    navFleet: 'Flota',
    navExperience: 'Experiencia',
    heroTitle: 'Lujo en el cielo sin esfuerzo',
    heroSub1: 'Planifica un vuelo y disfruta las horas que necesitas',
    heroSub2: 'Membresía sin cuotas',
    heroPlanBtn: 'Planificar vuelo',
    heroMemberBtn: 'Membresía',
    bookFlight: 'Reserva tu vuelo',
    roundTrip: 'Ida y vuelta',
    from: 'Desde',
    to: 'Hasta',
    passengers: 'Pasajeros:',
    max14: 'Máx. 14',
    search: 'Buscar',
    membershipTitle: 'Membresía',
    membershipDesc: 'Sivita ofrece soluciones flexibles sin inversión para adaptarse a tus necesidades de vuelo. Todos los miembros disfrutan de acceso global y un servicio incomparable a bordo de una flota consistente y de marca, de tamaño supermediano, largo alcance y súper largo alcance.',
    programTitle: 'Programa',
    programDesc: 'Nuestra suscripción de vuelo a medida, que ofrece acceso garantizado a toda la flota.',
    vj25Title: 'VJ25',
    vj25Desc: 'La membresía para viajes de alta calidad y baja frecuencia, a partir de 25 horas de vuelo al año.',
    corporateTitle: 'Corporativo',
    corporateDesc: 'Un conjunto completo de soluciones de jets ejecutivos flexibles para corporaciones y ejecutivos de todo el mundo.',
    viewMembership: 'Ver membresía',
    fleetTitle: 'Una flota global de jets',
    fleetDesc: 'Renombrada por su consistencia, la distintiva flota plateada y roja está equipada para todas las necesidades — ya sea que necesites una suite de negocios completamente equipada o un espacio hogareño de descanso.',
    exploreFleet: 'Explorar la flota',
    globalTitle: 'El Global 7500',
    globalDesc: 'Sivita abre el mundo con la primera flota Global 7500, el jet de negocios más grande y de mayor alcance. El Global 7500 ofrece cuatro espacios habitables reales, incluida una cocina completa y un dormitorio permanente.',
    promiseTitle: 'Nuestra promesa',
    promiseDesc: '¿Quieres saber más? Déjanos elaborar un plan para ti. Cuéntanos sobre tus vuelos más frecuentes, dónde tienes tu base, la naturaleza de tus vuelos, la aeronave preferida, las épocas del año en que vuelas a menudo y nuestro equipo de expertos en aviación te dará un ejemplo real de cómo será volar con VistaJet. Danos la oportunidad de concertar una consulta y crear una propuesta personalizada que se ajuste perfectamente a todas tus necesidades.',
    makeEnquiry: 'Hacer una consulta',
    footerFleet: 'Flota',
    footerMembership: 'Membresía',
    footerExperience: 'Experiencia',
    footerContact: 'Contáctanos',
    footerCopyright: '© 2025 Aerolínea. Todos los derechos reservados.',
  },
  ja: {
    navMembership: 'メンバーシップ',
    navFleet: '機材',
    navExperience: '体験',
    heroTitle: 'シームレスな空の贅沢',
    heroSub1: '必要な時間だけフライトを計画',
    heroSub2: '手数料なしのメンバーシップ',
    heroPlanBtn: 'フライトを予約',
    heroMemberBtn: 'メンバーシップ',
    bookFlight: 'フライトを予約',
    roundTrip: '往復',
    from: '出発地',
    to: '到着地',
    passengers: '乗客:',
    max14: '最大14名',
    search: '検索',
    membershipTitle: 'メンバーシップ',
    membershipDesc: 'Sivitaはお客様の飛行要件に合わせた柔軟で投資不要のソリューションを提供します。すべてのメンバーはグローバルなアクセスと、スーパーミッドサイズ、長距離、超長距離の一貫したブランド機材による比類のないサービスを楽しめます。',
    programTitle: 'プログラム',
    programDesc: 'フリート全体への保証されたアクセスを提供する、オーダーメイドのフライトサブスクリプションメンバーシップ。',
    vj25Title: 'VJ25',
    vj25Desc: '年間25時間からの高品質・低頻度旅行のためのメンバーシップ。',
    corporateTitle: 'コーポレート',
    corporateDesc: '世界中の企業や経営者のための、柔軟なビジネスジェットソリューションの完全なスイート。',
    viewMembership: '詳細を見る',
    fleetTitle: 'グローバルジェットフリート',
    fleetDesc: 'その一貫性で知られる特徴的なシルバーとレッドのフリートは、完全装備のビジネススイートから休息のためのホームアウェイフロムホームスペースまで、あらゆるニーズに対応します。',
    exploreFleet: '機材を見る',
    globalTitle: 'グローバル7500',
    globalDesc: 'Sivitaは、最大・最長航続距離のビジネスジェットである初のグローバル7500フリートで世界を開放します。グローバル7500は、フルサイズのキッチンと恒久的なベッドルームを含む4つの真の居住空間を提供します。',
    promiseTitle: '私たちの約束',
    promiseDesc: 'もっと知りたいですか？あなたのための計画を立てさせてください。最も頻繁に飛行する便、拠点、フライトの性質、希望する航空機、よく飛ぶ時期をお知らせください。当社の航空専門家チームが、VistaJetでのフライトがどのようなものか、実際の例を喜んでお見せします。コンサルテーションを手配し、あなたのすべてのニーズに完璧に合った個別の提案を作成する機会をください。',
    makeEnquiry: 'お問い合わせ',
    footerFleet: '機材',
    footerMembership: 'メンバーシップ',
    footerExperience: '体験',
    footerContact: 'お問い合わせ',
    footerCopyright: '© 2025 航空会社. 無断転載を禁じます。',
  },
  ar: {
    navMembership: 'العضوية',
    navFleet: 'الأسطول',
    navExperience: 'التجربة',
    heroTitle: 'رفاهية السماء بسلاسة',
    heroSub1: 'خطط لرحلة واقضِ الساعات التي تحتاجها',
    heroSub2: 'عضوية بدون رسوم',
    heroPlanBtn: 'خطط لرحلة',
    heroMemberBtn: 'العضوية',
    bookFlight: 'احجز رحلتك',
    roundTrip: 'ذهاب وعودة',
    from: 'من',
    to: 'إلى',
    passengers: 'المسافرون:',
    max14: 'الحد الأقصى 14',
    search: 'بحث',
    membershipTitle: 'العضوية',
    membershipDesc: 'تقدم Sivita حلولاً مرنة وخالية من الاستثمار لتناسب متطلبات الطيران الخاصة بك. يستمتع جميع الأعضاء بإمكانية الوصول العالمية وخدمة لا تضاهى على متن أسطول ثابت وذو علامة تجارية من الطائرات فائقة المتوسطة والبعيدة المدى والطويلة المدى.',
    programTitle: 'البرنامج',
    programDesc: 'عضوية الاشتراك في الرحلات الجوية المصممة خصيصًا، والتي توفر وصولاً مضمونًا إلى الأسطول بأكمله.',
    vj25Title: 'VJ25',
    vj25Desc: 'العضوية للسفر عالي الجودة ومنخفض التردد، من 25 ساعة طيران في السنة.',
    corporateTitle: 'الشركات',
    corporateDesc: 'مجموعة كاملة من حلول الطائرات التجارية المرنة للشركات والمديرين التنفيذيين حول العالم.',
    viewMembership: 'عرض العضوية',
    fleetTitle: 'أسطول عالمي من الطائرات',
    fleetDesc: 'يشتهر الأسطول المميز باللونين الفضي والأحمر باتساقه، وهو مجهز لجميع الاحتياجات — سواء كنت بحاجة إلى جناح أعمال مجهز بالكامل أو مساحة منزلية مريحة للاسترخاء.',
    exploreFleet: 'استكشف الأسطول',
    globalTitle: 'غلوبال 7500',
    globalDesc: 'تفتح Sivita العالم مع أول أسطول من طائرات غلوبال 7500، أكبر وأطول طائرة رجال أعمال مدى. يوفر غلوبال 7500 أربعة مساحات معيشة حقيقية، بما في ذلك مطبخ كامل الحجم وغرفة نوم دائمة.',
    promiseTitle: 'وعدنا',
    promiseDesc: 'هل تريد معرفة المزيد؟ دعنا نضع خطة لك. أخبرنا عن رحلاتك الأكثر تكرارًا، ومقرك، وطبيعة رحلاتك، والطائرة المفضلة، وأوقات السنة التي تسافر فيها غالبًا، وسيقدم لك فريق خبراء الطيران لدينا مثالاً واقعيًا لما سيكون عليه السفر مع VistaJet. امنحنا فرصة ترتيب استشارة وإنشاء عرض شخصي يناسب جميع احتياجاتك تمامًا.',
    makeEnquiry: 'تقديم استفسار',
    footerFleet: 'الأسطول',
    footerMembership: 'العضوية',
    footerExperience: 'التجربة',
    footerContact: 'اتصل بنا',
    footerCopyright: '© 2025 الخطوط الجوية. جميع الحقوق محفوظة.',
  },
  fr: {
    navMembership: 'Adhésion',
    navFleet: 'Flotte',
    navExperience: 'Expérience',
    heroTitle: 'Luxe aérien sans couture',
    heroSub1: 'Planifiez un vol et passez les heures dont vous avez besoin',
    heroSub2: 'Adhésion sans frais',
    heroPlanBtn: 'Planifier un vol',
    heroMemberBtn: 'Adhésion',
    bookFlight: 'Réservez votre vol',
    roundTrip: 'Aller-retour',
    from: 'De',
    to: 'À',
    passengers: 'Passagers :',
    max14: 'Max 14',
    search: 'Rechercher',
    membershipTitle: 'Adhésion',
    membershipDesc: 'Sivita propose des solutions flexibles sans investissement pour répondre à vos besoins de vol. Tous les membres bénéficient d’un accès mondial et d’un service inégalé à bord d’une flotte cohérente et de marque d’avions super-moyens, long-courriers et ultra-long-courriers.',
    programTitle: 'Programme',
    programDesc: 'Notre abonnement de vol sur mesure, offrant un accès garanti à l’ensemble de la flotte.',
    vj25Title: 'VJ25',
    vj25Desc: 'L’adhésion pour les voyages de haute qualité et à faible fréquence, à partir de 25 heures de vol par an.',
    corporateTitle: 'Entreprise',
    corporateDesc: 'Une suite complète de solutions de jets d’affaires flexibles pour les entreprises et les cadres du monde entier.',
    viewMembership: 'Voir l’adhésion',
    fleetTitle: 'Une flotte mondiale de jets',
    fleetDesc: 'Réputée pour sa cohérence, la flotte distinctive argent et rouge est équipée pour tous les besoins — que vous ayez besoin d’une suite entièrement équipée pour les affaires ou d’un espace reposant comme une maison loin de la maison.',
    exploreFleet: 'Explorer la flotte',
    globalTitle: 'Le Global 7500',
    globalDesc: 'Sivita ouvre le monde avec la première flotte Global 7500, le jet d’affaires le plus grand et le plus longue portée. Le Global 7500 offre quatre véritables espaces de vie, dont une cuisine complète et une chambre permanente.',
    promiseTitle: 'Notre promesse',
    promiseDesc: 'Vous voulez en savoir plus ? Laissez-nous élaborer un plan pour vous. Dites-nous quels sont vos vols les plus fréquents, votre base, la nature de vos vols, l’avion que vous préférez, les périodes de l’année où vous volez souvent et notre équipe d’experts en aviation vous donnera un exemple concret de ce que sera voler avec VistaJet. Donnez-nous la chance d’organiser une consultation et de créer une proposition personnelle qui répond parfaitement à tous vos besoins.',
    makeEnquiry: 'Faire une demande',
    footerFleet: 'Flotte',
    footerMembership: 'Adhésion',
    footerExperience: 'Expérience',
    footerContact: 'Contactez-nous',
    footerCopyright: '© 2025 Compagnie aérienne. Tous droits réservés.',
  },
  pt: {
    navMembership: 'Assinatura',
    navFleet: 'Frota',
    navExperience: 'Experiência',
    heroTitle: 'Luxo no céu sem complicações',
    heroSub1: 'Planeie um voo e passe as horas que precisa',
    heroSub2: 'Assinatura sem taxas',
    heroPlanBtn: 'Planear voo',
    heroMemberBtn: 'Assinatura',
    bookFlight: 'Reserve o seu voo',
    roundTrip: 'Ida e volta',
    from: 'De',
    to: 'Para',
    passengers: 'Passageiros:',
    max14: 'Máx. 14',
    search: 'Pesquisar',
    membershipTitle: 'Assinatura',
    membershipDesc: 'A Sivita oferece soluções flexíveis e sem investimento para atender às suas necessidades de voo. Todos os membros desfrutam de acesso global e serviço incomparável a bordo de uma frota consistente e com marca própria de aeronaves de médio porte, longo alcance e ultralongo alcance.',
    programTitle: 'Programa',
    programDesc: 'A nossa assinatura de voo personalizada, que oferece acesso garantido a toda a frota.',
    vj25Title: 'VJ25',
    vj25Desc: 'A assinatura para viagens de alta qualidade e baixa frequência, a partir de 25 horas de voo por ano.',
    corporateTitle: 'Corporativo',
    corporateDesc: 'Um conjunto completo de soluções flexíveis de jatos executivos para empresas e executivos em todo o mundo.',
    viewMembership: 'Ver assinatura',
    fleetTitle: 'Uma frota global de jatos',
    fleetDesc: 'Reconhecida pela sua consistência, a distinta frota prateada e vermelha está equipada para todas as necessidades — quer necessite de uma suíte de negócios totalmente equipada ou de um espaço de descanso como uma casa longe de casa.',
    exploreFleet: 'Explorar frota',
    globalTitle: 'O Global 7500',
    globalDesc: 'A Sivita abre o mundo com a primeira frota Global 7500, o maior jato executivo de maior alcance. O Global 7500 oferece quatro verdadeiros espaços habitáveis, incluindo uma cozinha completa e um quarto permanente.',
    promiseTitle: 'A nossa promessa',
    promiseDesc: 'Quer saber mais? Deixe-nos elaborar um plano para si. Conte-nos sobre os seus voos mais frequentes, onde está baseado, a natureza dos seus voos, a aeronave preferida, as épocas do ano em que voa com frequência e a nossa equipa de especialistas em aviação dar-lhe-á um exemplo real de como será voar com a VistaJet. Dê-nos a oportunidade de agendar uma consulta e criar uma proposta personalizada que se adapte perfeitamente a todas as suas necessidades.',
    makeEnquiry: 'Fazer uma consulta',
    footerFleet: 'Frota',
    footerMembership: 'Assinatura',
    footerExperience: 'Experiência',
    footerContact: 'Contacto',
    footerCopyright: '© 2025 Companhia Aérea. Todos os direitos reservados.',
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [fromCountry, setFromCountry] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [showMembership, setShowMembership] = useState(false);
  const [showFleet, setShowFleet] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  // Helper to save current page to localStorage
  const saveCurrentPage = (page) => {
    localStorage.setItem('currentPage', page);
  };

  const goToHome = () => {
    setShowMembership(false);
    setShowFleet(false);
    setShowExperience(false);
    saveCurrentPage('home');
  };
  const goToMembership = () => {
    setShowMembership(true);
    setShowFleet(false);
    setShowExperience(false);
    saveCurrentPage('membership');
  };
  const goToFleet = () => {
    setShowMembership(false);
    setShowFleet(true);
    setShowExperience(false);
    saveCurrentPage('fleet');
  };
  const goToExperience = () => {
    setShowMembership(false);
    setShowFleet(false);
    setShowExperience(true);
    saveCurrentPage('experience');
  };

  useEffect(() => {
    const lastPage = localStorage.getItem('currentPage');
    if (lastPage === 'membership') goToMembership();
    else if (lastPage === 'fleet') goToFleet();
    else if (lastPage === 'experience') goToExperience();
    else goToHome();
  }, []);

  useEffect(() => {
    if (showMembership) saveCurrentPage('membership');
    else if (showFleet) saveCurrentPage('fleet');
    else if (showExperience) saveCurrentPage('experience');
    else saveCurrentPage('home');
  }, [showMembership, showFleet, showExperience]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuOpen && !event.target.closest('.language-dropdown')) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langMenuOpen]);

  const languageOptions = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'ja', name: '日本語' },
    { code: 'ar', name: 'العربية' },
    { code: 'fr', name: 'Français' },
    { code: 'pt', name: 'Português' },
  ];

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Portugal',
    'Netherlands', 'Switzerland', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Ireland', 'Belgium',
    'Austria', 'Greece', 'Turkey', 'Poland', 'Czech Republic', 'Hungary', 'Romania', 'Russia',
    'China', 'Japan', 'South Korea', 'India', 'Indonesia', 'Malaysia', 'Thailand', 'Vietnam',
    'Philippines', 'Singapore', 'Australia', 'New Zealand', 'South Africa', 'Egypt', 'Morocco',
    'Kenya', 'Nigeria', 'Brazil', 'Argentina', 'Mexico', 'Colombia', 'Chile', 'Peru',
    'United Arab Emirates', 'Saudi Arabia', 'Qatar'
  ];

  const decreasePassengers = () => {
    if (passengers > 1) setPassengers(passengers - 1);
  };
  const increasePassengers = () => {
    if (passengers < 14) setPassengers(passengers + 1);
  };

  const t = translations[language] || translations.en;

  // If we are on a subpage (Membership, Fleet, Experience), render that component directly.
  if (showExperience) {
    return <Experience 
      onBack={goToHome}
      language={language} 
      setLanguage={setLanguage} 
      onFleetClick={goToFleet}
      onMembershipClick={goToMembership}
    />;
  }
  if (showFleet) {
    return <Fleet 
      onBack={goToHome}
      language={language} 
      setLanguage={setLanguage} 
      onExperienceClick={goToExperience}
    />;
  }
  if (showMembership) {
    return <Membership 
      onBack={goToHome}
      language={language} 
      setLanguage={setLanguage} 
      onFleetClick={goToFleet}
      onExperienceClick={goToExperience}
    />;
  }

  // Homepage JSX (with Router)
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <nav className="sticky top-0 z-50 bg-white shadow-md py-3 sm:py-4 px-4 sm:px-6 md:px-12">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-6">
                  <button onClick={() => setMenuOpen(true)} className="p-2 rounded-md hover:bg-gray-100 focus:outline-none" aria-label="Menu">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <ul className="hidden md:flex gap-4 lg:gap-6" style={{ fontFamily: "Apple Garamond, sans-serif" }}>
                    <li><button onClick={goToMembership} className="hover:text-blue-600 text-sm lg:text-base">{t.navMembership}</button></li>
                    <li><button onClick={goToFleet} className="hover:text-blue-600 text-sm lg:text-base">{t.navFleet}</button></li>
                    <li><button onClick={goToExperience} className="hover:text-blue-600 text-sm lg:text-base">{t.navExperience}</button></li>
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
                              onClick={() => {
                                setLanguage(lang.code);
                                setLangMenuOpen(false);
                              }}
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

                  {/* Links to Auth page instead of modal buttons */}
                  <Link
                    to="/auth"
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 transition"
                    style={{ fontFamily: "Afacad, sans-serif" }}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/auth"
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                    style={{ fontFamily: "Afacad, sans-serif" }}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </nav>

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
                      <li><button onClick={() => { goToMembership(); setMenuOpen(false); }} className="block text-xl hover:text-blue-600">{t.navMembership}</button></li>
                      <li><button onClick={() => { goToFleet(); setMenuOpen(false); }} className="block text-xl hover:text-blue-600">{t.navFleet}</button></li>
                      <li><button onClick={() => { goToExperience(); setMenuOpen(false); }} className="block text-xl hover:text-blue-600">{t.navExperience}</button></li>
                    </ul>
                    <hr className="my-4" />
                    <div>
                      <p className="text-sm font-semibold mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>Language</p>
                      <div className="space-y-2">
                        {languageOptions.map((lang) => (
                          <button key={lang.code} onClick={() => { setLanguage(lang.code); setMenuOpen(false); }} className="block w-full text-left text-sm text-gray-600 hover:text-blue-600" style={{ fontFamily: "Afacad, sans-serif" }}>{lang.name}</button>
                        ))}
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="space-y-3">
                      <Link
                        to="/auth"
                        onClick={() => setMenuOpen(false)}
                        className="w-full px-4 py-2 rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 transition text-center block"
                        style={{ fontFamily: "Afacad, sans-serif" }}
                      >
                        Log in
                      </Link>
                      <Link
                        to="/auth"
                        onClick={() => setMenuOpen(false)}
                        className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-center block"
                        style={{ fontFamily: "Afacad, sans-serif" }}
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <header className="relative h-[60vh] sm:min-h-[70vh] overflow-hidden">
              <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover" poster="https://placehold.co/1920x1080">
                <source src="airline.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>{t.heroTitle}</h1>
                <p className="text-base sm:text-xl md:text-2xl" style={{ fontFamily: "Apple Garamond, sans-serif" }}>{t.heroSub1}</p>
                <p className="text-base sm:text-xl md:text-2xl mb-4 sm:mb-6" style={{ fontFamily: "Apple Garamond, sans-serif" }}>{t.heroSub2}</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-sm sm:text-base lg:text-lg" style={{ fontFamily: "Afacad, sans-serif" }}>{t.heroPlanBtn}</button>
                  <button onClick={goToMembership} className="px-4 sm:px-6 py-2 sm:py-3 rounded-md border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition text-sm sm:text-base lg:text-lg" style={{ fontFamily: "Afacad, sans-serif" }}>{t.heroMemberBtn}</button>
                </div>
              </div>
            </header>

            <section className="max-w-5xl mx-auto -mt-12 sm:-mt-16 bg-white rounded-xl shadow-xl p-4 sm:p-6 relative z-10">
              <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>{t.bookFlight}</h2>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <input type="checkbox" id="roundTrip" checked={isRoundTrip} onChange={(e) => setIsRoundTrip(e.target.checked)} className="w-4 h-4 text-blue-600" />
                <label htmlFor="roundTrip" className="text-xs sm:text-sm" style={{ fontFamily: "Afacad, sans-serif" }}>{t.roundTrip}</label>
              </div>
              {!isRoundTrip ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="border p-2 rounded bg-white flex items-center gap-2">
                    <RiFlightTakeoffLine className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    <select value={fromCountry} onChange={(e) => setFromCountry(e.target.value)} className="w-full bg-transparent focus:outline-none text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>
                      <option value="">{t.from}</option>
                      {countries.map((country) => (<option key={country} value={country}>{country}</option>))}
                    </select>
                  </div>
                  <div className="border p-2 rounded bg-white flex items-center gap-2">
                    <RiFlightLandLine className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    <select value={toCountry} onChange={(e) => setToCountry(e.target.value)} className="w-full bg-transparent focus:outline-none text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>
                      <option value="">{t.to}</option>
                      {countries.map((country) => (<option key={country} value={country}>{country}</option>))}
                    </select>
                  </div>
                  <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} className="border p-2 rounded text-sm sm:text-base" />
                  <div className="border p-2 rounded bg-white flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: "Afacad, sans-serif" }}>{t.passengers}</span>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <button onClick={decreasePassengers} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-base sm:text-xl font-bold" disabled={passengers <= 1}>-</button>
                      <span className="text-base sm:text-lg font-semibold w-6 sm:w-8 text-center">{passengers}</span>
                      <button onClick={increasePassengers} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-base sm:text-xl font-bold" disabled={passengers >= 14}>+</button>
                    </div>
                    <span className="text-xs text-gray-500">{t.max14}</span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="border p-2 rounded bg-white flex items-center gap-2">
                    <RiFlightTakeoffLine className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    <select value={fromCountry} onChange={(e) => setFromCountry(e.target.value)} className="w-full bg-transparent focus:outline-none text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>
                      <option value="">{t.from}</option>
                      {countries.map((country) => (<option key={country} value={country}>{country}</option>))}
                    </select>
                  </div>
                  <div className="border p-2 rounded bg-white flex items-center gap-2">
                    <RiFlightLandLine className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    <select value={toCountry} onChange={(e) => setToCountry(e.target.value)} className="w-full bg-transparent focus:outline-none text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>
                      <option value="">{t.to}</option>
                      {countries.map((country) => (<option key={country} value={country}>{country}</option>))}
                    </select>
                  </div>
                  <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} className="border p-2 rounded text-sm sm:text-base" />
                  <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="border p-2 rounded text-sm sm:text-base" />
                </div>
              )}
              <div className="mt-4">
                {isRoundTrip && (
                  <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <div className="border p-2 rounded bg-white flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                      <span className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: "Afacad, sans-serif" }}>{t.passengers}</span>
                      <button onClick={decreasePassengers} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold" disabled={passengers <= 1}>-</button>
                      <span className="text-base sm:text-lg font-semibold w-6 sm:w-8 text-center">{passengers}</span>
                      <button onClick={increasePassengers} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold" disabled={passengers >= 14}>+</button>
                      <span className="text-xs text-gray-500">{t.max14}</span>
                    </div>
                  </div>
                )}
                <button className="w-full sm:w-auto bg-blue-600 text-white py-2 px-4 sm:px-6 rounded hover:bg-blue-700 transition text-sm sm:text-base">{t.search}</button>
              </div>
            </section>

            <div className="max-w-7xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center" style={{ fontFamily: "Apple Garamond, serif" }}>{t.membershipTitle}</h2>
              <p className="text-base sm:text-lg text-gray-700 text-center max-w-4xl mx-auto mb-10 sm:mb-12" style={{ fontFamily: "Afacad, sans-serif" }}>{t.membershipDesc}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img src="timothy.jpg" alt="Program" className="w-full h-40 sm:h-48 object-cover" />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "Apple Garamond, serif" }}>{t.programTitle}</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.programDesc}</p>
                    <button onClick={goToMembership} className="inline-block px-4 sm:px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.viewMembership}</button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img src="unsplash.jpg" alt="VJ25" className="w-full h-40 sm:h-48 object-cover" />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "Apple Garamond, serif" }}>{t.vj25Title}</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.vj25Desc}</p>
                    <button onClick={goToMembership} className="inline-block px-4 sm:px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.viewMembership}</button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img src="wesley.jpg" alt="Corporate" className="w-full h-40 sm:h-48 object-cover" />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "Apple Garamond, serif" }}>{t.corporateTitle}</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.corporateDesc}</p>
                    <button onClick={goToMembership} className="inline-block px-4 sm:px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.viewMembership}</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-5 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-left" style={{ fontFamily: "Apple Garamond, serif" }}>{t.fleetTitle}</h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 sm:mt-6 text-left" style={{ fontFamily: "Afacad, sans-serif" }}>{t.fleetDesc}</p>
                    <button onClick={goToFleet} className="inline-block mt-5 sm:mt-6 px-4 sm:px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.exploreFleet}</button>
                  </div>
                  <div className="flex-1 md:max-w-[40%]">
                    <img src="yaroslav.jpg" alt="Aircraft fleet" className="w-full h-64 sm:h-80 md:h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img src="simon.jpg" alt="Global 7500" className="w-full h-64 sm:h-80 md:h-full object-cover" />
                  </div>
                  <div className="flex-1 p-5 sm:p-8 text-center md:text-right">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold" style={{ fontFamily: "Apple Garamond, serif" }}>{t.globalTitle}</h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 sm:mt-6 max-w-3xl md:ml-auto" style={{ fontFamily: "Afacad, sans-serif" }}>{t.globalDesc}</p>
                    <button onClick={goToFleet} className="inline-block mt-5 sm:mt-6 px-4 sm:px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.exploreFleet}</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full mt-16 sm:mt-20">
              <img src="chris.jpg" alt="Our Promise" className="w-full h-64 sm:h-[400px] md:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-3 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>{t.promiseTitle}</h2>
                <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto" style={{ fontFamily: "Afacad, sans-serif" }}>{t.promiseDesc}</p>
                <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-1.5 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>{t.makeEnquiry}</button>
              </div>
            </div>

            <footer className="bg-blue-700 text-white mt-12 sm:mt-16 py-6 sm:py-8" style={{ fontFamily: "Afacad, sans-serif" }}>
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                  <button onClick={goToFleet} className="hover:underline text-sm sm:text-base">{t.footerFleet}</button>
                  <button onClick={goToMembership} className="hover:underline text-sm sm:text-base">{t.footerMembership}</button>
                  <button onClick={goToExperience} className="hover:underline text-sm sm:text-base">{t.footerExperience}</button>
                  <a href="#" className="hover:underline text-sm sm:text-base">{t.footerContact}</a>
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
                  {t.footerCopyright}
                </div>
              </div>
            </footer>

            <Chatbot />
          </div>
        } />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;