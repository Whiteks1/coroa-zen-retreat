import { Smartphone, Calendar, MessageCircle, BarChart3 } from "lucide-react";

const SmartManagement = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Motor de Reservas",
      description: "Sistema inteligente que optimiza disponibilidad y precios automáticamente",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Check-in Digital",
      description: "Acceso sin contacto mediante código, entrada a tu ritmo las 24/7",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Atención Inmediata",
      description: "Soporte por WhatsApp con respuestas rápidas cuando lo necesites",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Panel de Control",
      description: "Gestión transparente con métricas y feedback en tiempo real",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sand-light to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              <span className="gradient-text">Tecnología</span> al Servicio de tu
              Comodidad
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestro sistema automatizado gestiona reservas, comunicación con
              huéspedes y métricas de rendimiento, optimizando cada estancia con
              atención humana y soporte digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartManagement;
