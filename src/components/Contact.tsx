import { ArrowUpRight, Mail, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 scroll-mt-24">
      <div className="relative max-w-lg mx-auto text-center">
        {/* Decorative elements */}
        <div className={`absolute -top-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
        </div>

        <span
          className={`text-primary font-mono text-sm tracking-wider transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          04. What's Next?
        </span>

        <h2
          className={`text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Get In Touch
        </h2>

        <p
          className={`text-muted-foreground leading-relaxed mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {"I'm currently open to new opportunities and collaborations. Whether you have a project in mind, want to discuss ideas, or just want to say hello — my inbox is always open. I'll do my best to get back to you!"}
        </p>

        <div
          className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <Button
            asChild
            size="lg"
            variant="outline"
            className={`relative overflow-hidden border-primary text-primary hover:text-primary-foreground transition-all duration-500 px-8 py-6 text-lg ${isHovered ? "shadow-lg shadow-primary/25" : ""
              }`}
          >
            <a href="mailto:puspachhetri121@gmail.com">
              <span
                className={`absolute inset-0 bg-primary transition-transform duration-500 ${isHovered ? "translate-y-0" : "translate-y-full"
                  }`}
              />
              <span className="relative flex items-center gap-2">
                <Mail
                  className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "rotate-12" : ""
                    }`}
                />
                Say Hello
                <ArrowUpRight
                  className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1 -translate-y-1" : ""
                    }`}
                />
              </span>
            </a>
          </Button>
        </div>

        {/* Floating decorative dots */}
        <div className={`absolute -bottom-8 left-0 w-2 h-2 rounded-full bg-primary/50 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute -bottom-4 left-8 w-1 h-1 rounded-full bg-primary/30 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute -bottom-6 right-4 w-1.5 h-1.5 rounded-full bg-primary/40 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </section>
  )
}

