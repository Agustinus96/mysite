import Image from "next/image";
import Footer from "../../components/footer";
import Link from "next/link";
import Blog from "../../components/blog";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Body from "../../components/body";
import Intro from "../../components/intro";

export default async function Home() {

  return (
    <main class="snap-always snap-y row">
      <Intro />
      <Body />
      <div class="w-full text-center bg-emerald-900 bg-opacity-60">
        <Footer />
      </div>
    </main>
  );
}
