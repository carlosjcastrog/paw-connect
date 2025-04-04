import Link from "next/link";

export default function Footer() {
  const sections = [
    {
      title: "Navegación",
      type: "links",
      items: [
        { label: "Inicio", href: "/" },
        { label: "Sobre Nosotros", href: "/sobre" },
        { label: "Mascotas", href: "/mascotas" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
    {
      title: "Información",
      type: "text",
      content: "Info",
    },
    {
      title: "Legal",
      type: "links",
      items: [
        { label: "Términos y Condiciones", href: "/terminos" },
        { label: "Política de Privacidad", href: "/privacidad" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {sections.map((section, index) => (
          <div key={index} className="text-center md:text-left mb-6 md:mb-0">
            {section.title && <h4 className="text-lg font-semibold">{section.title}</h4>}
            {section.type === "links" ? (
              <ul className="mt-2 space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="hover:text-gray-400">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-gray-400">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
