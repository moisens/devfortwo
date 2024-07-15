import Navbar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Landing from "@/assets/dev-landing.jpg";

export default function Home() {
  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main className="w-full h-auto bg-slate-100 ">
        <header className="max-w-screen-2xl h-auto bg-slate-100 m-auto px-4 mt-20 mb-40 lg:grid grid-cols-2 gap-4 lg:px-8">
          <section className="mb-8 sm:pl-4 lg:mb-0">
            <h1 className="text-5xl font-normal leading-tight  pb-8">
              Bridging the gap between developers and employers.
            </h1>
            <h3 className="text-3xl font-normal">
              devfortwo is an alternative to Linkedin.
            </h3>
            <p className="leading-relaxed mt-10">
              The easiest way to simplify job search and hiring process. For
              developers, it offers tools to track and manage your job search
              efficiently, helping you find opportunities effortlessly.
            </p>
            <p className="leading-relaxed pt-4">
              Foremployers, it provides a platform to discover and connect with
              top talent, streamlining your recruitment process. Whether you re
              a developer looking for your next career move or an employer
              seeking new team members, devfortwo is designed to bring you
              together seamlessly.
            </p>
          </section>

          <section className="h-[auto] bg-slate-100 rounded-2xl sm:mx-4">
            <Image
              src={Landing}
              alt="devfortwo"
              title="devfortwo"
              width={1920}
              height={1080}
              style={{
                maxWidth: "auto",
                height: "100%",
                objectFit: "cover",
              }}
              objectFit="cover"
              className="rounded-2xl"
            />
          </section>
        </header>
      </main>
      <Footer />
    </div>
  );
}
