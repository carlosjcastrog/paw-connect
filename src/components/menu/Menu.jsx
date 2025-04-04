'use client'
import { useState } from "react";
import Link from "next/link";

export default function Menu() {

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Adopción", href: "/about" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">

        <Link href="/" className="text-white text-2xl font-bold">
          PetConnect
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white hover:text-gray-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* {isOpen ? <FiX /> : <FiMenu />} */}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-700 py-4">
          <ul className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white text-lg hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
