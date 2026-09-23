import "./globals.css";

export const metadata = {
  title: "Rockwood Lab | Independent R&D",
  description: "Independent R&D working on AI safety, workflow automation, and infrastructure design.",
  metadataBase: new URL("https://rockwoodlab.com"),
  openGraph: {
    title: "Rockwood Lab | Independent R&D",
    description: "Independent R&D working on AI safety, workflow automation, and infrastructure design.",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2e9" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1e" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
