const ReferencesComponent = () => {
  // Section data
  const sectionData = {
    title: "Referanslarımız",
    subtitle: "Bize güvenen ve beraber çalıştığımız iş ortaklarımız",
    viewAllText: "Tümünü Gör",
  }

  
  const companiesData = {
    
    row1: [
      {
        id: 1,
        name: "AKBANK",
        color: "text-red-600",
        size: "text-2xl lg:text-3xl",
      },
    ],
  
    row2: [
      {
        id: 2,
        name: "İstanbul Bilgi Üniversitesi",
        color: "text-red-600",
        size: "text-lg lg:text-xl",
        icon: "🎓",
      },
      {
        id: 3,
        name: "aktaş",
        color: "text-blue-600",
        size: "text-2xl lg:text-3xl",
      },
    ],
    row3: [
      {
        id: 4,
        name: "BORUSAN",
        color: "text-orange-500",
        size: "text-xl lg:text-2xl",
        icon: "🔶",
      },
      {
        id: 5,
        name: "AKÇANSA",
        color: "text-blue-600",
        size: "text-xl lg:text-2xl",
      },
      {
        id: 6,
        name: "amazon",
        color: "text-gray-900",
        size: "text-2xl lg:text-3xl",
      },
    ],
    // Row 4: Two logos
    row4: [
      {
        id: 7,
        name: "bookmyshow",
        color: "text-red-600",
        size: "text-lg lg:text-xl",
        highlight: "my",
      },
      {
        id: 8,
        name: "OLA",
        color: "text-green-600",
        size: "text-2xl lg:text-3xl",
        icon: "⚫",
      },
    ],
  }
  const LogoCard = ({ company }: { company: any }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 lg:p-8 flex items-center justify-center min-h-[100px] lg:min-h-[120px]">
      <div className="text-center flex items-center gap-2">
        {company.icon && <span className="text-lg">{company.icon}</span>}
        <div className={`font-bold ${company.size} ${company.color}`}>
          {company.highlight ? (
            <>
              book<span className="bg-red-600 text-white px-1 rounded">{company.highlight}</span>show
            </>
          ) : (
            company.name
          )}
        </div>
      </div>
    </div>
  )
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {sectionData.title}
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">{sectionData.subtitle}</p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <div className="space-y-6 lg:space-y-8">
            {/* Row 1: AKBANK (centered) */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs lg:max-w-sm">
                <LogoCard company={companiesData.row1[0]} />
              </div>
            </div>

            {/* Row 2: İBÜ + aktaş */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {companiesData.row2.map((company) => (
                <LogoCard key={company.id} company={company} />
              ))}
            </div>

            {/* Row 3: BORUSAN + AKÇANSA + amazon */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              {companiesData.row3.map((company) => (
                <LogoCard key={company.id} company={company} />
              ))}
            </div>

            {/* Row 4: bookmyshow + OLA */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {companiesData.row4.map((company) => (
                <LogoCard key={company.id} company={company} />
              ))}
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12 lg:mt-16">
            <button className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold text-lg lg:text-xl transition-colors duration-300 group">
              {sectionData.viewAllText}
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {[...companiesData.row1, ...companiesData.row2, ...companiesData.row3, ...companiesData.row4].map(
            (company) => (
              <LogoCard key={company.id} company={company} />
            ),
          )}

          {/* Mobile View All Button */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold text-lg transition-colors duration-300 group">
              {sectionData.viewAllText}
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ReferencesComponent
