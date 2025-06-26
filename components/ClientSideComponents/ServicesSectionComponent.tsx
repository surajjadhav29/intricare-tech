import Image from "next/image";

const ServicesSection = () => {
  const servicesData = [
    {
   
      title: "Döküman Analizi",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      icon: "/File.png",
    },
    {
      
      title: "Kabul ve Değerlendirme",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      icon: "/star.png",
    },
    {
      
      title: "İş Kuralları Analizi",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      icon: "/king.png",
    },
    {
   
      title: "Akış Diyagramları",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      icon: "/graph.png",
    },
    {
   
      title: "Paydaş Analizi",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      icon: "/image1.png",
    },
    {
      title: "Prototipleme",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      icon: "/image.png",
    },
  ];
  return (
    <section className="py-16 lg:py-20 bg-white container mx-auto">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
          Kalite ve Süreç Yönetimi
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
          farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
          Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {servicesData.map((service) => (
          <div
            className="text-center group p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 p-2`}
            >
              <div className="absolute flipper w-20 h-20">
                <Image
                  src={service?.icon}
                  alt="Background Banner"
                  layout="fill"
                  priority
                  className="z-0 object-contain h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-700 leading-relaxed px-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
