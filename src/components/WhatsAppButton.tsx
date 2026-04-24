import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Phone } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";

const chatPreview = (
  <div className="space-y-3 px-4 py-4">
    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm text-foreground">
      Hola, puedo ayudarte a elegir apartamento.
    </div>
    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-accent px-3 py-2 text-sm text-accent-foreground">
      Busco una estancia de 30 dias en Valencia.
    </div>
    <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm text-foreground">
      Perfecto. Te mostramos opciones con wifi, cocina equipada y zona tranquila.
    </div>
    <div className="rounded-xl border border-border bg-background px-3 py-2 text-sm text-muted-foreground">
      Escribe tu mensaje...
    </div>
  </div>
);

const actionButtons = ({ stacked = false }: { stacked?: boolean }) => (
  <div className={`flex gap-3 ${stacked ? "flex-col" : "justify-end"}`}>
    <a
      href="tel:+34600500400"
      className={`flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground shadow-2xl transition-all duration-300 hover:bg-accent/90 ${
        stacked ? "h-12 w-full px-4 text-sm font-medium" : "h-14 w-14 hover:scale-110"
      }`}
      aria-label="Llamar por telefono"
    >
      <Phone className={stacked ? "h-4 w-4" : "h-7 w-7"} />
      {stacked ? <span>Llamar</span> : null}
    </a>

    <a
      href="https://wa.me/34600500400"
      target="_blank"
      rel="noreferrer"
      className={`flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:bg-[#20BA5A] ${
        stacked ? "h-12 w-full px-4 text-sm font-medium" : "h-14 w-14 hover:scale-110"
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className={stacked ? "h-5 w-5" : "h-8 w-8"} fill="currentColor">
        <path d="M16.03 4.01A11.88 11.88 0 0 0 5.78 21.9L4 28l6.28-1.65a11.86 11.86 0 0 0 5.75 1.46h.01A11.9 11.9 0 0 0 16.03 4.01Zm0 21.78h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 1 1 8.36 4.6Zm5.4-7.39c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      {stacked ? <span>Abrir WhatsApp</span> : null}
    </a>
  </div>
);

const WhatsAppButton = () => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(!isMobile);
  }, [isMobile]);

  return (
    <aside
      className="fixed inset-x-4 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-50 space-y-3 md:inset-x-auto md:bottom-6 md:right-4 md:w-[min(22rem,calc(100vw-2rem))]"
      aria-label="Muestra de contacto rapido"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-sm">
        <button
          type="button"
          className="flex w-full items-center gap-3 bg-primary px-4 py-3 text-left text-primary-foreground"
          onClick={() => isMobile && setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
          aria-controls="coroa-chat-preview"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
            AI
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold leading-none">Asistente Coroa</p>
            <p className="text-xs opacity-85">
              {isMobile ? "Abre la demo o contacta ahora" : "Demo de conversacion"}
            </p>
          </div>
          {isMobile ? (
            <div className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>{isExpanded ? "Cerrar" : "Abrir"}</span>
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </div>
          ) : null}
        </button>

        {isExpanded ? <div id="coroa-chat-preview">{chatPreview}</div> : null}
      </div>

      {isMobile ? (
        <div className="rounded-2xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur-sm">
          {actionButtons({ stacked: true })}
        </div>
      ) : (
        actionButtons({})
      )}
    </aside>
  );
};

export default WhatsAppButton;
