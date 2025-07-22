import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Weoto Technologies Pvt. Ltd.",
  description:
    "Weoto is company formed by four enthusiasts to serve businesses with their technical expertise. At Weoto, we are on a mission to help companies develop competitiveness and agility using the software. Since 2017, Weoto has been delivering exceptional software development services. We have identified great problem solvers with passion and drive, and they are part of our team now. We deliver end-to-end software development, quality assurance and support solutions to clients.",
  icons: {
    icon: "/weoto-favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-left" />
      </body>
    </html>
  );
}
