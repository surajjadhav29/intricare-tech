const FooterComponent = () => {
  // Footer data organized in arrays
  const footerData = {
    // Solutions and Services column
    solutions: {
      title: "Çözüm ve Hizmetler",
      links: [
        { id: 1, text: "Yazılım Geliştirme", href: "/yazilim-gelistirme" },
        { id: 2, text: "Outsourcing", href: "/outsourcing" },
        {
          id: 3,
          text: "Kalite ve Süreç Yönetimi",
          href: "/kalite-surec-yonetimi",
        },
        { id: 4, text: "Danışmanlık", href: "/danismanlik" },
        { id: 5, text: "IoT Destekli Çözümler", href: "/iot-cozumler" },
      ],
    },
    // Products column
    products: {
      title: "Ürünler",
      links: [
        {
          id: 1,
          text: "Eğitim Yönetim Sistemi",
          href: "/egitim-yonetim-sistemi",
        },
        {
          id: 2,
          text: "İnsan Sermayesi Yönetim Sistemi",
          href: "/insan-sermayesi-yonetim",
        },
        {
          id: 3,
          text: "Müşteri İlişkileri Yönetim Sistemi",
          href: "/musteri-iliskileri-yonetim",
        },
        {
          id: 4,
          text: "İçerik Yönetim Sistemi",
          href: "/icerik-yonetim-sistemi",
        },
      ],
    },
    // Corporate column
    corporate: {
      title: "Kurumsal",
      links: [
        { id: 1, text: "Hakkımızda", href: "/hakkimizda" },
        { id: 2, text: "Belge ve Yetkinlikler", href: "/belge-yetkinlikler" },
        { id: 3, text: "İş Ortakları", href: "/is-ortaklari" },
      ],
    },
    // Contact column
    contact: {
      title: "İletişim",
      links: [
        { id: 1, text: "Bilgi İstek Formu", href: "/bilgi-istek-formu" },
        { id: 2, text: "Uzman Talep Formu", href: "/uzman-talep-formu" },
      ],
    },
  };

  // Social media links array
  const socialLinks = [
    {
      id: 1,
      name: "Medium",
      icon: "M",
      href: "#",
      bgColor: "bg-white/20",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: "in",
      href: "#",
      bgColor: "bg-white/20",
    },
    {
      id: 3,
      name: "Twitter",
      icon: "𝕏",
      href: "#",
      bgColor: "bg-white/20",
    },
    {
      id: 4,
      name: "Instagram",
      icon: "📷",
      href: "#",
      bgColor: "bg-white/20",
    },
    {
      id: 5,
      name: "Facebook",
      icon: "f",
      href: "#",
      bgColor: "bg-white/20",
    },
  ];

  // Copyright data
  const copyrightData = {
    text: "© Copyright 2010-2021 • Can Çevik",
    year: "2010-2021",
    company: "Can Çevik",
  };

  return (
    <footer className="bg-red-500 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Desktop Layout - 4 Columns */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 xl:gap-12 mb-12">
          {/* Solutions Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              {footerData.solutions.title}
            </h3>
            <ul className="space-y-3">
              {footerData.solutions.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm leading-relaxed"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              {footerData.products.title}
            </h3>
            <ul className="space-y-3">
              {footerData.products.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm leading-relaxed"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              {footerData.corporate.title}
            </h3>
            <ul className="space-y-3">
              {footerData.corporate.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm leading-relaxed"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              {footerData.contact.title}
            </h3>
            <ul className="space-y-3">
              {footerData.contact.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm leading-relaxed"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-8 mb-12">
          {/* Solutions Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {footerData.solutions.title}
            </h3>
            <ul className="space-y-2">
              {footerData.solutions.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {footerData.products.title}
            </h3>
            <ul className="space-y-2">
              {footerData.products.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {footerData.corporate.title}
            </h3>
            <ul className="space-y-2">
              {footerData.corporate.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {footerData.contact.title}
            </h3>
            <ul className="space-y-2">
              {footerData.contact.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-white/80 text-sm order-2 lg:order-1">
              {copyrightData.text}
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 order-1 lg:order-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className={`w-8 h-8 ${social.bgColor} rounded-full flex items-center justify-center text-white text-sm font-semibold hover:bg-white/30 transition-colors duration-300`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
