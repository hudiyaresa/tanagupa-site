// components
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// sections
import Hero from "./hero";
import Content from "./content";
import Comments from "./comments";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Comments />
      <Footer />
    </>
  );
}
