import type { Metadata } from "next";
import { Inter, Familjen_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const familijenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Pupil",
  description: "A non-profit organization that helps underprivileged children",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.className, familijenGrotesk.className].join(" ")}>
        {children}
      </body>
    </html>
  );
}
