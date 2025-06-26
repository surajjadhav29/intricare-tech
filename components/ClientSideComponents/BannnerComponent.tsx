import Image from "next/image";
import React from "react";
import HeaderComponent from "./HeaderComponent";
const HeroBanner = () => {
  return (
    <section className="relative py-4 overflow-hidden h-[550px] sm:h-[700px] ">
      <HeaderComponent />
      <div className="absolute inset-0">
        <Image
          src="/bannerimg.png"
          alt="Background Banner"
          layout="fill"
          priority
          className="z-0 lg:object-center object-[65%_35%] object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-10 z-10 "></div>
      </div>
      <div className="container sm:mt-28 mt-6 sm:ml-28 mx-auto text-center sm:text-start px-4 flex flex-col item-center relative z-20">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-4">
          Bilgi Teknolojilerinde <br /> 23 Yıllık Tecrübe
        </h1>
        <p className="sm:text-lg text-md mb-8 sm:w-xl w-full">
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
          farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
          Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </p>
        <div className="flex sm:gap-0 gap-4 bg-white justify-between rounded-md px-4 sm:w-md w-full">
          <input
            type="email"
            placeholder="Mail bültenimize kayıt ol"
            className=" focus:outline-none"
          />
          <button className="bg-red-500 m-1 hover:bg-red-600 text-white text-sm lg:text-lg font-semibold py-3 sm:px-6 px-2 rounded-md transition duration-300">
            Kayıt Ol
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
