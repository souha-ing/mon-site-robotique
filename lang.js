const translations = {
  en: {
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
    study: "Study",
    team: "Our Team",
    propose: "Propose",
    createAccount: "Create account",
    heroTitle: "Where Education Meets Industrial Innovation",
    heroText:
      "For industries, Dextro cobots automate manufacturing, quality control, and packaging processes. For educators, they train tomorrow's engineers with industrial-grade robots.",
    seeProducts: "See our products",
    educationTitle: "Dextro for Education",
    robotEdu: "4-DOF Educational Robot",
    simulator: "3D Learning Simulator",
    kits: "Educational Kits",
    training: "Online Training"
  },
  fr: {
    home: "Accueil",
    products: "Produits",
    about: "À propos",
    contact: "Contact",
    study: "Étude",
    team: "Notre équipe",
    propose: "Proposer",
    createAccount: "Créer un compte",
    heroTitle: "L'éducation rencontre l'innovation industrielle",
    heroText:
      "Pour les industriels, les cobots Dextro automatisent les processus de fabrication, de contrôle qualité et de conditionnement. Pour les enseignants, ils forment les ingénieurs de demain avec des robots de qualité industrielle.",
    seeProducts: "Voir nos produits",
    educationTitle: "Dextro pour l’éducation",
    robotEdu: "Robot éducatif 4 DDL",
    simulator: "Simulateur 3D pour l'apprentissage",
    kits: "Kits pédagogiques",
    training: "Formation en ligne"
  },
  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    contact: "اتصل بنا",
    study: "الدراسة",
    team: "فريقنا",
    propose: "اقترح",
    createAccount: "إنشاء حساب",
    heroTitle: "حيث تلتقي التعليم بالابتكار الصناعي",
    heroText:
      "بالنسبة للصناعة، تقوم روبوتات ديكسترو بأتمتة عمليات التصنيع ومراقبة الجودة والتغليف. أما للمعلمين، فهي تساهم في تكوين مهندسي المستقبل باستخدام روبوتات بجودة صناعية.",
    seeProducts: "عرض منتجاتنا",
    educationTitle: "ديكسترو للتعليم",
    robotEdu: "روبوت تعليمي بأربع درجات",
    simulator: "محاكي ثلاثي الأبعاد للتعلم",
    kits: "عدة تعليمية",
    training: "تدريب عبر الإنترنت"
  },
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
