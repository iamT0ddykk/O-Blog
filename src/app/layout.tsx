import type { Metadata } from "next";
import "./globals.css";
import { Container } from "../Components/Container";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const metadata: Metadata = {
  title: {
    default: "O Blog",
    template: "%s - O Blog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-full flex flex-col">
        <Container>
          <Header></Header>
          {children}
          <Footer></Footer>
        </Container>
      </body>
    </html>
  );
}
