import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Septio Nugroho - Staff Administrasi",
  description: "Personal portfolio of Septio Nugroho - Staff Administrasi with D3 Sistem Informasi background and 3+ years experience in administration and healthcare services.",
  keywords: ["Septio Nugroho", "Staff Administrasi", "Healthcare Services", "Sistem Informasi", "Microsoft Office", "HTML CSS", "Public Speaking"],
  authors: [{ name: "Septio Nugroho" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Septio Nugroho - Staff Administrasi",
    description: "Personal portfolio showcasing administration expertise with healthcare services background",
    url: "http://localhost:3000",
    siteName: "Septio Nugroho Portfolio",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1024,
        height: 1024,
        alt: "Septio Nugroho - Staff Administrasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Septio Nugroho - Staff Administrasi",
    description: "Personal portfolio showcasing administration expertise with healthcare services background",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="portfolio-theme"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
