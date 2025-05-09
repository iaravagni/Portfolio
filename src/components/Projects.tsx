"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  internalLink: string;
  externalLink: string;
  image: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [slidesToShow, setSlidesToShow] = useState(2);

  // Handle responsive slidesToShow
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update visible projects when currentIndex or slidesToShow changes
  useEffect(() => {
    const visibleItems = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % projects.length;
      visibleItems.push(projects[index]);
    }
    setVisibleProjects(visibleItems);
  }, [currentIndex, slidesToShow, projects]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % projects.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="flex space-x-2">
          <button 
            onClick={goToPrevious}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project, index) => (
            <Card key={`${project.title}-${index}`} className="h-full">
              <CardHeader className="relative h-48 p-0">
                <div 
                  className="w-full h-full rounded-t-lg bg-center bg-cover"
                  style={{ backgroundImage: `url(${project.image})` }}
                  aria-label={project.title}
                />
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <a href={project.internalLink}>
                    <h3 className="font-semibold hover:underline">
                      {project.title}
                    </h3>
                  </a>
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}