import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveSimulator from "@/components/InteractiveSimulator";
import WorkflowSteps from "@/components/WorkflowSteps";
import MacLineup from "@/components/MacLineup";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import ComparisonTable from "@/components/ComparisonTable";
import ProductivityCalculator from "@/components/ProductivityCalculator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-mac-dark text-slate-100 bg-grid relative selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <InteractiveSimulator />
      <WorkflowSteps />
      <MacLineup />
      <HowItWorks />
      <FeaturesGrid />
      <ComparisonTable />
      <ProductivityCalculator />
      <FAQ />
      <Footer />
    </main>
  );
}
