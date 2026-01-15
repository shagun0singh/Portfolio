"use client";

import { useState } from "react";
import { PortfolioGallery } from "@/components/ui/portfolio-gallery";

export default function ProjectsPage() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleProjectOpen = (index: number) => {
    setCurrentProjectIndex(index);
    // You can add navigation logic here, e.g., open a modal or navigate to project detail page
    console.log("Opening project:", index);
  };

  return (
    <div className="min-h-screen w-full bg-black">
      <PortfolioGallery 
        onProjectOpen={handleProjectOpen}
        currentIndex={currentProjectIndex}
      />
    </div>
  );
}
