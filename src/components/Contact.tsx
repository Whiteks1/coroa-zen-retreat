import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dates: "",
    guests: "",
    message: "",
    midStay: false,
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({
      name: "",
      email: "",
      dates: "",
      guests: "",
      message: "",
      midStay: false,
      newsletter: false,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-sand-light to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Reserva tu <span className="gradient-text">Estancia</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Cuéntanos tus planes y te ayudaremos a encontrar el apartamento perfecto
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-3xl shadow-xl border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nombre</label>
                <Input
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Fechas</label>
                <Input
                  type="text"
                  placeholder="Del 1 al 15 de marzo"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Personas</label>
                <Input
                  type="number"
                  placeholder="2"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Mensaje</label>
              <Textarea
                placeholder="Cuéntanos más sobre tu estancia..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl min-h-32"
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.midStay}
                  onChange={(e) => setFormData({ ...formData, midStay: e.target.checked })}
                  className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground">
                  Estoy interesado en estancias medias (más de 30 días)
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground">
                  Quiero recibir ofertas exclusivas y novedades
                </span>
              </label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Enviar Solicitud
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
