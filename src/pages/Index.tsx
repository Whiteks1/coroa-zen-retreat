import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Apartments from "@/components/Apartments";
import SmartManagement from "@/components/SmartManagement";
import Experiences from "@/components/Experiences";
import MidStay from "@/components/MidStay";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Apartments />
        <SmartManagement />
        <Experiences />
        <MidStay />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
