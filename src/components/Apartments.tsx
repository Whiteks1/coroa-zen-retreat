import ApartmentCard from "./ApartmentCard";
import mercatImage from "@/assets/apartment-mercat.jpg";
import nestImage from "@/assets/apartment-nest.jpg";
import furioImage from "@/assets/apartment-furio.jpg";
import dionisImage from "@/assets/apartment-dionis.jpg";
import guillemImage from "@/assets/apartment-guillem.jpg";
import mestallaImage from "@/assets/apartment-mestalla.jpg";

const Apartments = () => {
  const apartments = [
    {
      name: "Mercat",
      description: "Apartamento moderno junto al Mercado Central, perfecto para descubrir la Valencia auténtica.",
      image: mercatImage,
    },
    {
      name: "Nest",
      description: "Studio acogedor con diseño inteligente, ideal para estancias cortas y nómadas digitales.",
      image: nestImage,
    },
    {
      name: "Furio",
      description: "Espacio luminoso con dormitorio independiente, balcón y todo el confort que necesitas.",
      image: furioImage,
    },
    {
      name: "Dionis",
      description: "Apartamento amplio con cocina completa, perfecto para estancias medias y familias pequeñas.",
      image: dionisImage,
    },
    {
      name: "Guillem",
      description: "Piso moderno con zona de trabajo dedicada, ideal para profesionales remotos.",
      image: guillemImage,
    },
    {
      name: "Mestalla Silence",
      description: "Apartamento tranquilo cerca del estadio, con todas las comodidades para tu estancia.",
      image: mestallaImage,
    },
  ];

  return (
    <section id="apartamentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Descubre Nuestros{" "}
            <span className="gradient-text">Apartamentos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada espacio está diseñado para ofrecerte confort, funcionalidad y
            ese toque mediterráneo que hace especial tu estancia en Valencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <ApartmentCard
              key={apartment.name}
              name={apartment.name}
              description={apartment.description}
              image={apartment.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;
