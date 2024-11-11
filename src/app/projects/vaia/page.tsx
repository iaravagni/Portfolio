import Image from "next/image";

import { projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VaiaProject() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
      Pregnancy contractions monitoring device
      </h1>
      <p className="text-muted-foreground mb-6">{projects[0].description}</p>
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/projects/vaia/vaia.png"
          alt="Vaia"
          fill
          className="object-cover"
        />
      </div>

      {/* Project Description */}
      <section className="mb-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
          Accurate monitoring of uterine contractions is crucial for effective prenatal care. In this context, telemedicine emerges as a valuable tool to facilitate access to medical care and improve the quality of life for pregnant women. In this study, a prototype of a portable uterine contraction monitoring system based on electromyographic (EMG) signals was designed, developed, and evaluated. The system includes a mobile application and a low-cost wearable device. This prototype was tested with 14 physiological signals from pregnant women, achieving 79% accuracy and 83% recall in detecting uterine contractions. It was demonstrated that combining information from two EMG channels enhances the ability to identify uterine contractions. Additionally, the suggestion system provided recommendations that were accurate and consistent with healthcare professionals' advice in all cases. The study concludes that the designed prototype can detect and characterize uterine contractions with high precision, even under adverse conditions. This study highlights a potential comprehensive telemedicine tool to improve prenatal care by providing accurate and timely information about uterine activity to both patients and medical staff.
          </p>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {projects[0].technologies.map((tech) => (
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
        <li>Portable, low-cost EMG-based system for uterine contraction monitoring.</li>
        <li>Achieved 79% accuracy and 83% recall with dual-channel EMG signal processing.</li>
        <li>Mobile app integration for real-time data and healthcare-aligned recommendations.</li>
        </ul>
      </section>

      {/* GitHub Link */}
      <section>
        <Button asChild>
          <a
            href="https://github.com/iaravagni/ProyectoFinal"
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
