import Image from "next/image";
import React from "react";
import HeaderComponent from "./HeaderComponent";
const HeroBanner = () => {
  return (
    <section className="relative py-4 overflow-hidden h-[600px] sm:h-[700px] ">
      <HeaderComponent />
      <div className="absolute inset-0">
        <Image
          src="/bannerimg.png"
          alt="Background Banner"
          layout="fill"
          priority
          className="z-0 lg:object-center object-[65%_35%] object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-20   z-10 sm:hidden flex "></div>
      </div>
      <div className="container text-black sm:mt-28 mt-6 sm:ml-28 mx-auto text-center sm:text-start px-4 flex flex-col item-center relative">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
          Bilgi Teknolojilerinde <br /> 23 Yıllık Tecrübe
        </h1>
        <p className="sm:text-lg text-md mt-4 mb-8 sm:w-xl w-full">
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
          farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
          Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </p>
        <div className="flex sm:gap-0 gap-4 h-16 sm:mt-0  bg-white justify-between rounded-md sm:w-md w-full">
          <input
            type="email"
            placeholder="Mail bültenimize kayıt ol"
            required
            className=" focus:outline-none px-4"
          />
          <button className="bg-[#F84646] m-1 hover:bg-red-600 text-white sm:w-auto  w-24 text-sm lg:text-lg font-semibold py-3 sm:px-6 px-1 rounded-md transition duration-300">
            Kayıt Ol
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
