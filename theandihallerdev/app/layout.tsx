import "@/app/ui/global.css";
import { ibm_plex_mono } from "@/app/ui/fonts";
import { Metadata } from "next";
import Navbar from "@/app/ui/nav-bar";
import { LanguageProvider } from "@/app/LanguageContext";
import Footer from "@/app/ui/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | The Andi Haller",
    default: "The Andi Haller",
  },
  description: "The official web of Andi Haller",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={`${ibm_plex_mono.className} antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </LanguageProvider>
    </html>
  );
}
