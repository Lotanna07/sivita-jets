import React, { useState, useEffect } from 'react';
import Chatbot from './Chatbot';

const membershipTranslations = {
  en: { 
    heroTitle: 'Our Private Jet Memberships',
    heroSub: 'Memberships uniquely designed for your flying needs and preferences.',
    membershipHeading: 'Our Membership',
    membershipDesc: 'All memberships are investment free and come with a range of exclusive benefits including access to Private World and VistaJet’s iconic onboard services. Each membership can be customized to your needs upon joining, with flexibility in your contract to access the Members\' global fleet of aircraft, including requesting a specific aircraft type based on your flight mission.',
    discussHeading: 'Discuss your membership',
    discussDesc: 'Sivitajets offers flexible, investment-free solutions to suit your flying requirements. Sivitajets offers its Members access to a consistent and branded fleet of super-midsize, long-range and super-long-range aircraft with unparalleled service.',
    fleetOverlaySub: 'Your perfect aircraft',
    fleetOverlayTitle: 'Welcome to your fleet',
    fleetOverlayDesc: 'With an unrivaled fleet of aircraft of all range and sizes, traveling from 30 minutes to 17 hours non-stop, we have the perfect aircraft for every journey, anytime, anywhere.',
    fleetOverlayBtn: 'Discover fleet',
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
    submit: 'Submit'
  },
  es: { 
    heroTitle: 'Nuestras Membresías de Jet Privado',
    heroSub: 'Membresías diseñadas únicamente para tus necesidades y preferencias de vuelo.',
    membershipHeading: 'Nuestra Membresía',
    membershipDesc: 'Todas las membresías no requieren inversión y vienen con una gama de beneficios exclusivos que incluyen acceso a Private World y los servicios icónicos a bordo de VistaJet. Cada membresía se puede personalizar según tus necesidades al unirte, con flexibilidad en tu contrato para acceder a la flota global de aeronaves de los Miembros, incluida la solicitud de un tipo de aeronave específico según tu misión de vuelo.',
    discussHeading: 'Discute tu membresía',
    discussDesc: 'Sivitajets ofrece soluciones flexibles sin inversión para adaptarse a sus necesidades de vuelo. Sivitajets ofrece a sus Miembros acceso a una flota consistente y de marca de aviones super-medianos, de largo alcance y de ultra largo alcance con un servicio incomparable.',
    fleetOverlaySub: 'Tu aeronave perfecta',
    fleetOverlayTitle: 'Bienvenido a tu flota',
    fleetOverlayDesc: 'Con una flota inigualable de aeronaves de todo alcance y tamaño, viajando desde 30 minutos hasta 17 horas sin escalas, tenemos la aeronave perfecta para cada viaje, en cualquier momento y lugar.',
    fleetOverlayBtn: 'Descubrir flota',
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
    submit: 'Enviar'
  },
  ja: { 
    heroTitle: 'プライベートジェットメンバーシップ',
    heroSub: 'お客様のフライトニーズと好みに合わせて設計されたメンバーシップ。',
    membershipHeading: '私たちのメンバーシップ',
    membershipDesc: 'すべてのメンバーシップは投資不要で、Private WorldへのアクセスやVistaJetの象徴的な機内サービスを含むさまざまな限定特典が付属しています。各メンバーシップは、入会時にニーズに合わせてカスタマイズでき、契約の柔軟性により、メンバーのグローバルな航空機フリートにアクセスでき、フライトミッションに基づいて特定の航空機タイプをリクエストすることも可能です。',
    discussHeading: 'メンバーシップについて話し合う',
    discussDesc: 'Sivitajetsは、お客様の飛行要件に合わせた柔軟で投資不要のソリューションを提供します。Sivitajetsは、メンバーに一貫したブランドのスーパーミッドサイズ、長距離、超長距離の航空機のフリートへのアクセスと、比類のないサービスを提供します。',
    fleetOverlaySub: 'あなたの完璧な航空機',
    fleetOverlayTitle: 'あなたのフリートへようこそ',
    fleetOverlayDesc: 'あらゆる航続距離とサイズの比類ない航空機群で、30分から17時間のノンストップ飛行、あらゆる旅にぴったりの航空機をいつでもどこでもご用意しています。',
    fleetOverlayBtn: 'フリートを見る',
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
    submit: '送信'
  },
  ar: { 
    heroTitle: 'عضوية طائرتنا الخاصة',
    heroSub: 'عضوية مصممة خصيصًا لتلبية احتياجات وتفضيلات طيرانك.',
    membershipHeading: ' عضويتنا',
    membershipDesc: 'جميع العضويات خالية من الاستثمار وتأتي مع مجموعة من المزايا الحصرية بما في ذلك الوصول إلى Private World وخدمات VistaJet الشهيرة على متن الطائرة. يمكن تخصيص كل عضوية وفقًا لاحتياجاتك عند الانضمام، مع مرونة في عقدك للوصول إلى الأسطول العالمي للطائرات للأعضاء، بما في ذلك طلب نوع طائرة معين بناءً على مهمة الطيران الخاصة بك.',
    discussHeading: 'ناقش عضويتك',
    discussDesc: 'تقدم Sivitajets حلولاً مرنة وخالية من الاستثمار لتناسب متطلبات الطيران الخاصة بك. تقدم Sivitajets لأعضائها إمكانية الوصول إلى أسطول ثابت وذو علامة تجارية من الطائرات فائقة المتوسطة والبعيدة المدى والطويلة المدى مع خدمة لا تضاهى.',
    fleetOverlaySub: 'طائرتك المثالية',
    fleetOverlayTitle: 'مرحبًا بكم في أسطولكم',
    fleetOverlayDesc: 'مع أسطول لا يضاهى من الطائرات بجميع المديات والأحجام، والسفر من 30 دقيقة إلى 17 ساعة دون توقف، لدينا الطائرة المثالية لكل رحلة، في أي وقت وفي أي مكان.',
    fleetOverlayBtn: 'اكتشف الأسطول',
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
    submit: 'إرسال'
  },
  fr: { 
    heroTitle: 'Nos adhésions aux jets privés',
    heroSub: 'Des adhésions conçues uniquement pour vos besoins et préférences de vol.',
    membershipHeading: 'Notre adhésion',
    membershipDesc: 'Toutes les adhésions sont sans investissement et offrent une gamme d’avantages exclusifs, notamment l’accès à Private World et aux services emblématiques à bord de VistaJet. Chaque adhésion peut être personnalisée selon vos besoins lors de votre adhésion, avec une flexibilité dans votre contrat pour accéder à la flotte mondiale d’aéronefs des Membres, y compris la demande d’un type d’aéronef spécifique en fonction de votre mission de vol.',
    discussHeading: 'Discutez de votre adhésion',
    discussDesc: 'Sivitajets propose des solutions flexibles sans investissement pour répondre à vos besoins de vol. Sivitajets offre à ses membres l’accès à une flotte cohérente et de marque d’avions super-moyens, long-courriers et ultra-long-courriers avec un service inégalé.',
    fleetOverlaySub: 'Votre avion parfait',
    fleetOverlayTitle: 'Bienvenue dans votre flotte',
    fleetOverlayDesc: 'Avec une flotte inégalée d’avions de toutes portées et tailles, voyageant de 30 minutes à 17 heures sans escale, nous avons l’avion parfait pour chaque voyage, à tout moment, n’importe où.',
    fleetOverlayBtn: 'Découvrir la flotte',
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
    submit: 'Envoyer'
  },
  pt: { 
    heroTitle: 'Nossas Assinaturas de Jato Privado',
    heroSub: 'Assinaturas projetadas exclusivamente para suas necessidades e preferências de voo.',
    membershipHeading: 'Nossa Assinatura',
    membershipDesc: 'Todas as assinaturas são livres de investimento e vêm com uma gama de benefícios exclusivos, incluindo acesso ao Private World e aos serviços icônicos de bordo da VistaJet. Cada assinatura pode ser personalizada de acordo com suas necessidades no momento da adesão, com flexibilidade em seu contrato para acessar a frota global de aeronaves dos Membros, incluindo a solicitação de um tipo específico de aeronave com base em sua missão de voo.',
    discussHeading: 'Discuta sua assinatura',
    discussDesc: 'A Sivitajets oferece soluções flexíveis e sem investimento para atender às suas necessidades de voo. A Sivitajets oferece aos seus Membros acesso a uma frota consistente e com marca própria de aeronaves de médio porte, longo alcance e ultralongo alcance, com serviço incomparável.',
    fleetOverlaySub: 'Sua aeronave perfeita',
    fleetOverlayTitle: 'Bem-vindo à sua frota',
    fleetOverlayDesc: 'Com uma frota incomparável de aeronaves de todos os alcances e tamanhos, viajando de 30 minutos a 17 horas sem escalas, temos a aeronave perfeita para cada jornada, em qualquer lugar e a qualquer momento.',
    fleetOverlayBtn: 'Descobrir frota',
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
    submit: 'Enviar'
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

function Membership({ onBack, language = 'en', setLanguage, onFleetClick, onExperienceClick }) {
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
  const t = membershipTranslations[language] || membershipTranslations.en;

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
      <nav className="sticky top-0 z-50 bg-white shadow-md py-3 sm:py-4 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <button onClick={() => setMenuOpen(true)} className="p-2 rounded-md hover:bg-gray-100 focus:outline-none" aria-label="Menu">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul className="hidden md:flex gap-4 lg:gap-6" style={{ fontFamily: "Apple Garamond, sans-serif" }}>
              <li><button onClick={() => onBack()} className="hover:text-blue-600 text-sm lg:text-base">Home</button></li>
              <li><button onClick={onFleetClick} className="hover:text-blue-600 text-sm lg:text-base">Fleet</button></li>
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
            {/* Changed to regular <a> tags – no Router dependency */}
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
                <li><button onClick={() => { onFleetClick(); setMenuOpen(false); }} className="block text-xl hover:text-blue-600">Fleet</button></li>
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

      {/* Rest of the content – unchanged from your original */}
      <div className="relative h-[60vh] sm:min-h-[70vh] w-full overflow-hidden">
        <img 
          src="yuri.jpg" 
          alt="Membership Hero" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
            {t.heroTitle}
          </h1>
          <p className="text-sm sm:text-xl md:text-2xl text-white" style={{ fontFamily: "Afacad, sans-serif" }}>
            {t.heroSub}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 sm:mt-20 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-4 sm:mb-6" style={{ fontFamily: "Apple Garamond, serif" }}>
          {t.membershipHeading}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-4xl mx-auto" style={{ fontFamily: "Afacad, sans-serif" }}>
          {t.membershipDesc}
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12 sm:mt-20 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8" style={{ fontFamily: "Apple Garamond, serif" }}>
          {t.discussHeading}
        </h1>
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="mx-auto w-32 sm:w-48 md:w-64 h-auto mb-4 sm:mb-6"
        />
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto" style={{ fontFamily: "Afacad, sans-serif" }}>
          {t.discussDesc}
        </p>
      </div>

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
              <label htmlFor="marketingConsent" className="text-gray-700 text-xs sm:text-sm" style={{ fontFamily: "Afacad, sans-serif" }}>I would like to receive marketing communications from SivitaJet by email, post or text message.</label>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <input type="checkbox" id="privacyConsent" name="privacyConsent" checked={formData.privacyConsent} onChange={handleInputChange} required className="mt-1 w-4 h-4 text-blue-600" />
              <label htmlFor="privacyConsent" className="text-gray-700 text-xs sm:text-sm" style={{ fontFamily: "Afacad, sans-serif" }}>Your personal data will be processed in accordance with our <a href="#" className="text-blue-600 hover:underline">Privacy Notice</a>.</label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>
              {t.submit}
            </button>
          </form>
        </div>
      </div>

      <div className="relative h-[60vh] sm:min-h-[70vh] w-full overflow-hidden">
        <img 
          src="ramon.jpg" 
          alt="Luxury jet interior" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-white mb-1 sm:mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>
            {t.fleetOverlaySub}
          </h3>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
            {t.fleetOverlayTitle}
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-2xl mx-auto mb-4 sm:mb-6" style={{ fontFamily: "Afacad, sans-serif" }}>
            {t.fleetOverlayDesc}
          </p>
          <button 
            onClick={onFleetClick}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold text-sm sm:text-base"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            {t.fleetOverlayBtn}
          </button>
        </div>
      </div>

      <footer className="bg-blue-700 text-white mt-12 sm:mt-16 py-6 sm:py-8" style={{ fontFamily: "Afacad, sans-serif" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <button onClick={onFleetClick} className="hover:underline text-sm sm:text-base">Fleet</button>
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
            &copy; 2025 Airline. All rights reserved.
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}

export default Membership;