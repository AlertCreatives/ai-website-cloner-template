import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katharine Pooley Clone",
  description: "Luxury interior design website template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">{children}</body>
    </html>
  );
}
