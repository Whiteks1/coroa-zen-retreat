import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/600500400", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      <span className="absolute -top-12 right-0 bg-foreground text-background text-sm px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        ¿Necesitas ayuda?
      </span>
    </button>
  );
};

export default WhatsAppButton;
