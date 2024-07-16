
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <main className="container mx-auto py-24">
      <Hero />
      <ProductsSection />
    </main>
  );
}
