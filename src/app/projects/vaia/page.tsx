import Image from "next/image";

import { projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const getProjectByKey = (key: string) =>
  projects.find((p) => p.key === key);

const project = getProjectByKey("vaia");

export default function VaiaProject() {
  if (!project) {
    return <div className="text-red-500">Project not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-2 tracking-tight">{project.title}</h1>
      <p className="text-muted-foreground mb-6">{project.description}</p>
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Project Description */}
      <section className="mb-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Key Features */}
      {project?.features?.length > 0 && (
        <section className="mb-8">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
            Key Features
          </h2>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {/* GitHub Link */}
      <section>
        <Button asChild>
          <a
            href={project.externalLink}
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
