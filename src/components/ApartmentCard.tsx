import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Tv, Wind, UtensilsCrossed, ArrowUpRight } from "lucide-react";

interface ApartmentCardProps {
  name: string;
  description: string;
  image: string;
  amenities?: string[];
}

const ApartmentCard = ({ name, description, image }: ApartmentCardProps) => {
  const iconMap: { [key: string]: JSX.Element } = {
    wifi: <Wifi size={18} />,
    tv: <Tv size={18} />,
    ac: <Wind size={18} />,
    kitchen: <UtensilsCrossed size={18} />,
  };

  const defaultAmenities = ["wifi", "tv", "ac", "kitchen"];

  return (
    <Card className="overflow-hidden hover-lift group cursor-pointer border-0 shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {defaultAmenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2"
            >
              {iconMap[amenity]}
              <span className="text-sm font-medium capitalize">{amenity}</span>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="w-full group/button rounded-xl border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
        >
          Ver Detalles
          <ArrowUpRight
            size={18}
            className="ml-2 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform duration-300"
          />
        </Button>
      </div>
    </Card>
  );
};

export default ApartmentCard;
