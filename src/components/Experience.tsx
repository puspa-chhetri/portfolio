
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "@tanstack/react-router"
import { Badge } from "./ui/badge"

const experiences = [
  {
    period: "2025 — Present",
    title: "Junior Developer",
    company: "Surkhet App",
    url: "https://surkhet.app/",
    description:
      "Started my career building custom WordPress themes and plugins. Learned the fundamentals of web development and collaborated with senior developers on client projects.",
    technologies: ["TypeScript", "React", "Tanstack Start", "Zod", "Shadcn"],
  },
  {
    period: "2025-jul — 2025-oct",
    title: "Inten",
    company: "Genese Solution",
    url: "https://www.genesesolution.com/",
    description:
      "Worked on AWS Cloud infrastructure, including EC2 deployment, LAMP stack setup, and web application hosting. Gained hands-on experience in Linux server management, database integration, and security configuration",
    technologies: ["EC2", "AWS IAM", "Amazon S3", "AWS Lambda", "RDS", "AWS CloudFormation"],
  },
  {
    period: "2024-Dec — 2025-Mar",
    title: "Intern",
    company: "Green Leaf InfoTech Pvt.Ltd.",
    url: "https://greenleafinfotech.com/",
    description:
      "Designed and developed responsive websites, focusing on UI consistency, mobile compatibility, and performance optimization.",
    technologies: ["JavaScript", "Bootstrap", "HTML", "CSS", "Firebase", "jQuery"],
  },
]

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-16 lg:py-24 scroll-mt-24">
      <h2
        className={`flex items-center gap-4 text-2xl font-semibold text-foreground mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <span className="text-primary font-mono text-lg">02.</span>
        Where I've Worked
        <span className="h-px flex-1 bg-border max-w-xs" />
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-[5px] top-0 w-[11px] h-[11px] rounded-full border-2 border-primary bg-background hidden sm:block transition-all duration-300 ${hoveredIndex === index ? 'scale-150 bg-primary' : ''}`}
              />

              <div className={`sm:pl-8 p-6 rounded-lg transition-all duration-300 ${hoveredIndex === index ? 'bg-secondary/80 shadow-lg shadow-primary/5 -translate-y-1' : 'bg-transparent hover:bg-secondary/50'}`}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <header className="sm:w-32 shrink-0">
                    <span className="text-xs font-mono text-primary tracking-wider">
                      {exp.period}
                    </span>
                  </header>

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg leading-snug text-foreground">
                      <Link
                        to={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 group/link"
                      >
                        <span className="relative">
                          {exp.title}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover/link:w-full transition-all duration-300" />
                        </span>
                        <span className="text-primary">@</span>
                        <span className="text-primary">{exp.company}</span>
                        <ArrowUpRight className={`w-4 h-4 text-primary transition-all duration-300 ${hoveredIndex === index ? 'translate-x-1 -translate-y-1' : ''}`} />
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default`}
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*
      <div
        className={`mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '800ms' }}
      >
        <Link
          to="/resume.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-all duration-300 group"
        >
          View Full Résumé
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
      */}
    </section>
  )
}
