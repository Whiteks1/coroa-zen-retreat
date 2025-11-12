import { Instagram, Linkedin, Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Coroa Silence</h3>
            <p className="text-background/70 text-sm">
              Tu refugio de calma inteligente en el corazón de Valencia
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>iaavantis@gmail.com</p>
              <p>600 500 400</p>
              <p>Valencia, España</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Enlaces</h4>
            <div className="space-y-2 text-sm text-background/70">
              <a href="#apartamentos" className="block hover:text-background transition-colors">
                Apartamentos
              </a>
              <a href="#experiencias" className="block hover:text-background transition-colors">
                Experiencias
              </a>
              <a href="#midstay" className="block hover:text-background transition-colors">
                Mid-Stay
              </a>
              <a href="#contacto" className="block hover:text-background transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Airbnb"
              >
                <Home size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© 2025 Coroa Silence Apartments. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Aviso Legal
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Privacidad
            </a>
          </div>
          <p className="text-xs">Desarrollado por Avantis IA - Valencia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
