
import { Link } from "@tanstack/react-router"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/puspa-chhetri", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/puspa-b-a26a47282/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:puspachhetri121@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      {/* Mobile social links */}
      <div className="flex justify-center gap-6 mb-8 lg:hidden">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            to={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
          </Link>
        ))}
      </div>

      <div className="text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          {"Designed & Built by "}
          <span className="text-foreground font-medium hover:text-primary transition-colors cursor-default">
            Puspa
          </span>
        </p>

      </div>
    </footer>
  )
}
