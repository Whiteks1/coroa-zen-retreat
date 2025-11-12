import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const MidStay = () => {
  const benefits = [
    "Contrato flexible sin compromiso a largo plazo",
    "Limpieza quincenal incluida en tu tarifa",
    "Escritorio de trabajo y conexión WiFi premium",
    "Descuentos progresivos por estancias mensuales",
    "Comunidad local y eventos para residentes",
    "Suministros y facturas incluidas",
  ];

  return (
    <section id="midstay" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Estancias <span className="gradient-text">Medias</span> para
                Nómadas Digitales
              </h2>
              <p className="text-lg text-muted-foreground">
                Espacios pensados para quienes viven entre viajes, proyectos o
                cambios. Flexibilidad, confort y comunidad local.
              </p>

              <div className="space-y-4 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl mt-6 shadow-lg"
              >
                Solicitar Estancia Media
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 space-y-6">
                <div className="bg-card rounded-2xl p-6 shadow-lg">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-2">+30 días</h3>
                  <p className="text-muted-foreground">
                    Hasta 20% de descuento en tarifas mensuales
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg">
                  <div className="text-5xl mb-4">🌍</div>
                  <h3 className="text-2xl font-bold mb-2">Sin Ataduras</h3>
                  <p className="text-muted-foreground">
                    Flexibilidad total para tu estilo de vida
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg">
                  <div className="text-5xl mb-4">💼</div>
                  <h3 className="text-2xl font-bold mb-2">Work-Ready</h3>
                  <p className="text-muted-foreground">
                    Espacios optimizados para trabajar desde casa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidStay;
