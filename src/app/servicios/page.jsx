"use client";

export default function Servicios() {
  console.log("La página de Servicios se está renderizando en el CLIENTE");

  const services = [
    { title: "Delivery Rápido", description: "Recibe tu pedido en minutos.", bg: "bg-blue-500" },
    { title: "Ingredientes Frescos", description: "Usamos solo lo mejor.", bg: "bg-green-500" },
    { title: "Atención 24/7", description: "Siempre listos para ayudarte.", bg: "bg-yellow-500" }
  ];

  return (
    <section className="py-12 bg-gray-100 border-4 border-red-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg text-white ${service.bg}`}>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
