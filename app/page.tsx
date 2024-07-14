import Navbar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main className="">Hello world!</main>
      <Footer />
    </div>
  );
}
