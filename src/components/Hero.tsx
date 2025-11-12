import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-valencia.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-balance leading-tight">
            Tu refugio de calma inteligente en el corazón de{" "}
            <span className="text-valencia-orange-light">Valencia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-balance">
            Alojamientos mid-stay diseñados para vivir, trabajar y disfrutar
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-lg px-8 py-6 shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              Ver Apartamentos
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-xl text-lg px-8 py-6 transition-all duration-300"
            >
              Estancias Largas
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
