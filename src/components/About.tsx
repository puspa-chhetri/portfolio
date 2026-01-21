import { useEffect, useRef, useState } from "react"

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "AWS", "Docker", "GraphQL"
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 lg:py-24 scroll-mt-24"
    >
      <h2
        className={`flex items-center gap-4 text-2xl font-semibold text-foreground mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <span className="text-primary font-mono text-lg">01.</span>
        About Me
        <span className="h-px flex-1 bg-border max-w-xs" />
      </h2>



      <div className="grid gap-8 lg:grid-cols-3">
        <div
          className={`lg:col-span-2 space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <p>
            {"I'm a web developer who enjoys building reliable and scalable web applications. I focus on writing clean logic and creating systems that work smoothly behind the scenes, while still delivering clear and user-friendly interfaces."}
          </p>

          <p>
            {"I’ve completed my Bachelor's degree and am currently working as a Web Developer at "}
            <span className="text-foreground font-medium relative group cursor-default">
              Surkhet App
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </span>
            {", a startup where I contribute to building and maintaining modern web applications."}
          </p>

          <p>
            {"I’m actively learning and working with "}
            <span className="text-primary font-medium hover:underline decoration-primary/50 transition-all cursor-default">
              TypeScript
            </span>
            {", "}
            <span className="text-primary font-medium hover:underline decoration-primary/50 transition-all cursor-default">
              Zod
            </span>
            {", "}
            <span className="text-primary font-medium hover:underline decoration-primary/50 transition-all cursor-default">
              TanStack Start
            </span>
            {", and "}
            <span className="text-primary font-medium hover:underline decoration-primary/50 transition-all cursor-default">
              shadcn/ui
            </span>
            {", with a strong interest in backend logic, type safety, and scalable system design."}
          </p>
        </div>
        {/* Skills Grid */}
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h3 className="text-sm font-semibold text-foreground mb-4">Technologies I work with:</h3>
          <div className="grid grid-cols-2 gap-2">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                style={{
                  transitionDelay: isVisible ? `${300 + index * 50}ms` : '0ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-10px)'
                }}
              >
                <span className="text-primary text-xs group-hover:scale-125 transition-transform duration-300">▹</span>
                <span className="font-mono text-xs">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}

