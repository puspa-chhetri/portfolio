
import { Link } from "@tanstack/react-router"
import { Github, Linkedin, Mail, ArrowDown, ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

const socialLinks = [
  { icon: Github, href: "https://github.com/puspa-chhetri", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/puspa-b-a26a47282/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:puspachhetri121@gmail.com", label: "Email" },
]

const navLinks = [
  { label: "ABOUT", href: "#about", num: "01" },
  { label: "EXPERIENCE", href: "#experience", num: "02" },
  { label: "PROJECTS", href: "#projects", num: "03" },
  { label: "CONTACT", href: "#contact", num: "04" },
]

const roles = ["Web Developer", "JavaScript Enthusiast", "Web Application Developer", "Problem Solver"]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const pageBottom = document.documentElement.scrollHeight - window.innerHeight
      setIsAtBottom(window.scrollY >= pageBottom - 8)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(displayedRole.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedRole, isDeleting, roleIndex])

  const handleScrollButton = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const pageBottom = document.documentElement.scrollHeight - window.innerHeight
    const nextY = Math.min(window.scrollY + Math.round(window.innerHeight * 0.85), pageBottom)
    window.scrollTo({ top: nextY, behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-between pb-6 lg:py-6">
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-1">
          {/* Animated greeting */}
          <div
            className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-primary font-mono text-sm tracking-wider">Hi, my name is</span>
          </div>

          {/* Name with staggered animation */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="inline-block hover:text-primary transition-colors duration-300">Puspa</span>{" "}
            <span className="inline-block hover:text-primary transition-colors duration-300">BC</span>
            <span className="text-primary">.</span>
          </h1>

          {/* Typewriter role */}
          <div
            className={`h-8 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {displayedRole}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            </p>
          </div>

          {/* Description */}
          <p
            className={`text-muted-foreground py-4 text-lg max-w-md leading-relaxed transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            I build <span className="text-foreground font-medium">reliable</span>, <span className="text-foreground font-medium">scalable</span> web applications with a focus on performance and usability.          </p>
        </div>

        {/* Navigation Links */}
        <nav
          className={`mt-16 space-y-3 hidden lg:block transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              to={link.href}
              className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300"
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <span className="font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {link.num}
              </span>
              <span className="h-px w-8 bg-muted-foreground/50 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
              <span className="text-xs font-medium tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Social Links */}
      <div
        className={`flex items-center gap-6 mt-12 transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {socialLinks.map((social, index) => (
          <Link
            key={social.label}
            to={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-muted-foreground hover:text-primary transition-all duration-300"
            aria-label={social.label}
            style={{ animationDelay: `${800 + index * 100}ms` }}
          >
            <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {social.label}
            </span>
          </Link>
        ))}
        <div className="h-px flex-1 bg-border max-w-24 ml-4" />
      </div>

      {/* Scroll indicator */}
      <div
        className={`flex items-center justify-center mt-12 transition-all duration-700 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      >
        <button
          type="button"
          onClick={handleScrollButton}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs font-mono tracking-wider">{isAtBottom ? "Top" : "Scroll"}</span>
          {isAtBottom ? (
            <ArrowUp className="w-4 h-4 animate-bounce" />
          ) : (
            <ArrowDown className="w-4 h-4 animate-bounce" />
          )}
        </button>
      </div>
    </section>
  )
}
