import HeroBanner from "@/components/HomeComponents/BannnerComponent";
import ContactComponent from "@/components/HomeComponents/ContactComponent";
import FooterComponent from "@/components/HomeComponents/FooterComponent";
import ReferencesComponent from "@/components/HomeComponents/ReferencesComponent";
import ServiceComponent from "@/components/HomeComponents/ServiceComponent";
import ServicesSection from "@/components/HomeComponents/ServicesSectionComponent";
import TestComponent from "@/components/HomeComponents/TestComponent";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      <ServicesSection />
      <TestComponent />
      <ServiceComponent />
      <ReferencesComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}
