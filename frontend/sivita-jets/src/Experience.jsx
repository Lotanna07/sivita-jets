import React, { useState, useEffect } from 'react';
import Chatbot from './Chatbot';

const experienceTranslations = {
  en: {
    home: 'Home',
    fleet: 'Fleet',
    experience: 'Experience',
    hero1Title: 'The ultimate cabin experience',
    hero1Sub: 'Tailored and unparalleled service',
    hero1Btn: 'Enquire Now',
    mainHeading: 'Private jet in-flight services',
    mainDesc: 'sivitaJet redefines private aviation with its exquisite cabin design and world-class in-flight services. Stepping aboard a sivitaJet aircraft is like entering a luxurious home in the sky, where every detail is meticulously crafted to ensure comfort, productivity, and relaxation.',
    quote: '"At the heart of the service provided by sivitaJet Cabin Hosts is a genuine care for passengers and the passion for service excellence. We want you to feel as comfortable as possible on board — no request is too large or too small."',
    gemmaHeading: 'GEMMA ANNE-JONES, CABIN TRAINING & DEVELOPMENT MANAGER',
    homeAwayHeading: 'A home away from home',
    homeAwayDesc: 'Sivitajets cabin design, consistent across the whole fleet, welcomes travelers all over the world. Passengers can use a fully enabled business suite or relax in a restful family space. The cabins are equipped for all needs.',
    teamHeading: 'The most experienced team',
    teamDesc: 'To ensure passengers enjoy unrivaled service as standard, every Sivitajet flight has at least one Cabin Host as well as two pilots in the flight deck. Pilots only fly one aircraft type, to ensure maximum familiarity and instinctive reactions to any situation, and train twice a year. VistaJet Ltd. Cabin Crew are trained by the British Butler Institute, MedAire, Norland College and Wine & Spirit Education Trust.',
    diningHeading: 'Private Dining',
    diningDesc: 'Our Private Dining team manages our on-board catering, providing you with extensive dining options — from exclusive menus curated by world renowned chefs for SivitaJets, catering from Michelin star and partner restaurants globally, to a personalized menu prepared by sivitaJet’s in-house nutritionist or your favorite dish.',
    wineHeading: 'Wine in the sky',
    wineDesc: 'A search for the perfect glass of wine at 40,000 feet inspired a Wine Program that offers the finest wines that taste the best at altitude. Sourced from some of the world’s most iconic vineyards, all sivitaJet passengers can enjoy our wines that take advantage of the effects of altitude to perform best in the sky.',
    adventuresHeading: 'Adventures in the sky',
    adventuresDesc: 'SivitaJet offers the most extensive travelers\' program for children. Bringing to life extraordinary experiences that combine unique entertainment and educational elements, it is tailored to your child\'s age and interests to make every journey memorable.',
    hero2Title: 'Experience the Extraordinary',
    hero2Sub: 'Discover a new standard of private aviation',
    hero2Btn: 'Explore More',
    footerFleet: 'Fleet',
    footerMembership: 'Membership',
    footerExperience: 'Experience',
    footerContact: 'Contact Us',
    footerCopyright: '© 2025 Airline. All rights reserved.',
  },
  es: {
    home: 'Inicio',
    fleet: 'Flota',
    experience: 'Experiencia',
    hero1Title: 'La experiencia de cabina definitiva',
    hero1Sub: 'Servicio personalizado e incomparable',
    hero1Btn: 'Consultar ahora',
    mainHeading: 'Servicios a bordo de jet privado',
    mainDesc: 'sivitaJet redefine la aviación privada con su exquisito diseño de cabina y servicios de clase mundial a bordo. Subir a bordo de un avión sivitaJet es como entrar en un hogar de lujo en el cielo, donde cada detalle está meticulosamente diseñado para garantizar comodidad, productividad y relajación.',
    quote: '"En el corazón del servicio proporcionado por los anfitriones de cabina de sivitaJet hay un cuidado genuino por los pasajeros y la pasión por la excelencia en el servicio. Queremos que se sienta lo más cómodo posible a bordo — ninguna petición es demasiado grande o pequeña."',
    gemmaHeading: 'GEMMA ANNE-JONES, GERENTE DE FORMACIÓN Y DESARROLLO DE CABINA',
    homeAwayHeading: 'Un hogar lejos del hogar',
    homeAwayDesc: 'El diseño de cabina de Sivitajets, consistente en toda la flota, recibe a viajeros de todo el mundo. Los pasajeros pueden usar una suite de negocios completamente equipada o relajarse en un espacio familiar. Las cabinas están equipadas para todas las necesidades.',
    teamHeading: 'El equipo más experimentado',
    teamDesc: 'Para garantizar que los pasajeros disfruten de un servicio inigualable como estándar, cada vuelo de Sivitajet tiene al menos un anfitrión de cabina y dos pilotos en la cabina de vuelo. Los pilotos solo vuelan un tipo de aeronave, para garantizar la máxima familiaridad y reacciones instintivas ante cualquier situación, y entrenan dos veces al año. La tripulación de cabina de VistaJet Ltd. está capacitada por el British Butler Institute, MedAire, Norland College y Wine & Spirit Education Trust.',
    diningHeading: 'Cena privada',
    diningDesc: 'Nuestro equipo de cena privada gestiona la catering a bordo, ofreciéndole amplias opciones gastronómicas — desde menús exclusivos seleccionados por chefs de renombre mundial para SivitaJets, catering de restaurantes con estrella Michelin y socios globales, hasta un menú personalizado preparado por el nutricionista interno de sivitaJet o su plato favorito.',
    wineHeading: 'Vino en el cielo',
    wineDesc: 'La búsqueda de la copa de vino perfecta a 40,000 pies inspiró un programa de vinos que ofrece los mejores vinos que saben mejor a gran altitud. Obtenidos de algunos de los viñedos más emblemáticos del mundo, todos los pasajeros de sivitaJet pueden disfrutar de nuestros vinos que aprovechan los efectos de la altitud para rendir mejor en el cielo.',
    adventuresHeading: 'Aventuras en el cielo',
    adventuresDesc: 'SivitaJet ofrece el programa de viajes más extenso para niños. Dando vida a experiencias extraordinarias que combinan entretenimiento único y elementos educativos, está adaptado a la edad e intereses de su hijo para hacer que cada viaje sea memorable.',
    hero2Title: 'Experimente lo extraordinario',
    hero2Sub: 'Descubra un nuevo estándar de aviación privada',
    hero2Btn: 'Explorar más',
    footerFleet: 'Flota',
    footerMembership: 'Membresía',
    footerExperience: 'Experiencia',
    footerContact: 'Contáctenos',
    footerCopyright: '© 2025 Aerolínea. Todos los derechos reservados.',
  },
  ja: {
    home: 'ホーム',
    fleet: '機材',
    experience: '体験',
    hero1Title: '究極のキャビン体験',
    hero1Sub: 'オーダーメイドの比類なきサービス',
    hero1Btn: 'お問い合わせ',
    mainHeading: 'プライベートジェット機内サービス',
    mainDesc: 'sivitaJetは、絶妙なキャビンデザインとワールドクラスの機内サービスでプライベート航空を再定義します。sivitaJetの航空機に搭乗することは、まるで空の豪華な我が家に入るようなもので、細部に至るまで快適さ、生産性、リラクゼーションを確保するために細心の注意を払って作られています。',
    quote: '「sivitaJetキャビンホストが提供するサービスの中心には、乗客への真のケアとサービス卓越性への情熱があります。私たちはお客様に機内でできるだけ快適に過ごしていただきたいと考えています。どんなリクエストも大きすぎたり小さすぎたりすることはありません。」',
    gemmaHeading: 'ジェマ・アン＝ジョーンズ、キャビントレーニング＆ディベロップメントマネージャー',
    homeAwayHeading: '家のような空間',
    homeAwayDesc: 'Sivitajetsのキャビンデザインは、全機隊で一貫しており、世界中の旅行者を歓迎します。乗客は完全装備のビジネススイートを使用したり、リラックスしたファミリースペースでくつろぐことができます。キャビンはあらゆるニーズに対応するために装備されています。',
    teamHeading: '最も経験豊富なチーム',
    teamDesc: '乗客が標準として比類のないサービスを楽しめるように、すべてのSivitajetフライトには少なくとも1名のキャビンホストと2名のパイロットがフライトデッキにいます。パイロットは1種類の航空機のみを操縦し、あらゆる状況に最大限の熟悉と本能的反応を確保し、年に2回訓練を受けます。VistaJet Ltd.の客室乗務員は、British Butler Institute、MedAire、Norland College、Wine & Spirit Education Trustによって訓練されています。',
    diningHeading: 'プライベートダイニング',
    diningDesc: 'プライベートダイニングチームは機内のケータリングを管理し、幅広いダイニングオプションを提供します。世界的に有名なシェフがSivitaJetsのためにキュレーションした特別メニュー、ミシュランスターおよびパートナーレストランからのケータリングから、sivitaJet社内の栄養士またはお好みの料理によって準備されたパーソナライズされたメニューまで。',
    wineHeading: '空のワイン',
    wineDesc: '40,000フィートでの完璧なワイングラスを求めて、高度で最も美味しい最高級ワインを提供するワインプログラムが生まれました。世界で最も象徴的なブドウ園から調達されたすべてのsivitaJet乗客は、高度の影響を利用して空で最高のパフォーマンスを発揮するワインを楽しむことができます。',
    adventuresHeading: '空の冒険',
    adventuresDesc: 'SivitaJetは、子供向けの最も充実した旅行者プログラムを提供しています。ユニークなエンターテイメントと教育的要素を組み合わせた特別な体験を提供し、お子様の年齢と興味に合わせて調整され、あらゆる旅を思い出深いものにします。',
    hero2Title: '特別な体験を',
    hero2Sub: '新しいプライベート航空の基準を発見',
    hero2Btn: 'さらに詳しく',
    footerFleet: '機材',
    footerMembership: 'メンバーシップ',
    footerExperience: '体験',
    footerContact: 'お問い合わせ',
    footerCopyright: '© 2025 航空会社. 無断転載を禁じます。',
  },
  ar: {
    home: 'الرئيسية',
    fleet: 'الأسطول',
    experience: 'التجربة',
    hero1Title: 'تجربة الكابينة النهائية',
    hero1Sub: 'خدمة مخصصة لا تضاهى',
    hero1Btn: 'استفسر الآن',
    mainHeading: 'خدمات الطائرات الخاصة أثناء الطيران',
    mainDesc: 'تعيد sivitaJet تعريف الطيران الخاص بتصميمها الرائع للمقصورة وخدماتها العالمية على متن الطائرة. الصعود على متن طائرة sivitaJet يشبه دخول منزل فاخر في السماء، حيث تم تصميم كل التفاصيل بدقة لضمان الراحة والإنتاجية والاسترخاء.',
    quote: '"في قلب الخدمة التي يقدمها مضيفو مقصورة sivitaJet يكمن الاهتمام الحقيقي بالركاب والشغف بالتميز في الخدمة. نريدك أن تشعر بأقصى درجات الراحة على متن الطائرة — لا يوجد طلب كبير جدًا أو صغير جدًا."',
    gemmaHeading: 'جيما آن جونز، مديرة التدريب وتطوير الكابينة',
    homeAwayHeading: 'بيت بعيد عن المنزل',
    homeAwayDesc: 'تصميم كابينة Sivitajets، المتسق عبر الأسطول بأكمله، يرحب بالمسافرين من جميع أنحاء العالم. يمكن للركاب استخدام جناح أعمال مجهز بالكامل أو الاسترخاء في مساحة عائلية مريحة. الكبائن مجهزة لجميع الاحتياجات.',
    teamHeading: 'الفريق الأكثر خبرة',
    teamDesc: 'لضمان استمتاع الركاب بخدمة لا تضاهى كمعيار، تحتوي كل رحلة من رحلات Sivitajet على مضيف كابينة واحد على الأقل بالإضافة إلى طيارين في قمرة القيادة. الطيارون يطيرون بنوع واحد فقط من الطائرات، لضمان أقصى درجات الألفة وردود الفعل الغريزية لأي موقف، ويتدربون مرتين في السنة. يتم تدريب طاقم المقصورة في VistaJet Ltd. من قبل معهد الخدم البريطاني، MedAire، كلية نورلاند وصندوق تعليم النبيذ والروح.',
    diningHeading: 'تناول الطعام الخاص',
    diningDesc: 'يدير فريق تناول الطعام الخاص لدينا خدمات التموين على متن الطائرة، ويوفر لك خيارات طعام واسعة — من قوائم حصرية من إعداد طهاة عالميين لـ SivitaJets، وتقديم الطعام من مطاعم ميشلان والشركاء العالمية، إلى قائمة طعام مخصصة أعدها أخصائي التغذية الداخلي في sivitaJet أو طبقك المفضل.',
    wineHeading: 'النبيذ في السماء',
    wineDesc: 'ألهم البحث عن كأس النبيذ المثالي على ارتفاع 40,000 قدم برنامج نبيذ يقدم أفضل أنواع النبيذ التي تتمتع بأفضل طعم على ارتفاعات عالية. يتم الحصول عليها من بعض مزارع الكروم الأكثر شهرة في العالم، ويمكن لجميع ركاب sivitaJet الاستمتاع بنبيذنا الذي يستفيد من تأثيرات الارتفاع لأداء أفضل في السماء.',
    adventuresHeading: 'مغامرات في السماء',
    adventuresDesc: 'تقدم SivitaJet برنامج المسافرين الأكثر شمولاً للأطفال. من خلال إحياء تجارب استثنائية تجمع بين الترفيه الفريد والعناصر التعليمية، تم تصميمها وفقًا لعمر طفلك واهتماماته لجعل كل رحلة لا تُنسى.',
    hero2Title: 'جرب الاستثنائي',
    hero2Sub: 'اكتشف معيارًا جديدًا للطيران الخاص',
    hero2Btn: 'استكشف المزيد',
    footerFleet: 'الأسطول',
    footerMembership: 'العضوية',
    footerExperience: 'التجربة',
    footerContact: 'اتصل بنا',
    footerCopyright: '© 2025 الخطوط الجوية. جميع الحقوق محفوظة.',
  },
  fr: {
    home: 'Accueil',
    fleet: 'Flotte',
    experience: 'Expérience',
    hero1Title: 'L’expérience cabine ultime',
    hero1Sub: 'Service sur mesure et inégalé',
    hero1Btn: 'Demander maintenant',
    mainHeading: 'Services à bord d’avions privés',
    mainDesc: 'sivitaJet redéfinit l’aviation privée avec son design de cabine exquis et ses services de classe mondiale à bord. Monter à bord d’un avion sivitaJet, c’est comme entrer dans une maison de luxe dans le ciel, où chaque détail est méticuleusement conçu pour garantir confort, productivité et détente.',
    quote: '« Au cœur du service fourni par les hôtes de cabine sivitaJet se trouve un véritable souci des passagers et la passion de l’excellence du service. Nous voulons que vous vous sentiez le plus à l’aise possible à bord — aucune demande n’est trop grande ou trop petite. »',
    gemmaHeading: 'GEMMA ANNE-JONES, RESPONSABLE DE LA FORMATION ET DU DÉVELOPPEMENT DE LA CABINE',
    homeAwayHeading: 'Un chez-soi loin de chez soi',
    homeAwayDesc: 'La conception des cabines Sivitajets, cohérente sur toute la flotte, accueille les voyageurs du monde entier. Les passagers peuvent utiliser une suite entièrement équipée pour les affaires ou se détendre dans un espace familial reposant. Les cabines sont équipées pour tous les besoins.',
    teamHeading: 'L’équipe la plus expérimentée',
    teamDesc: 'Pour que les passagers bénéficient d’un service inégalé en standard, chaque vol Sivitajet compte au moins un hôte de cabine ainsi que deux pilotes dans le poste de pilotage. Les pilotes ne pilotent qu’un seul type d’avion, afin de garantir une familiarité maximale et des réactions instinctives face à toute situation, et ils s’entraînent deux fois par an. L’équipage de cabine de VistaJet Ltd. est formé par le British Butler Institute, MedAire, Norland College et le Wine & Spirit Education Trust.',
    diningHeading: 'Dîner privé',
    diningDesc: 'Notre équipe de restauration privée gère la restauration à bord, vous offrant de nombreuses options de restauration — des menus exclusifs organisés par des chefs de renommée mondiale pour SivitaJets, la restauration de restaurants étoilés Michelin et partenaires mondiaux, à un menu personnalisé préparé par le nutritionniste interne de sivitaJet ou votre plat préféré.',
    wineHeading: 'Vin dans le ciel',
    wineDesc: 'La recherche du verre de vin parfait à 40 000 pieds a inspiré un programme vinicole qui offre les meilleurs vins qui ont le meilleur goût en altitude. Provenant de certains des vignobles les plus emblématiques du monde, tous les passagers sivitaJet peuvent profiter de nos vins qui tirent parti des effets de l’altitude pour obtenir les meilleures performances dans le ciel.',
    adventuresHeading: 'Aventures dans le ciel',
    adventuresDesc: 'SivitaJet propose le programme de voyage le plus complet pour les enfants. Donnant vie à des expériences extraordinaires qui allient divertissement unique et éléments éducatifs, il est adapté à l’âge et aux intérêts de votre enfant pour rendre chaque voyage mémorable.',
    hero2Title: 'Vivez l’extraordinaire',
    hero2Sub: 'Découvrez une nouvelle norme d’aviation privée',
    hero2Btn: 'Explorer plus',
    footerFleet: 'Flotte',
    footerMembership: 'Adhésion',
    footerExperience: 'Expérience',
    footerContact: 'Contactez-nous',
    footerCopyright: '© 2025 Compagnie aérienne. Tous droits réservés.',
  },
  pt: {
    home: 'Início',
    fleet: 'Frota',
    experience: 'Experiência',
    hero1Title: 'A experiência de cabine definitiva',
    hero1Sub: 'Serviço personalizado e incomparável',
    hero1Btn: 'Consultar agora',
    mainHeading: 'Serviços a bordo de jato particular',
    mainDesc: 'A sivitaJet redefine a aviação privada com seu requintado design de cabine e serviços de classe mundial a bordo. Embarcar em uma aeronave sivitaJet é como entrar em uma casa luxuosa no céu, onde cada detalhe é meticulosamente elaborado para garantir conforto, produtividade e relaxamento.',
    quote: '"No coração do serviço prestado pelos anfitriões de cabine da sivitaJet está um cuidado genuíno pelos passageiros e a paixão pela excelência do serviço. Queremos que você se sinta o mais confortável possível a bordo — nenhum pedido é grande demais ou pequeno demais."',
    gemmaHeading: 'GEMMA ANNE-JONES, GERENTE DE TREINAMENTO E DESENVOLVIMENTO DE CABINE',
    homeAwayHeading: 'Um lar longe de casa',
    homeAwayDesc: 'O design de cabine da Sivitajets, consistente em toda a frota, acolhe viajantes de todo o mundo. Os passageiros podem usar uma suíte de negócios totalmente equipada ou relaxar em um espaço familiar. As cabines são equipadas para todas as necessidades.',
    teamHeading: 'A equipe mais experiente',
    teamDesc: 'Para garantir que os passageiros desfrutem de um serviço incomparável como padrão, cada voo da Sivitajet tem pelo menos um anfitrião de cabine, bem como dois pilotos na cabine de comando. Os pilotos voam apenas um tipo de aeronave, para garantir familiaridade máxima e reações instintivas a qualquer situação, e treinam duas vezes por ano. A tripulação de cabine da VistaJet Ltd. é treinada pelo British Butler Institute, MedAire, Norland College e Wine & Spirit Education Trust.',
    diningHeading: 'Jantar privado',
    diningDesc: 'Nossa equipe de jantar privado gerencia o catering a bordo, oferecendo amplas opções gastronômicas — desde menus exclusivos selecionados por chefs mundialmente renomados para SivitaJets, catering de restaurantes com estrela Michelin e parceiros globais, até um menu personalizado preparado pelo nutricionista interno da sivitaJet ou seu prato favorito.',
    wineHeading: 'Vinho no céu',
    wineDesc: 'A busca pela taça de vinho perfeita a 40.000 pés inspirou um programa de vinhos que oferece os melhores vinhos que têm o melhor sabor em altitude. Obtidos de alguns dos vinhedos mais emblemáticos do mundo, todos os passageiros da sivitaJet podem desfrutar de nossos vinhos que aproveitam os efeitos da altitude para ter o melhor desempenho no céu.',
    adventuresHeading: 'Aventuras no céu',
    adventuresDesc: 'A SivitaJet oferece o programa de viajantes mais extenso para crianças. Dando vida a experiências extraordinárias que combinam entretenimento único e elementos educacionais, é adaptado à idade e interesses do seu filho para tornar cada jornada memorável.',
    hero2Title: 'Experimente o extraordinário',
    hero2Sub: 'Descubra um novo padrão de aviação privada',
    hero2Btn: 'Explorar mais',
    footerFleet: 'Frota',
    footerMembership: 'Assinatura',
    footerExperience: 'Experiência',
    footerContact: 'Contato',
    footerCopyright: '© 2025 Companhia Aérea. Todos os direitos reservados.',
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

function Experience({ onBack, language = 'en', setLanguage, onFleetClick, onMembershipClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = experienceTranslations[language] || experienceTranslations.en;

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
              <li><button onClick={onBack} className="hover:text-blue-600 text-sm lg:text-base">{t.home}</button></li>
              <li><button onClick={onFleetClick} className="hover:text-blue-600 text-sm lg:text-base">{t.fleet}</button></li>
              <li><span className="cursor-default text-sm lg:text-base">{t.experience}</span></li>
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
            {/* Changed to regular <a> tags – navigate to /auth */}
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
                <li><button onClick={() => { onBack(); setMenuOpen(false); }} className="block text-xl hover:text-blue-600">{t.home}</button></li>
                <li><button onClick={() => { onFleetClick(); setMenuOpen(false); }} className="block text-xl hover:text-blue-600">{t.fleet}</button></li>
                <li><span className="block text-xl cursor-default">{t.experience}</span></li>
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

      {/* ========== BIG IMAGE HERO (first) ========== */}
      <div className="relative h-[60vh] sm:min-h-[70vh] w-full overflow-hidden">
        <img
          src="richard.jpg"
          alt="Luxury flight experience"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-between items-center text-center px-4 py-8 sm:py-12">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
              {t.hero1Title}
            </h1>
            <p className="text-sm sm:text-xl md:text-2xl text-white" style={{ fontFamily: "Afacad, sans-serif" }}>
              {t.hero1Sub}
            </p>
          </div>
          <button className="w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold text-sm sm:text-base lg:text-lg" style={{ fontFamily: "Afacad, sans-serif" }}>
            {t.hero1Btn}
          </button>
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "Apple Garamond, serif" }}>
          {t.mainHeading}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-10" style={{ fontFamily: "Afacad, sans-serif" }}>
          {t.mainDesc}
        </p>

        <div className="flex justify-center mb-6 sm:mb-8">
          <img src="WhatsApp2.jpeg" alt="Private jet interior" className="w-48 sm:w-56 md:w-64 rounded-lg shadow-md object-cover mx-auto" />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-12" style={{ fontFamily: "Afacad, sans-serif" }}>
          {t.quote}
        </p>

        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-16" style={{ fontFamily: "Apple Garamond, serif" }}>
          {t.gemmaHeading}
        </h1>
      </div>

      {/* ========== A HOME AWAY FROM HOME ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-5 sm:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                {t.homeAwayHeading}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                {t.homeAwayDesc}
              </p>
            </div>
            <div className="md:w-2/5">
              <img src="Whatat.jpeg" alt="Luxury cabin interior" className="w-full h-64 sm:h-80 md:h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* ========== THE MOST EXPERIENCED TEAM ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img src="WhatsAppImageat.jpeg" alt="Experienced team" className="w-full h-64 sm:h-80 md:h-full object-cover" />
            </div>
            <div className="flex-1 p-5 sm:p-8 text-center md:text-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                {t.teamHeading}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                {t.teamDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== PRIVATE DINING ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-5 sm:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                {t.diningHeading}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                {t.diningDesc}
              </p>
            </div>
            <div className="md:w-2/5">
              <img src="WhatsApp Image3.jpeg" alt="Private dining" className="w-full h-64 sm:h-80 md:h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* ========== WINE IN THE SKY ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img src="WhatsAppat5.jpeg" alt="Wine tasting" className="w-full h-64 sm:h-80 md:h-full object-cover" />
            </div>
            <div className="flex-1 p-5 sm:p-8 text-center md:text-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                {t.wineHeading}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                {t.wineDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== ADVENTURES IN THE SKY ========== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-5 sm:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                {t.adventuresHeading}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                {t.adventuresDesc}
              </p>
            </div>
            <div className="md:w-2/5">
              <img src="What03.jpeg" alt="Children adventure" className="w-full h-64 sm:h-80 md:h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* ========== SECOND BIG IMAGE ========== */}
      <div className="relative h-[60vh] sm:min-h-[70vh] w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Luxury aviation" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
            {t.hero2Title}
          </h2>
          <p className="text-sm sm:text-xl md:text-2xl text-white mb-4 sm:mb-6" style={{ fontFamily: "Afacad, sans-serif" }}>
            {t.hero2Sub}
          </p>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold text-sm sm:text-base" style={{ fontFamily: "Afacad, sans-serif" }}>
            {t.hero2Btn}
          </button>
        </div>
      </div>

      {/* ========== RESPONSIVE FOOTER ========== */}
      <footer className="bg-blue-700 text-white mt-12 sm:mt-16 py-6 sm:py-8" style={{ fontFamily: "Afacad, sans-serif" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <button onClick={onFleetClick} className="hover:underline text-sm sm:text-base">{t.footerFleet}</button>
            <button onClick={onMembershipClick} className="hover:underline text-sm sm:text-base">{t.footerMembership}</button>
            <span className="cursor-default text-sm sm:text-base">{t.footerExperience}</span>
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

      {/* Chatbot component – appears on this page */}
      <Chatbot />
    </div>
  );
}

export default Experience;