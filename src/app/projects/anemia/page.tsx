import Image from "next/image";

import { projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AnemiaProject() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
      Anemia Detection with RBC Segmentation
      </h1>
      <p className="text-muted-foreground mb-6">{projects[1].description}</p>
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/projects/anemia/anemia.png"
          alt="anemia"
          fill
          className="object-cover"
        />
      </div>

      {/* Project Description */}
      <section className="mb-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
          This project addresses a critical challenge for merchants participating in the "Double 11" sales day: identifying which new buyers are likely to become repeat customers. By leveraging anonymized shopping logs, we aim to predict customer retention and help merchants enhance their promotional strategies, leading to improved ROI and sustainable customer relationships.
          </p>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {projects[1].technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Key Features
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>AI-Driven Customer Retention Prediction: Built models to identify repeat buyers using historical shopping data.</li>
        <li>Ensemble Machine Learning: Combined multiple ML models (XGBoost, LightGBM, etc.) for higher accuracy.</li>
        <li>Advanced Feature Engineering: Extracted behavioral patterns, merchant interactions, and temporal trends.</li>
        </ul>
      </section>

      {/* GitHub Link */}
      <section>
        <Button asChild>
          <a
            href="https://github.com/iaravagni/AIPI520_FinalProject"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            View on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </div>
  );
}
