const translations = {
  en: {
    heroTitle: "Welcome to our company",
    heroSlogan: "Simple and powerful robots for education",
    navProducts: "Products",
    navEducation: "Education",
    navAbout: "About Us",
    cart: "Add to Cart",
    eduIntro: "For teachers, they make it easy to train the engineers of tomorrow with industrial-grade robots.",
    eduTitle: "Collaborative robots for all your needs",
    eduDesc: "ArmBot robots are 4-axis robotic arms designed to efficiently automate repetitive and low value-added tasks. Compact and intuitive, they can be quickly integrated into any industrial or educational environment. Their highly accessible software and compatibility with numerous accessories enable flexible and scalable automation, as well as effective learning."
  },
  fr: {
    heroTitle: "Bienvenue dans notre entreprise",
    heroSlogan: "Des robots simples et puissants pour l'éducation",
    navProducts: "Produits",
    navEducation: "Éducation",
    navAbout: "À propos",
    cart: "Ajouter au panier",
    eduIntro: "Pour les enseignants, ils permettent de former facilement les ingénieurs de demain, avec des robots de qualité industrielle.",
    eduTitle: "Des robots collaboratifs pour tous vos besoins",
    eduDesc: "Les robots ArmBot sont des bras robotiques 4 axes conçus pour automatiser efficacement les tâches répétitives et à faible valeur ajoutée. Compacts et intuitifs, ils s’intègrent rapidement dans tout environnement industriel ou scolaire. Leur logiciel ultra-accessible et leur compatibilité avec de nombreux accessoires permettent une automatisation flexible et évolutive, ainsi qu’un apprentissage efficace."
  },
  ar: {
    heroTitle: "مرحبًا بكم في شركتنا",
    heroSlogan: "روبوتات بسيطة وقوية للتعليم",
    navProducts: "المنتجات",
    navEducation: "التعليم",
    navAbout: "معلومات عنا",
    cart: "أضف إلى السلة",
    eduIntro: "بالنسبة للمعلمين، فهي تسهل تدريب مهندسي الغد باستخدام روبوتات بجودة صناعية.",
    eduTitle: "روبوتات تعاونية لكل احتياجاتكم",
    eduDesc: "روبوتات ArmBot هي أذرع روبوتية بأربع محاور مصممة لأتمتة المهام المتكررة ومنخفضة القيمة المضافة بكفاءة. مدمجة وبديهية، يمكن دمجها بسرعة في أي بيئة صناعية أو تعليمية. برنامجها سهل الاستخدام للغاية وتوافقها مع العديد من الملحقات يتيح أتمتة مرنة وقابلة للتطوير، وكذلك تعلمًا فعالًا."
  }
};

function changeLang(lang) {
  document.getElementById("hero-title").textContent = translations[lang].heroTitle;
  document.getElementById("hero-slogan").textContent = translations[lang].heroSlogan;
  document.getElementById("nav-products").textContent = translations[lang].navProducts;
  document.getElementById("nav-education").textContent = translations[lang].navEducation;
  document.getElementById("nav-about").textContent = translations[lang].navAbout;
  document.getElementById("cart-text").textContent = translations[lang].cart;
  document.getElementById("edu-intro").textContent = translations[lang].eduIntro;
  document.getElementById("edu-title").textContent = translations[lang].eduTitle;
  document.getElementById("edu-desc").textContent = translations[lang].eduDesc;

  // Support RTL pour l’arabe
  document.body.style.direction = (lang === "ar") ? "rtl" : "ltr";
}
