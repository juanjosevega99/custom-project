import Image from "next/image";

const Services: React.FC = () => {

  const services = [
    { name: "Lectura de Tarot", image: "/images/1.jpeg" },
    { name: "Rituales de Sanación", image: "/images/2.jpeg" },
    { name: "Consejos Personalizados", image: "/images/3.jpeg" },
    { name: "Rituales para la Buena Suerte", image: "/images/4.jpeg" },
    { name: "Limpiezas Energéticas", image: "/images/5.jpeg" },
  ];

  return (
    <section className="mt-10 w-full max-w-4xl">
      <h4 className="text-3xl font-bold mb-6">Nuestros Servicios ✨</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={service.image}
                alt={service.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h5 className="text-xl font-semibold text-gray-700">✨ {service.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
