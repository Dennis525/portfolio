import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 "
    >
      <Head>
        <title>Dennis Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
      <Link href='#hero'>
        <footer className="flex items-center justify-center">Reserved 2023 dennodhia83@gmail.com</footer>
      </Link>
    </div>
  );
}
