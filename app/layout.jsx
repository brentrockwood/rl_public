import "./globals.css";

export const metadata = {
  title: "Rockwood Lab | Useful AI, under observation",
  description: "Rockwood Lab is an independent research and practice for useful AI systems under observation.",
  metadataBase: new URL("https://rockwoodlab.com"),
  openGraph: {
    title: "Rockwood Lab | Useful AI, under observation",
    description: "An independent lab for systems, security, and applied AI.",
    url: "https://rockwoodlab.com",
    siteName: "Rockwood Lab",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
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
  themeColor: "#f7f7f4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
