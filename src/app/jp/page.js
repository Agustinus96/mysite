import Image from "next/image";
import Footer from "../../../components/jp/footer-jp";
import Link from "next/link";
import BlogJP from "../../../components/jp/blog-jp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import BodyJP from "../../../components/jp/body-jp";
import IntroJP from "../../../components/jp/intro-jp";

export default async function Home() {

  return (
    <main class="snap-always snap-y row">
      <IntroJP />
      <BodyJP />
      <div class="snap-center snap-always snap-x">
        <BlogJP class="snap-center overflow-hidden" />
      </div>
      <div class="w-full text-center bg-emerald-900 bg-opacity-60">
        <Footer />
      </div>
    </main>
  );
}
