import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Investor Data Room — Moonshine Capital",
  description: "A beautiful, password-protected investor data room you can deploy to Vercel."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
