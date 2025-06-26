"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { throttle } from "lodash";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";

const navigationItems = [
  { href: "/", label: "Çözüm ve Hizmetler" },
  { href: "/", label: "Ürünler" },
  { href: "/", label: "Teknolojiler" },
  { href: "/", label: "İnsan Kaynakları" },
  { href: "/", label: "Kurumsal" },
];

const HeaderComponent = () => {
  const [moveDown, setMoveDown] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(
    throttle(() => {
      if (window.scrollY > 40) {
        setMoveDown(true)
      } else {
        setMoveDown(false)
      }
    }, 0),
    [],
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }


  return (
    <header
      className={`${moveDown ? "bg-white fixed top-0 w-full z-50 shadow-md sm:h-16 h-12 lg:flex justify-center items-center" : "z-20 relative sm:py-5 sm:px-12"}`}
      style={{
        ...(moveDown
          ? {
              background: `linear-gradient(137deg, rgba(255, 255, 255, 0.70) 24.15%, rgba(255, 255, 255, 0.62) 125.95%)`,
              //  backdropFilter: "blur(10px)",
            }
          : null),
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-start">
        <div className="flex-shrink-0 hidden md:block">{/* Logo space */}</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className=" hover:text-gray-900 font-medium transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="bg-[#F84646] text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300 font-medium"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-between item-center md:hidden p-3 ">
        <button className=""  onClick={toggleMobileMenu}>
          <IoMenuOutline className="h-8 w-10 text-black" />
        </button>
        <div className="">
          <Link
            href="/"
            className="bg-[#F84646] text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300 font-medium"
          >
            İletişim
          </Link>
        </div>
      </div>

        <div
        className={`mobile-menu fixed top-0 left-0 h-full w-80 shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden bg-white ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full "
        }`}
      >
        <div className="flex flex-col h-full z-999">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className="text-lg font-semibold text-gray-800">Menu</div>
            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <IoCloseOutline className="h-8 w-8 text-gray-600" />
            </button>
          </div>

          <nav className="flex flex-col py-4">
            <ul className="space-y-2">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium transition duration-200"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

       
            <div className="flex items-center gap-5 order-1 lg:order-2 justify-center mt-38">
              <Link href='https://www.facebook.com/'>
                <CiFacebook  className="h-9 w-9 text-black" />
                </Link>
                 <Link href='https://www.instagram.com/accounts/login/?hl=en'>
                <SlSocialInstagram className="h-8 w-8 text-black" />
                </Link>
                   <Link href='https://x.com/login?'>
                <TfiTwitter className="h-8 w-8 text-black"  />
                </Link>
                   <Link href='https://in.linkedin.com/?mcid=6844056167778418689&src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418467_crid.657403558724_kw.linkedin%20login%20web_d.c_tid.kwd-849680790155_n.g_mt.e_geo.9198075&cid=&gad_source=1&gad_campaignid=14650114788&gbraid=0AAAAABKX7wHiWz3sAB_ZgSKo--xXdaAn1&gclid=CjwKCAjw3_PCBhA2EiwAkH_j4j6nYcV0APMKGTbKRGDkHvOVfoxCCjjYLxP3CEVzANlSGHjG-u-n0RoCT8cQAvD_BwE&gclsrc=aw.ds'>
                <CiLinkedin  className="h-8 w-8 text-black"   />
                </Link>
            </div>
        </div>


        </div>
    </header>
  );
};

export default HeaderComponent;
