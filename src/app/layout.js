import Layout from "@/components/layout/Layout";
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
      <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
