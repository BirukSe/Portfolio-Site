"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import bura from '../assets/biruke-png.jpg'
import code from '../assets/code.png'
import kuriftu from '../assets/kuriftu.png'
import vid from '../assets/vid-conf.png'
import social from '../assets/image.png'
import feedback from '../assets/feedback.png'
import verify from '../assets/verify.png'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Menu,
  X,
  ChevronRight,
  Send,
  ArrowRight,
  Star,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Layers,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)

  // Intersection observer for each section
  const useSectionObserver = (sectionId:any) => {
    const [ref, inView] = useInView({
      threshold: 0.3,
    })

    useEffect(() => {
      if (inView) {
        setActiveSection(sectionId)
      }
    }, [inView, sectionId])

    return ref
  }

  // Create refs for each section
  const homeRef = useSectionObserver("home")
  const aboutRef = useSectionObserver("about")
  const skillsRef = useSectionObserver("skills")
  const projectsRef = useSectionObserver("projects")
  const experienceRef = useSectionObserver("experience")
  const contactRef = useSectionObserver("contact")

  // Smooth scroll to section
  const scrollToSection = (sectionId:any) => {
    setMobileMenuOpen(false)
    // Use document.getElementById to find the element by its ID
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle contact form submission
  const handleContactSubmit = (e:any) => {
    e.preventDefault()
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
    e.target.reset()
  }

  // Toggle showing all projects
  const toggleAllProjects = () => {
    setShowAllProjects(!showAllProjects)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[70%] bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute top-[60%] -left-[10%] w-[40%] h-[60%] bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      {/* Side Navigation */}
      <nav className="fixed top-0 left-0 bottom-0 z-50 w-20 hidden lg:flex flex-col items-center justify-center gap-8 border-r border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="absolute top-6">
          <ModeToggle />
        </div>

        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className={cn(
              "relative w-12 h-12 rounded-xl flex items-center justify-center transition-all group",
              activeSection === "home" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10",
            )}
          >
            <span
              className={cn(
                "absolute left-full ml-2 px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 translate-x-2 transition-all",
                "group-hover:opacity-100 group-hover:translate-x-0",
                "bg-primary/10",
              )}
            >
              Home
            </span>
            <User className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className={cn(
              "relative w-12 h-12 rounded-xl flex items-center justify-center transition-all group",
              activeSection === "about" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10",
            )}
          >
            <span
              className={cn(
                "absolute left-full ml-2 px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 translate-x-2 transition-all",
                "group-hover:opacity-100 group-hover:translate-x-0",
                "bg-primary/10",
              )}
            >
              About
            </span>
            <User className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className={cn(
              "relative w-12 h-12 rounded-xl flex items-center justify-center transition-all group",
              activeSection === "skills" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10",
            )}
          >
            <span
              className={cn(
                "absolute left-full ml-2 px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 translate-x-2 transition-all",
                "group-hover:opacity-100 group-hover:translate-x-0",
                "bg-primary/10",
              )}
            >
              Skills
            </span>
            <Code className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className={cn(
              "relative w-12 h-12 rounded-xl flex items-center justify-center transition-all group",
              activeSection === "projects" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10",
            )}
          >
            <span
              className={cn(
                "absolute left-full ml-2 px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 translate-x-2 transition-all",
                "group-hover:opacity-100 group-hover:translate-x-0",
                "bg-primary/10",
              )}
            >
              Projects
            </span>
            <Layers className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollToSection("experience")}
            className={cn(
              "relative w-12 h-12 rounded-xl flex items-center justify-center transition-all group",
              activeSection === "experience" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10",
            )}
          >
            <span
              className={cn(
                "absolute left-full ml-2 px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 translate-x-2 transition-all",
                "group-hover:opacity-100 group-hover:translate-x-0",
                "bg-primary/10",
              )}
            >
              Experience
            </span>
            <Briefcase className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={cn(
              "relative w-12 h-12 rounded-xl flex items-center justify-center transition-all group",
              activeSection === "contact" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10",
            )}
          >
            <span
              className={cn(
                "absolute left-full ml-2 px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 translate-x-2 transition-all",
                "group-hover:opacity-100 group-hover:translate-x-0",
                "bg-primary/10",
              )}
            >
              Contact
            </span>
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute bottom-6 flex flex-col gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 lg:pl-24 lg:pr-6 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="font-bold text-xl">Biruk Seyoum</div>
        <div className="flex items-center gap-2">
          <div className="block lg:hidden">
            <ModeToggle />
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background pt-16 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col p-6 gap-2">
              <Button
                variant={activeSection === "home" ? "default" : "ghost"}
                className="justify-start h-12 text-lg"
                onClick={() => scrollToSection("home")}
              >
                <User className="mr-2 h-5 w-5" />
                Home
              </Button>
              <Button
                variant={activeSection === "about" ? "default" : "ghost"}
                className="justify-start h-12 text-lg"
                onClick={() => scrollToSection("about")}
              >
                <User className="mr-2 h-5 w-5" />
                About
              </Button>
              <Button
                variant={activeSection === "skills" ? "default" : "ghost"}
                className="justify-start h-12 text-lg"
                onClick={() => scrollToSection("skills")}
              >
                <Code className="mr-2 h-5 w-5" />
                Skills
              </Button>
              <Button
                variant={activeSection === "projects" ? "default" : "ghost"}
                className="justify-start h-12 text-lg"
                onClick={() => scrollToSection("projects")}
              >
                <Layers className="mr-2 h-5 w-5" />
                Projects
              </Button>
              <Button
                variant={activeSection === "experience" ? "default" : "ghost"}
                className="justify-start h-12 text-lg"
                onClick={() => scrollToSection("experience")}
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Experience
              </Button>
              <Button
                variant={activeSection === "contact" ? "default" : "ghost"}
                className="justify-start h-12 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact
              </Button>

              <div className="mt-auto pt-6 flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:bseyoum003@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16 lg:pl-20">
        {/* Hero Section */}
        <section
          ref={homeRef}
          id="home"
          className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden"
        >
          <div className="container px-4 md:px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="flex-1 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block">
                <Badge className="text-base px-4 py-1.5 bg-primary/10 text-primary border-primary/20 mb-4">
                  Full-Stack Developer
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
                Hi, I'm <span className="text-primary">Biruk Seyoum</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-[800px]">
                Building modern web applications with passion and precision. Transforming ideas into exceptional digital
                experiences.
              </p>

              <div className="flex flex-wrap gap-6 pt-6">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-3 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-8">
                <div className="flex -space-x-3">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Star className="h-7 w-7 text-primary" />
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Code className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">
                  Google Developer Group Hackathon <span className="font-bold">Grand Prize Winner</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden border-4 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full" />
                <Image
                  src={bura}
                  alt="Biruk Seyoum"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-base font-medium">Available for work</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-12 w-12"
              onClick={() => scrollToSection("about")}
            >
              <ChevronRight className="h-8 w-8 -rotate-90" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="py-24 scroll-mt-16 bg-muted/30">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">About Me</h2>
              <div className="w-32 h-2 bg-primary rounded-full" />
            </div>

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
              <motion.div
                className="relative rounded-2xl overflow-hidden aspect-square max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image src={bura} alt="Biruk Seyoum" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white">Biruk Seyoum</h3>
                    <p className="text-xl text-white/80">Full-Stack Developer</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">Who am I?</h3>
                  <p className="text-xl leading-relaxed">
                    I'm a passionate full-stack developer based in Addis Ababa, Ethiopia, with experience in building
                    scalable web applications. I specialize in React, Next.js, Node.js, and various other modern web
                    technologies.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I've contributed to the development of five scalable full-stack web applications, leveraging React
                    for dynamic front-end development and Node.js with MongoDB for the backend. I enjoy collaborating
                    with cross-functional teams to implement user-friendly interfaces and optimize application
                    performance.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I'm currently a software engineering student at Addis Ababa University, where I continue to expand
                    my knowledge and skills in software development.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Location</h4>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      <span className="text-lg">Addis Ababa, Ethiopia</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Email</h4>
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-primary" />
                      <a href="mailto:bseyoum003@gmail.com" className="text-lg hover:underline">
                        bseyoum003@gmail.com
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Phone</h4>
                    <div className="flex items-center gap-3">
                      <Phone className="h-6 w-6 text-primary" />
                      <a href="tel:+251937454293" className="text-lg hover:underline">
                        +251 937454293
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Education</h4>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <span className="text-lg">Software Engineering Student</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button className="rounded-full px-8 py-6 text-lg" onClick={() => scrollToSection("contact")}>
                    Contact Me
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="py-24 scroll-mt-16">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">My Skills</h2>
              <div className="w-32 h-2 bg-primary rounded-full" />
            </div>

            <div className="grid gap-12">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-background to-muted">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                      <Layers className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Frontend Development</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">React / Next.js</span>
                          <span className="text-lg">95%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "95%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">HTML / CSS / Tailwind</span>
                          <span className="text-lg">90%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "90%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">JavaScript / TypeScript</span>
                          <span className="text-lg">85%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">React Native / Flutter</span>
                          <span className="text-lg">80%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "80%" }} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-background to-muted">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Backend Development</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">Node.js / Express</span>
                          <span className="text-lg">90%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "90%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">MongoDB / Databases</span>
                          <span className="text-lg">85%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">NestJS</span>
                          <span className="text-lg">80%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "80%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">Spring Boot</span>
                          <span className="text-lg">75%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "75%" }} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-background to-muted">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Tools & Others</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">Git / GitHub</span>
                          <span className="text-lg">90%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "90%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">UI/UX Design</span>
                          <span className="text-lg">85%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">Responsive Design</span>
                          <span className="text-lg">95%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "95%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-lg">AI Integration</span>
                          <span className="text-lg">80%</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "80%" }} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">React</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">Next.js</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">Node.js</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">Express</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">MongoDB</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">TypeScript</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">JavaScript</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">HTML5</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">CSS3</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">Tailwind CSS</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">Flutter</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">React Native</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">NestJS</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">Spring Boot</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">Git</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">RESTful APIs</Badge>
                  <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">
                    Socket Programming
                  </Badge>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="py-24 scroll-mt-16 bg-muted/30">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Featured Projects</h2>
              <div className="w-32 h-2 bg-primary rounded-full" />
            </div>

            <div className="grid gap-16">
              {/* Project 1 */}
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative overflow-hidden rounded-xl aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={code}
                      alt="Code Craft Preview"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-8">
                    <Badge className="px-4 py-2 text-lg bg-primary/10 text-primary border-primary/20">
                      Featured Project
                    </Badge>
                    <h3 className="text-3xl font-bold">Code Craft</h3>
                    <p className="text-xl text-muted-foreground">AI-Powered Design-to-Code Generator</p>
                    <p className="text-lg leading-relaxed">
                      Developed an intuitive AI-powered design-to-code generator that allows users to visually design
                      their UI by drawing directly on a canvas. With a single click on "Generate Code," the tool
                      automatically converts designs into fully functional code, enabling seamless front-end
                      development.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2">
                        shadcn/ui
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2">
                        AI
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2">
                        Canvas API
                      </Badge>
                    </div>
                    <div className="flex gap-6">
                      <Button className="rounded-full px-8 py-6 text-lg" asChild>
                        <a href="https://code-craft-f8fu.vercel.app" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-3 h-5 w-5" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" className="rounded-full px-8 py-6 text-lg" asChild>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-3 h-5 w-5" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                  <div className="relative overflow-hidden rounded-xl aspect-video lg:order-2">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={vid}
                      alt="Vid-Chat Preview"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-8 lg:order-1">
                    <Badge className="px-4 py-2 text-lg bg-primary/10 text-primary border-primary/20">
                      Featured Project
                    </Badge>
                    <h3 className="text-3xl font-bold">Vid-Chat</h3>
                    <p className="text-xl text-muted-foreground">Real-time Video Conferencing Platform</p>
                    <p className="text-lg leading-relaxed">
                      Built a comprehensive video conferencing platform with real-time communication capabilities. The
                      platform supports video calls, screen sharing, and chat functionality, providing a seamless
                      communication experience for users.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2">
                        shadcn/ui
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2">
                        Stream API
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2">
                        Socket Programming
                      </Badge>
                    </div>
                    <div className="flex gap-6">
                      <Button className="rounded-full px-8 py-6 text-lg" asChild>
                        <a
                          href="https://video-conferencing-platform-cenk-c3ghyvzj7.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-3 h-5 w-5" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" className="rounded-full px-8 py-6 text-lg" asChild>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-3 h-5 w-5" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative overflow-hidden rounded-xl aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={kuriftu}
                      alt="Kuriftu Resort Preview"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-8">
                    <Badge className="px-4 py-2 text-lg bg-primary/10 text-primary border-primary/20">
                      Featured Project
                    </Badge>
                    <h3 className="text-3xl font-bold">Kuriftu Resort</h3>
                    <p className="text-xl text-muted-foreground">Modern Luxury Resort Website</p>
                    <p className="text-lg leading-relaxed">
                      Designed and developed a modern website for Kuriftu Resort, showcasing the luxury accommodations,
                      amenities, and services. The website features a clean design, responsive layout, and intuitive
                      navigation to enhance the user experience.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2">
                        Tailwind CSS
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2">
                        Responsive Design
                      </Badge>
                    </div>
                    <div className="flex gap-6">
                      <Button className="rounded-full px-8 py-6 text-lg" asChild>
                        <a href="https://kuriftu-inky.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-3 h-5 w-5" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" className="rounded-full px-8 py-6 text-lg" asChild>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-3 h-5 w-5" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Projects (Shown when "View All Projects" is clicked) */}
              <AnimatePresence>
                {showAllProjects && (
                  <>
                    {/* Project 4 - Social Media Site */}
                    <motion.div
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                        <div className="relative overflow-hidden rounded-xl aspect-video lg:order-2">
                          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Image
                            src={social}
                            alt="Social Media Site Preview"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-8 lg:order-1">
                          <Badge className="px-4 py-2 text-lg bg-primary/10 text-primary border-primary/20">
                            Project
                          </Badge>
                          <h3 className="text-3xl font-bold">Social Media Platform</h3>
                          <p className="text-xl text-muted-foreground">Interactive Community Platform</p>
                          <p className="text-lg leading-relaxed">
                            Developed a feature-rich social media platform that allows users to create profiles, share
                            posts, interact with content through likes and comments, and connect with other users. The
                            platform includes real-time notifications and a responsive design for all devices.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              React
                            </Badge>
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              Node.js
                            </Badge>
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              MongoDB
                            </Badge>
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              Socket.io
                            </Badge>
                          </div>
                          <div className="flex gap-6">
                            <Button className="rounded-full px-8 py-6 text-lg" asChild>
                              <a href="https://social-v2-pwvh.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-3 h-5 w-5" />
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" className="rounded-full px-8 py-6 text-lg" asChild>
                              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <Github className="mr-3 h-5 w-5" />
                                Source Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Project 5 - Kuriftu Feedback Platform */}
                    <motion.div
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative overflow-hidden rounded-xl aspect-video">
                          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Image
                            src={feedback}
                            alt="Kuriftu Feedback Platform Preview"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-8">
                          <Badge className="px-4 py-2 text-lg bg-primary/10 text-primary border-primary/20">
                            Project
                          </Badge>
                          <h3 className="text-3xl font-bold">Kuriftu Feedback Platform</h3>
                          <p className="text-xl text-muted-foreground">
                            AI-Powered Feedback & Guest Experience Platform
                          </p>
                          <p className="text-lg leading-relaxed">
                            Developed an AI-powered feedback and guest experience platform for Kuriftu Resort. The
                            platform allows guests to provide feedback and helps the resort improve their services based
                            on guest experiences. AI analysis provides actionable insights from customer feedback.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              Next.js
                            </Badge>
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              AI Integration
                            </Badge>
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              Data Analysis
                            </Badge>
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              Tailwind CSS
                            </Badge>
                          </div>
                          <div className="flex gap-6">
                            <Button className="rounded-full px-8 py-6 text-lg" asChild>
                              <a href="https://feedback-kuriftu.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-3 h-5 w-5" />
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" className="rounded-full px-8 py-6 text-lg" asChild>
                              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <Github className="mr-3 h-5 w-5" />
                                Source Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Project 6 - Book Tracking Site */}
                    <motion.div
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                     
                    </motion.div>

                    {/* Project 7 - Document Verification System */}
                    <motion.div
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative overflow-hidden rounded-xl aspect-video">
                          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Image
                            src={verify}
                            alt="Document Verification System Preview"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-8">
                          <Badge className="px-4 py-2 text-lg bg-primary/10 text-primary border-primary/20">
                            Project
                          </Badge>
                          <h3 className="text-3xl font-bold">OneStep Verifier</h3>
                          <p className="text-xl text-muted-foreground">
                            Document Verification System for St. Paul Hospital
                          </p>
                          <p className="text-lg leading-relaxed">
                            This project embeds a QR code in uploaded documents, ensuring their authenticity by storing
                            it in a database. Hospitals can scan the code to verify referral documents, preventing fraud
                            and streamlining the verification process for medical documentation.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              QR Code Technology
                            </Badge>
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              Database Security
                            </Badge>
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              Document Processing
                            </Badge>
                            <Badge variant="secondary" className="text-base px-4 py-2">
                              Healthcare Integration
                            </Badge>
                          </div>
                          <div className="flex gap-6">
                            <Button className="rounded-full px-8 py-6 text-lg" asChild>
                              <a
                                href="https://onestepdocumentverifier.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-3 h-5 w-5" />
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" className="rounded-full px-8 py-6 text-lg" asChild>
                              <a href="https://github.com/birukse" target="_blank" rel="noopener noreferrer">
                                <Github className="mr-3 h-5 w-5" />
                                Source Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* Toggle Projects Button */}
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg"
                  onClick={toggleAllProjects}
                >
                  {showAllProjects ? "Show Less Projects" : "View All Projects"}
                  <ArrowRight
                    className={`ml-3 h-5 w-5 transition-transform duration-300 ${showAllProjects ? "rotate-90" : ""}`}
                  />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} id="experience" className="py-24 scroll-mt-16">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Experience & Education</h2>
              <div className="w-32 h-2 bg-primary rounded-full" />
            </div>

            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-12">
                <TabsTrigger value="experience" className="text-lg py-3">
                  <Briefcase className="mr-3 h-5 w-5" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="text-lg py-3">
                  <GraduationCap className="mr-3 h-5 w-5" />
                  Education
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="space-y-12 mt-8">
                <motion.div
                  className="relative pl-12 border-l-2 border-primary/30 ml-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary" />
                  </div>
                  <div className="mb-3 flex items-center">
                    <Badge className="mr-3 px-4 py-1.5 text-base">2022-2023</Badge>
                    <h3 className="text-2xl font-bold">Pedro Tech Internship</h3>
                  </div>
                  <p className="text-xl text-muted-foreground mb-6">Full-Stack Developer Intern</p>
                  <ul className="list-disc pl-6 space-y-3 text-lg">
                    <li>Contributed to the development of five scalable full-stack web applications.</li>
                    <li>Leveraged React for dynamic front-end development and Node.js with MongoDB for the backend.</li>
                    <li>Collaborated with cross-functional teams to implement user-friendly interfaces.</li>
                    <li>
                      Optimized application performance and ensured seamless integration between front and back-end
                      systems. and ensured seamless integration between front and back-end systems.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="relative pl-12 border-l-2 border-primary/30 ml-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary" />
                  </div>
                  <div className="mb-3 flex items-center">
                    <Badge className="mr-3 px-4 py-1.5 text-base">2022</Badge>
                    <h3 className="text-2xl font-bold">Evangadi Bootcamp</h3>
                  </div>
                  <p className="text-xl text-muted-foreground mb-6">Full-Stack Development Program</p>
                  <ul className="list-disc pl-6 space-y-3 text-lg">
                    <li>Participated in a comprehensive full-stack development program.</li>
                    <li>Focused on building real-world applications using React, Node.js, and MongoDB.</li>
                    <li>Gained practical experience in developing responsive front-end interfaces.</li>
                    <li>Designed RESTful APIs and managed data with MongoDB.</li>
                    <li>
                      Exposure to Agile methodologies, version control with Git, and best practices for application
                      scalability.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="relative pl-12 border-l-2 border-primary/30 ml-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary" />
                  </div>
                  <div className="mb-3 flex items-center">
                    <Badge className="mr-3 px-4 py-1.5 text-base">2023</Badge>
                    <h3 className="text-2xl font-bold">Google Developer Group Hackathon</h3>
                  </div>
                  <p className="text-xl text-muted-foreground mb-6">Grand Prize Winner</p>
                  <p className="text-lg leading-relaxed">
                    Won the grand prize at the Google Developer Group Hackathon for developing an innovative solution.
                    The project demonstrated exceptional technical skills and creativity, earning recognition from
                    industry experts.
                  </p>
                </motion.div>

                <motion.div
                  className="relative pl-12 border-l-2 border-primary/30 ml-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary" />
                  </div>
                  <div className="mb-3 flex items-center">
                    <Badge className="mr-3 px-4 py-1.5 text-base">2023</Badge>
                    <h3 className="text-2xl font-bold">Hospitality Hackathon</h3>
                  </div>
                  <p className="text-xl text-muted-foreground mb-6">Participant</p>
                  <p className="text-lg leading-relaxed">
                    Participated in the Hospitality Hackathon, developing solutions for the hospitality industry.
                    Collaborated with a team to create innovative applications addressing real-world challenges in the
                    hospitality sector.
                  </p>
                </motion.div>
              </TabsContent>

              <TabsContent value="education" className="space-y-12 mt-8">
                <motion.div
                  className="relative pl-12 border-l-2 border-primary/30 ml-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary" />
                  </div>
                  <div className="mb-3 flex items-center">
                    <Badge className="mr-3 px-4 py-1.5 text-base">2022-2027</Badge>
                    <h3 className="text-2xl font-bold">Addis Ababa University</h3>
                  </div>
                  <p className="text-xl text-muted-foreground mb-6">Bachelor's Degree in Software Engineering</p>
                  <p className="text-lg leading-relaxed">
                    Currently pursuing a Bachelor's Degree in Software Engineering at Addis Ababa University. Focusing
                    on advanced programming concepts, software architecture, and system design principles. Participating
                    in various university projects and tech communities to enhance practical skills.
                  </p>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="py-24 scroll-mt-16 bg-muted/30">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Get In Touch</h2>
              <div className="w-32 h-2 bg-primary rounded-full" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold">Let's Talk</h3>
                <p className="text-xl leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision. Feel free to reach out to me using the contact form or through my social media profiles.
                </p>

                <div className="space-y-6 pt-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-base text-muted-foreground">Email</p>
                      <a href="mailto:bseyoum003@gmail.com" className="text-xl font-medium hover:underline">
                        bseyoum003@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-base text-muted-foreground">Phone</p>
                      <a href="tel:+251937454293" className="text-xl font-medium hover:underline">
                        +251 937454293
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-base text-muted-foreground">Location</p>
                      <p className="text-xl font-medium">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h4 className="text-xl font-semibold mb-6">Connect with me</h4>
                  <div className="flex gap-6">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="h-7 w-7" />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-7 w-7" />
                    </a>
                    <a
                      href="mailto:bseyoum003@gmail.com"
                      className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-7 w-7" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-background to-muted">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-8">Send Me a Message</h3>
                    <form className="space-y-8" onSubmit={handleContactSubmit}>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label htmlFor="first-name" className="text-base font-medium">
                            First name
                          </label>
                          <input
                            id="first-name"
                            className="flex h-14 w-full rounded-lg border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-3">
                          <label htmlFor="last-name" className="text-base font-medium">
                            Last name
                          </label>
                          <input
                            id="last-name"
                            className="flex h-14 w-full rounded-lg border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="text-base font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-14 w-full rounded-lg border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="subject" className="text-base font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="flex h-14 w-full rounded-lg border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Project Inquiry"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="message" className="text-base font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[160px] w-full rounded-lg border border-input bg-background px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Tell me about your project..."
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full h-14 rounded-full text-lg">
                        <Send className="mr-3 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 border-t">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-3xl font-bold mb-6">Biruk Seyoum</h3>
                <p className="text-xl text-muted-foreground max-w-md">
                  Full-stack developer specializing in creating modern, responsive web applications with a focus on user
                  experience and performance.
                </p>
                <div className="flex gap-6 mt-8">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="mailto:bseyoum003@gmail.com"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                  <ul className="space-y-4">
                    <li>
                      <button
                        onClick={() => scrollToSection("home")}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Home
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("about")}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        About
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("skills")}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Skills
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("projects")}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Projects
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("experience")}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Experience
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("contact")}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="mailto:bseyoum003@gmail.com"
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        bseyoum003@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="tel:+251937454293"
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +251 937454293
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span className="text-lg text-muted-foreground">Addis Ababa, Ethiopia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-base text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} Biruk Seyoum Abebe. All rights reserved.
              </p>
              <p className="text-base text-muted-foreground">Designed & Built with ❤️</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
