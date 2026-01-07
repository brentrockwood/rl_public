import "./globals.css";
import { Sora, Space_Grotesk } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Rockwood Lab",
  description:
    "Rockwood Lab is an independent engineering practice providing full-stack software development and prototype engineering led by Brent Rockwood.",
  metadataBase: new URL("https://rockwoodlab.com"),
  openGraph: {
    title: "Rockwood Lab",
    description:
      "Senior-led engineering for software, data systems, and rapid prototypes.",
    url: "https://rockwoodlab.com",
    siteName: "Rockwood Lab",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E254A",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${sora.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
