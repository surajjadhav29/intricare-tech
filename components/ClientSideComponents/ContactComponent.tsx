const ContactComponent = () => {
  // Contact section data
  const contactData = {
    title: "Bize Ulaşın",
    description: "Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.",
    buttonText: "Bize Ulaşın",
    buttonHref: "/contact",
  }

  // Icon data (representing the overlapping circles)
  const iconData = {
    primaryCircle: {
      color: "border-gray-400",
      bgColor: "bg-white",
    },
    secondaryCircle: {
      color: "border-red-500",
      bgColor: "bg-red-500",
    },
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Primary Circle (outline) */}
              <div
                className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 ${iconData.primaryCircle.color} ${iconData.primaryCircle.bgColor}`}
              ></div>
              {/* Secondary Circle (filled, overlapping) */}
              <div
                className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full ${iconData.secondaryCircle.bgColor} absolute -top-2 -right-2 lg:-top-3 lg:-right-3`}
              ></div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {contactData.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            {contactData.description}
          </p>

          {/* CTA Button */}
          <div>
            <a
              href={contactData.buttonHref}
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 lg:py-4 lg:px-10 rounded-md transition-colors duration-300 text-lg"
            >
              {contactData.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactComponent
