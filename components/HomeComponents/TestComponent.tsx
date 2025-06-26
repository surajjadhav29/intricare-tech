import { RiArrowRightDoubleLine } from "react-icons/ri";

const TestComponent = () => {
  const benefitsData = [
    {
      id: 1,
      title: "Yazılım Kalitesini",
      subtitle: "Arttırıyoruz",
    },
    {
      id: 2,
      title: "Olası Hataları Önceden",
      subtitle: "Belirliyoruz",
    },
    {
      id: 3,
      title: "Oluşabilecek Riskleri",
      subtitle: "Önlüyoruz",
    },
    {
      id: 4,
      title: "Zaman ve Maliyetten",
      subtitle: "Tasarruf Sağlıyoruz",
    },
  ];

  return (
    <section className="bg-[#F84646] py-8 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 lg:mb-4 leading-tight">
            Test Yönetimiyle Neler Sağlıyoruz?
          </h2>
          <p className="text-white/90 text-md sm:text-lg font-medium">
            IoT Destekli Çözümler
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 max-w-7xl justify-center items-center mx-auto">
          {benefitsData.map((benefit, index) => (
            <div
              key={benefit.id}
              className="sm:text-start text-center flex sm:flex-row flex-col"
            >
              <div className="sm:w-[75%] w-full sm:mb-0 mb-6">
                <h3 className="text-white text-xl font-semibold ">
                  {benefit.title}
                </h3>
                <h3 className="text-white text-xl font-semibold">
                  {benefit.subtitle}
                </h3>
              </div>
              {index < benefitsData.length - 1 ? (
                <div className="flex justify-center sm:w-[25%] w-full">
                  <div className="  flex items-center justify-center">
                    <RiArrowRightDoubleLine className="text-white text-2xl  h-6 w-6 border-[1px] rounded-full border-white sm:rotate-0 rotate-90 " />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestComponent;
