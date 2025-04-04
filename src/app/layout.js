import "./globals.css";

export const metadata = {
  title: "Pet Connect",
  description: "Pet Connect - Conectando mascotas y dueños",
};

export default function RootLayout({ children }) {
  console.log("Children en RootLayout:", children);

  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
