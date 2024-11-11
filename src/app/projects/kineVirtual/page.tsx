import Image from "next/image";

import { projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KineVirtualProject() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
      VR Physical Therapy
      </h1>
      <p className="text-muted-foreground mb-6">{projects[1].description}</p>
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/projects/kineVirtual/kineVirtual.png"
          alt="kineVirtual"
          fill
          className="object-cover"
        />
      </div>

      {/* Project Description */}
      <section className="mb-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
          KineVirtual is a Unity-based virtual physical therapy environment designed to help patients recover from hand and wrist injuries. The program includes a series of guided exercises and uses hand recognition technology to ensure proper form and effective rehabilitation.
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
        <li>Hand Recognition: Real-time tracking of hand movements to verify if exercises are being performed correctly.</li>
        <li>Preset Therapy Programs: A variety of exercises tailored specifically for hand and wrist rehabilitation.</li>
        <li>Real-Time Feedback: Immediate feedback on performance to guide patients through their recovery journey.</li>
        </ul>
      </section>

      {/* GitHub Link */}
      <section>
        <Button asChild>
          <a
            href="https://github.com/iaravagni/kineVirtual"
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
