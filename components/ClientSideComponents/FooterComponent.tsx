import Link from "next/link";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";

const FooterComponent = () => {
  const footerData = {
    solutions: {
      title: "Çözüm ve Hizmetler",
      links: [
        { id: 1, text: "Yazılım Geliştirme", href: "/yazilim-gelistirme" },
        { id: 2, text: "Outsourcing", href: "/outsourcing" },
        {
          id: 3,
          text: "Kalite ve Süreç Yönetimi",
          href: "/",
        },
        { id: 4, text: "Danışmanlık", href: "/danismanlik" },
        { id: 5, text: "IoT Destekli Çözümler", href: "/" },
      ],
    },
    products: {
      title: "Ürünler",
      links: [
        {
          id: 1,
          text: "Eğitim Yönetim Sistemi",
          href: "/",
        },
        {
          id: 2,
          text: "İnsan Sermayesi Yönetim Sistemi",
          href: "/",
        },
        {
          id: 3,
          text: "Müşteri İlişkileri Yönetim Sistemi",
          href: "/",
        },
        {
          id: 4,
          text: "İçerik Yönetim Sistemi",
          href: "/",
        },
      ],
    },

    corporate: {
      title: "Kurumsal",
      links: [
        { id: 1, text: "Hakkımızda", href: "/" },
        { id: 2, text: "Belge ve Yetkinlikler", href: "/" },
        { id: 3, text: "İş Ortakları", href: "/" },
      ],
    },
    contact: {
      title: "İletişim",
      links: [
        { id: 1, text: "Bilgi İstek Formu", href: "/" },
        { id: 2, text: "Uzman Talep Formu", href: "/" },
      ],
    },
  };

  const copyrightData = {
    text: "© Copyright 2010-2021 • Can Çevik",
    year: "2010-2021",
    company: "Can Çevik",
  };

  return (
    <footer className="bg-red-500 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 xl:gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">
              {footerData.solutions.title}
            </h3>
            <ul className="space-y-5">
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
          <div>
            <h3 className="text-xl font-semibold mb-6">
              {footerData.products.title}
            </h3>
            <ul className="space-y-5">
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
          <div>
            <h3 className="text-xl font-semibold mb-6">
              {footerData.corporate.title}
            </h3>
            <ul className="space-y-5">
              {footerData.corporate.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm leading-relaxed">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">
              {footerData.contact.title}
            </h3>
            <ul className="space-y-5">
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
        <div className="lg:hidden space-y-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {footerData.solutions.title}
            </h3>
            <ul className="space-y-2">
              {footerData.solutions.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {footerData.products.title}
            </h3>
            <ul className="space-y-2">
              {footerData.products.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-white/80 text-sm order-2 lg:order-1">
              {copyrightData.text}
            </div>
            <div className="flex items-center gap-5 order-1 lg:order-2">
              <Link href='https://www.facebook.com/'>
                <CiFacebook  className="h-9 w-9 text-white" />
                </Link>
                 <Link href='https://www.instagram.com/accounts/login/?hl=en'>
                <SlSocialInstagram className="h-8 w-8 text-white" />
                </Link>
                   <Link href='https://x.com/login?'>
                <TfiTwitter className="h-8 w-8 text-white"  />
                </Link>
                   <Link href='https://in.linkedin.com/?mcid=6844056167778418689&src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418467_crid.657403558724_kw.linkedin%20login%20web_d.c_tid.kwd-849680790155_n.g_mt.e_geo.9198075&cid=&gad_source=1&gad_campaignid=14650114788&gbraid=0AAAAABKX7wHiWz3sAB_ZgSKo--xXdaAn1&gclid=CjwKCAjw3_PCBhA2EiwAkH_j4j6nYcV0APMKGTbKRGDkHvOVfoxCCjjYLxP3CEVzANlSGHjG-u-n0RoCT8cQAvD_BwE&gclsrc=aw.ds'>
                <CiLinkedin  className="h-8 w-8 text-white"   />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
