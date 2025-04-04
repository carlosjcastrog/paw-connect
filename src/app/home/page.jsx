export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-bold text-blue-600">Bienvenido a Pet Connect 🐾</h1>
        <p className="mt-4 text-lg text-gray-700">Conectando mascotas y dueños con amor 💙</p>
        <nav className="mt-6">
          <ul className="flex gap-4">
            <li>
              <a href="/servicios" className="text-blue-500 hover:underline">
                Servicios
              </a>
            </li>
            <li>
              <a href="/about" className="text-blue-500 hover:underline">
                Acerca de
              </a>
            </li>
          </ul>
        </nav>
      </main>
    );
  }
  