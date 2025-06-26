import Image from "next/image"

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
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {servicesData.map((service, index) => (
          <div key={service.id} className={`${index > 0 ? "mt-16 lg:mt-24" : ""}`}>
         
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
              {service.imagePosition === "right" ? (
                <>
                  <div className="">
                    <h2 className="text-3xl lg:text-7xl font-bold text-gray-900 leading-tight">{service.title}</h2>
                    <p className="leading-relaxed text-2xl text-gray-400">{service.description}</p>
                    <button className="bg-red-500 hover:bg-red-600 text-white text-2xl mt-16 font-semibold py-4 px-10 w-[200px] rounded-md transition duration-300">
                      {service.buttonText}
                    </button>
                  </div>
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={600}
                      height={200}
                      className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={600}
                      height={200}
                      className="w-full h-auto object-cover text-gray-50 rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="">
                   <h2 className="text-3xl lg:text-7xl font-bold text-gray-900 leading-tight">{service.title}</h2>
                         <p className="leading-relaxed text-2xl text-gray-400">{service.description}</p>
                    <button className="bg-red-500 hover:bg-red-600 text-white text-2xl mt-16 font-semibold py-4 px-10 w-[200px] rounded-md transition duration-300">
                      {service.buttonText}
                    </button>
                  </div>
                </>
              )}
            </div>


            <div className="lg:hidden space-y-6">
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 w-full sm:w-auto">
                  {service.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceComponent
