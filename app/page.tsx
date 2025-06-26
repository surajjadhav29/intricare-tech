import HeroBanner from "@/components/ClientSideComponents/BannnerComponent";
import ContactComponent from "@/components/ClientSideComponents/ContactComponent";
import ReferencesComponent from "@/components/ClientSideComponents/ReferencesComponent";
import ServiceComponent from "@/components/ClientSideComponents/ServiceComponent";
import ServicesSection from "@/components/ClientSideComponents/ServicesSectionComponent";
import TestComponent from "@/components/ClientSideComponents/TestComponent";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      <ServicesSection />
      <TestComponent />
      <ServiceComponent />
      <ReferencesComponent />
      <ContactComponent />
    </div>
  );
}
