import Image from "next/image";

const ServiceComponent = () => {
  const servicesData = [
    {
      id: 1,
      title: "Kalite ve Süreç Yönetimi",
      description:
        "Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetiminde destek olmak, zayfı olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMP® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.",
      image: "/service1.jpg",
      imageAlt: "Office meeting with team collaboration",
      buttonText: "Keşfet",
      imagePosition: "right",
    },
    {
      id: 2,
      title: "Test Yönetimi ve Analizi",
      description:
        "Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetiminde destek olmak, zayfı olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMP® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız. Deneyimli test ekibimiz, kurumsal yüksek kalitede yazılım testleri hizmeti ile baştan sona güvenli, kaliteli ve tamamen odaklanmış deneyim sunmaktadır.",
      image: "/service2.jpg",
      imageAlt: "Person working on laptop with testing analysis",
      buttonText: "Keşfet",
      imagePosition: "left",
    },
  ];
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`${index > 0 ? "mt-20 lg:mt-28" : ""}`}
          >
            <div className="hidden lg:block">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {service.imagePosition === "right" ? (
                  <>
                    <div className="space-y-6">
                      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {service.description}
                      </p>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded transition duration-300 mt-8">
                        {service.buttonText}
                      </button>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={450}
                        height={300}
                        className="rounded-lg shadow-md object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center lg:justify-start">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={450}
                        height={300}
                        className="rounded-lg shadow-md object-cover"
                      />
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {service.description}
                      </p>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded transition duration-300 mt-8">
                        {service.buttonText}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="lg:hidden space-y-8">
              <div className="text-center">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={400}
                  height={250}
                  className="w-full max-w-md mx-auto rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded transition duration-300 w-full sm:w-auto">
                  {service.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceComponent;
