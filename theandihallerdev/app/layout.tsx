import "@/app/ui/global.css";
import { ibm_plex_mono } from "@/app/ui/fonts";
import { Metadata } from "next";
import Navbar from "@/app/ui/nav-bar";
import Footer from "@/app/ui/footer";
import Container from "@/app/ui/container";
import Hotjar from "@/app/ui/hotjar";
import GoogleAnalytics from "@/app/ui/google-analytics";

export const metadata: Metadata = {
  title: {
    template: "%s | The Andi Haller",
    default: "The Andi Haller",
  },
  description: "The official web of Andi Haller",
  metadataBase: new URL("https://theandihaller.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibm_plex_mono.className} antialiased min-h-screen`}>
        <GoogleAnalytics />
        <Hotjar />
        <Container>
          <Navbar />
          {children}
          <Footer /> 
        </Container>
      </body>
    </html>
  );
}
