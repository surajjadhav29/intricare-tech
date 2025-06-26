import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

const ReferencesComponent = () => {

   const logos = [
    { src: "/logo1.png"},
    { src: "/logo2.png" },
    { src: "/logo3.png"},
    { src: "/logo4.png"},
    { src: "/logo7.png"},
    { src: "/logo5.png"},
    { src: "/logo8.png"},
    { src: "/logo6.png"},
  ]


  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Referanslarımız
          </h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-xl">
            Bize güvenen ve beraber çalıştığımız iş ortaklarımız
          </p>
          <div className="w-12 h-0.5 bg-red-500 mx-auto mt-4"></div>
        </div>
        <div className="mx-auto sm:block hidden">
          <div className="flex justify-center -mb-12">
            <div className="bg-white rounded-xl  shadow-sm p-8 w-60 h-28 flex items-center justify-center">
              <Image
                src="/logo1.png"
                alt="AKBANK"
                width={200}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex justify-center gap-88">
            <div className="bg-white rounded-xl shadow-sm p-6 w-60 h-28 flex items-center justify-center">
              <Image
                src="/logo2.png"
                alt="İstanbul Bilgi Üniversitesi"
                width={180}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 w-60 h-28 flex items-center justify-center">
              <Image
                src="/logo3.png"
                alt="aktaş"
                width={180}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6  ml-12 -mt-6  w-60 h-28 flex items-center justify-center">
            <Image
              src="/logo4.png"
              alt="BORUSAN"
              width={160}
              height={60}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex justify-center ml-70 gap-12 -mt-16">
            <div className="bg-white rounded-xl shadow-sm p-6 w-60 h-28 flex items-center justify-center">
              <Image
                src="/logo7.png"
                alt="bookmyshow"
                width={180}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white rounded-xl  -mt-16 shadow-sm p-6 w-60 h-28 flex items-center justify-center">
              <Image
                src="/logo5.png"
                alt="AKÇANSA"
                width={160}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white rounded-xl ml-3  shadow-sm p-6 w-60 h-28 flex items-center justify-center">
              <Image
                src="/logo8.png"
                alt="OLA"
                width={180}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white rounded-xl -mt-20 shadow-sm p-6 w-60 h-28 flex items-center justify-center">
              <Image
                src="/logo6.png"
                alt="amazon"
                width={160}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex justify-center -mt-10">
            <div className="bg-white rounded-xl shadow-sm p-8 w-60 h-28 flex items-center justify-center">
              <button className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold text-xl transition-colors">
                Tümünü Gör
                <IoMdArrowForward />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-12 block sm:hidden ">
          <div className="flex flex-col justify-center items-center gap-6 md:gap-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm w-62 p-6 h-28 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                <Image
                  src={logo.src}
                  alt='img'
                  width={100}
                  height={100}
                  className="w-full h-auto object-contain max-h-16"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReferencesComponent;
