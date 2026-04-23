const WhatsAppButton = () => {
  return (
    <aside
      className="fixed bottom-6 right-4 z-50 w-[min(22rem,calc(100vw-2rem))] space-y-3"
      aria-label="Muestra de contacto rapido"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center gap-3 bg-primary px-4 py-3 text-primary-foreground">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
            AI
          </div>
          <div>
            <p className="text-sm font-semibold leading-none">Asistente Coroa</p>
            <p className="text-xs opacity-85">Demo de conversacion</p>
          </div>
        </div>

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
      </div>

      <div className="flex justify-end gap-3">
        <a
          href="tel:+34600500400"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-accent/90"
          aria-label="Llamar por telefono"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>

        <a
          href="https://wa.me/34600500400"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20BA5A]"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8" fill="currentColor">
            <path d="M16.03 4.01A11.88 11.88 0 0 0 5.78 21.9L4 28l6.28-1.65a11.86 11.86 0 0 0 5.75 1.46h.01A11.9 11.9 0 0 0 16.03 4.01Zm0 21.78h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 1 1 8.36 4.6Zm5.4-7.39c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
          </svg>
        </a>
      </div>
    </aside>
  );
};

export default WhatsAppButton;
