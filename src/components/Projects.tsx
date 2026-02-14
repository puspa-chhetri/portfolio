
import { ArrowUpRight, Github, ExternalLink, Folder } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"
import { Link } from "@tanstack/react-router"

const featuredProjects = [
  {
    title: "DevFlow",
    description:
      "A modern project management tool built for developer teams. Features include real-time collaboration, GitHub integration, and AI-powered task suggestions that help teams ship faster.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "OpenAI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "CloudSync",
    description:
      "Cross-platform file synchronization service with end-to-end encryption. Supports seamless sync across desktop, mobile, and web applications with zero-knowledge architecture.",
    technologies: ["React Native", "Node.js", "AWS S3", "Redis", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
]

const otherProjects = [
  {
    title: "MetricsHub",
    description: "Analytics dashboard for SaaS applications with real-time insights and custom reporting.",
    technologies: ["React", "D3.js", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "CodeReview AI",
    description: "AI-powered code review tool with intelligent suggestions and security detection.",
    technologies: ["Python", "GPT-4", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "TaskFlow",
    description: "Minimalist task management app with keyboard-first navigation and offline support.",
    technologies: ["Next.js", "IndexedDB", "PWA"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "DevLinks",
    description: "Personal link management tool for developers with custom domains and analytics.",
    technologies: ["Remix", "Cloudflare", "SQLite"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
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
    <section id="projects" ref={sectionRef} className="py-16 lg:py-24 scroll-mt-24">
      <h2
        className={`flex items-center gap-4 text-2xl font-semibold text-foreground mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <span className="text-primary font-mono text-lg">03.</span>
        Things I've Built
        <span className="h-px flex-1 bg-border max-w-xs" />
      </h2>

      {/* Featured Projects */}
      <div className="space-y-24 mb-16">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${200 + index * 200}ms` }}
            onMouseEnter={() => setHoveredProject(project.title)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={`relative p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 ${hoveredProject === project.title ? 'border-primary/50 shadow-2xl shadow-primary/10 -translate-y-2' : 'hover:border-border'}`}>
              {/* Project number */}
              <span className="absolute -top-4 -left-2 text-8xl font-bold text-primary/10 select-none">
                0{index + 1}
              </span>

              <div className="relative">
                <span className="text-primary font-mono text-sm">Featured Project</span>
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">
                  <Link
                    to={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-sm font-mono text-primary/80 transition-all duration-300 hover:text-primary"
                      style={{
                        transitionDelay: `${techIndex * 50}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    to={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-6 h-6" />
                  </Link>
                  <Link
                    to={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 transition-all duration-500 ${hoveredProject === project.title ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/50 rounded-tr-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects Grid */}
      <div
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '600ms' }}
      >
        <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
          Other Noteworthy Projects
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative p-6 rounded-lg bg-card border border-border/50 transition-all duration-300 hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5`}
              style={{
                transitionDelay: `${700 + index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                <div className="flex items-center gap-3">
                  <Link
                    to={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  {project.live && (
                    <Link
                      to={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '1100ms' }}
      >
        <Link
          to="https://github.com/puspa-chhetri"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-all duration-300 group"
        >
          View More on GitHub
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
