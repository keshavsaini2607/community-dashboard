import Head from "next/head";
import FaqSection from "../components/FAQ/FaqSection";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import PageDescription from "../components/PageDescription";
import Testimonials from "../components/Testimonials";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Community Dashboard: Home</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            <div>
               <Navbar />
               <Hero />
            </div>
            <PageDescription />
            <Testimonials />
            <FaqSection />
         </main>
      </div>
   );
}
