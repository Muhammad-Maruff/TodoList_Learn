import AppShell from "@/components/AppShell";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-sans",
})

export const metadata = {
  title: "TodoList App",
  description: "Aplikasi Manajement Tugas dengan Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased bg-gray-50`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}