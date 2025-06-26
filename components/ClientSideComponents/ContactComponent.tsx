import Image from "next/image";

const ContactComponent = () => {
  const contactData = {
    title: "Bize Ulaşın",
    description:
      "Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.",
    buttonText: "Bize Ulaşın",
    buttonHref: "/",
  };
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/contacticon.png"
                alt="İstanbul Bilgi Üniversitesi"
                width={180}
                height={60}
                className="w-20 h-20  sm:h-28 sm:w-28 object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {contactData.title}
          </h2>

          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            {contactData.description}
          </p>
          <div>
            <a
              href={contactData.buttonHref}
              className="inline-block bg-[#F84646] hover:bg-red-600 text-white font-semibold py-3 px-8 lg:py-4 lg:px-10 rounded-md transition-colors duration-300 text-lg"
            >
              {contactData.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
