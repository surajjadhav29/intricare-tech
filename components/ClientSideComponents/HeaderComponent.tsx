"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { throttle } from "lodash";
import { IoMenuOutline } from "react-icons/io5";

const navigationItems = [
  { href: "/", label: "Çözüm ve Hizmetler" },
  { href: "/", label: "Ürünler" },
  { href: "/", label: "Teknolojiler" },
  { href: "/", label: "İnsan Kaynakları" },
  { href: "/", label: "Kurumsal" },
];

const HeaderComponent = () => {
  const [moveDown, setMoveDown] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      if (window.scrollY > 40) {
        setMoveDown(true);
      } else {
        setMoveDown(false);
      }
    }, 0),
    [],
  );
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`${moveDown ? "bg-white fixed top-0 w-full z-50 shadow-md lg:h-16 h-12 lg:flex justify-center items-center" : "z-20 relative py-5 px-12"}`}
      style={{
        ...(moveDown
          ? {
              background: `linear-gradient(137deg, rgba(255, 255, 255, 0.70) 24.15%, rgba(255, 255, 255, 0.62) 125.95%)`,
              backdropFilter: "blur(10px)",
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
                className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300 font-medium"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-between item-center md:hidden p-3">
        <button className="">
          <IoMenuOutline className="h-8 w-10" />
        </button>
        <div className="">
          <Link
            href="/contact"
            className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300 font-medium"
          >
            İletişim
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
