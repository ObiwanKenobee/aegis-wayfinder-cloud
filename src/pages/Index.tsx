import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlatformOverview from "@/components/PlatformOverview";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PlatformOverview />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;
