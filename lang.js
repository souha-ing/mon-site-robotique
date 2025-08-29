const translations = {
  en: {
    login: "Login",
    review: "Add Review",
    products: "Products",
    education: "Education",
    about: "About",
    welcome: "Welcome in our company",
    addtocart: "Add to Cart",
    slogan: "Simple and powerful robots for education"
  },
  fr: {
    login: "Connexion",
    review: "Ajouter un avis",
    products: "Produits",
    education: "Éducation",
    about: "À propos",
    welcome: "Bienvenue dans notre entreprise",
    addtocart: "Ajouter au panier",
    slogan: "Des robots simples et performants pour l’éducation"
  },
  ar: {
    login: "تسجيل الدخول",
    review: "إضافة رأي",
    products: "المنتجات",
    education: "التعليم",
    about: "حول",
    welcome: "مرحبا بكم في شركتنا",
    addtocart: "أضف إلى السلة",
    slogan: "روبوتات بسيطة وفعّالة للتعليم"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}
