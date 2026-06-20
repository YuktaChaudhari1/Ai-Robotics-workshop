import React from "react";
import Hero from "../components/Hero";
import WorkshopDetails from "../components/WorkshopDetails";
import LearningOutcomes from "../components/LearningOutcomes";
import FAQ from "../components/FAQ";
import RegistrationForm from "../components/RegistrationForm";
import Footer from "../components/Footer";

export default function WorkshopPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
