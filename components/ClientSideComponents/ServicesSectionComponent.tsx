import Image from "next/image"

const ServicesSection = () => {
  const servicesData = [
    {
      id: 1,
      title: "Döküman Analizi",
      description: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      icon: "/image.png",
      iconColor: "bg-pink-100",
      iconTextColor: "text-pink-600",
    },
    {
      id: 2,
      title: "Kabul ve Değerlendirme",
      description: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
     icon: "/star.png",
      iconColor: "bg-purple-100",
      iconTextColor: "text-purple-600",
    },
    {
      id: 3,
      title: "İş Kuralları Analizi",
      description: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
     icon: "/king.png",
      iconColor: "bg-blue-100",
      iconTextColor: "text-blue-600",
    },
    {
      id: 4,
      title: "Akış Diyagramları",
      description: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      icon: "/graph.png",
      iconColor: "bg-cyan-100",
      iconTextColor: "text-cyan-600",
    },
    {
      id: 5,
      title: "Paydaş Analizi",
      description: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      icon: "/image1.png",
      iconColor: "bg-red-100",
      iconTextColor: "text-red-600",
    },
    {
      id: 6,
      title: "Prototipleme",
      description: "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
       icon: "/image.png",
      iconColor: "bg-orange-100",
      iconTextColor: "text-orange-600",
    },
  ]
  return (
    <section className="py-10 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">Kalite ve Süreç Yönetimi</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service) => (
            <div key={service.id} className="text-center flip-container p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
             <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 p-2`}>
                      <div className="absolute flipper w-20 h-20">
                        <Image 
                         src={service?.icon} 
                         alt="Background Banner"
                         layout="fill"        
                         priority             
                         className="z-0 object-contain h-full w-full transition-transform duration-300 ease-in-out hover:scale-x-[-1]"
                       />
                      </div> 
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
