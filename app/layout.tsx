import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import "modern-normalize/modern-normalize.css";
import "./globals.css";

export const metadata = {
  title: "NoteHub",
  description: "Manage personal notes easily",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Toaster position="top-right" />
          <Header />
          {children}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}