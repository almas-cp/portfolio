import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  // Dummy data for portfolio
  const personalInfo = {
    name: "ALMAS CP",
    role: "Student Developer & Prompt Engineer",
    education: "B.Tech in Information Technology (3rd Year)",
    institution: "Cochin University of Science and Technology (CUSAT)",
    bio: "Passionate student developer with expertise in prompt engineering, web development, blockchain technology, and AI. Currently pursuing my B.Tech degree and working on innovative projects to solve real-world problems using AI and engineering optimal prompts for specialized tasks. Certified by Dubai's One Million Prompters initiative.",
    image: "/images/profile.jpg", // Add your image to public/images folder
    links: {
      github: "https://github.com/almas-cp",
      linkedin: "https://www.linkedin.com/in/almas-cp/",
      devfolio: "https://devfolio.co/@almascp"
    }
  };

  // Define the type for a skill item
  interface Skill {
    name: string;
    level: number;
    icon: React.ReactNode;
    category: string;
  }

  const skills: Skill[] = [
    { 
      name: "React", 
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" fill="currentColor">
          <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 00-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 00-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.847 24.847 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 002.421-2.968l.135-.193.234-.02a23.63 23.63 0 003.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 01-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 01-3.234.501 24.674 24.674 0 01-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 00-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0114.75 7.24zM7.206 22.677A2.38 2.38 0 016 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 002.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 01-2.052-2.545 24.976 24.976 0 01-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 01-1.35-2.122 30.354 30.354 0 01-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 011.166-2.228c.414-.749.885-1.446 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 015.033 0l.234.02.134.193a30.006 30.006 0 012.517 4.35l.101.213-.101.213a29.6 29.6 0 01-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 002.196-3.798 28.585 28.585 0 00-2.197-3.798 29.031 29.031 0 00-4.394 0 28.477 28.477 0 00-2.197 3.798 29.114 29.114 0 002.197 3.798z"/>
        </svg>
      ),
      category: "Frontend"
    },
    { 
      name: "JavaScript", 
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
      category: "Frontend"
    },
    { 
      name: "TypeScript", 
      level: 75,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM5.625 8.625c0-.621 0-1.125.502-1.125h13.5c.75 0 .75.75.75 1.125v11.25c0 .621-.375.75-1.125.75h-9a.75.75 0 010-1.5h8.25v-9h-12v3a.75.75 0 01-1.5 0v-4.5zm10.5 6.375a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm-8.25-3.75a1.125 1.125 0 100 2.25h.75a1.125 1.125 0 100-2.25h-.75z"/>
        </svg>
      ),
      category: "Frontend" 
    },
    { 
      name: "Python", 
      level: 80,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      ),
      category: "Backend"
    },
    { 
      name: "Web3", 
      level: 65,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" fill="currentColor">
          <path d="M16.56 2.87l.01-.01 2.47 2.46c-4.01 4.13-6.02 6.2-6.02 6.2l-3.68 3.68-1.04-12.81 8.26.48zM8.54 21.13l-.01.01-2.47-2.46c4.01-4.13 6.02-6.2 6.02-6.2l3.68-3.68 1.04 12.81-8.26-.48z"/>
          <path d="M6.88 13.34a.565.565 0 0 1 .31.09c.07.06.15.13.18.23.05.09.06.2.05.31-.01.11-.04.21-.11.31-.12.2-.35.34-.59.34a.565.565 0 0 1-.31-.09.452.452 0 0 1-.18-.23.533.533 0 0 1-.05-.31c.01-.11.04-.21.11-.31.12-.2.35-.34.59-.34zm9.4-7.42c.18 0 .35.07.47.2.13.12.2.29.2.47s-.07.35-.2.47c-.12.13-.29.2-.47.2s-.35-.07-.47-.2c-.13-.12-.2-.29-.2-.47s.07-.35.2-.47c.12-.13.29-.2.47-.2z"/>
        </svg>
      ),
      category: "Blockchain"
    },
    { 
      name: "Next.js", 
      level: 80,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" fill="currentColor">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.5-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
        </svg>
      ),
      category: "Frontend"
    },
    { 
      name: "Tailwind CSS", 
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      ),
      category: "Frontend"
    },
    { 
      name: "Blockchain", 
      level: 70,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" fill="currentColor">
          <path d="M2.085 19.915a1 1 0 0 1-1-1.729l6.367-3.68a3.96 3.96 0 0 0 1.064.16c.098 0 .195-.003.29-.01l7.45 4.304a1 1 0 0 1-1 1.729l-6.667-3.852a3.946 3.946 0 0 0-1.447-.402l-5.057 2.923zm0-8.4a1 1 0 0 1-1-1.73l8.794-5.077A3.95 3.95 0 0 0 11.2 5.398a3.95 3.95 0 0 0 1.516-.304l8.2 4.737a1 1 0 1 1-1 1.732l-7.5-4.331a3.957 3.957 0 0 0-1.897.03L2.085 11.515zM16.207 24a3.96 3.96 0 0 0 2.013-.548A3.996 3.996 0 0 0 20.2 19.998a3.991 3.991 0 0 0-3.992-3.992 3.996 3.996 0 0 0-3.992 3.992 3.995 3.995 0 0 0 3.992 4.002zm0-6a1.998 1.998 0 0 1 1.996 1.995c0 1.1-.896 1.994-1.996 1.994-1.1 0-1.996-.894-1.996-1.994 0-1.1.896-1.995 1.996-1.995zm-8.211-3.992a3.994 3.994 0 0 0 3.994-3.992 3.994 3.994 0 0 0-3.994-3.992A3.995 3.995 0 0 0 4 10.016a3.995 3.995 0 0 0 3.996 3.992zm0-6a1.998 1.998 0 0 1 1.998 1.993 1.998 1.998 0 0 1-1.998 1.995A1.998 1.998 0 0 1 6 10.017c0-1.1.897-1.993 1.996-1.993zm8.211-4.01a3.994 3.994 0 0 0 3.994-3.992A3.994 3.994 0 0 0 16.207 0a3.994 3.994 0 0 0-3.992 3.992 3.995 3.995 0 0 0 3.992 4.007zm0-6.005a1.998 1.998 0 0 1 1.996 1.998 1.998 1.998 0 0 1-1.996 1.995 1.998 1.998 0 0 1-1.996-1.995 2 2 0 0 1 1.996-1.998z"/>
        </svg>
      ),
      category: "Blockchain"
    },
    { 
      name: "Prompt Engineering", 
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" fill="currentColor">
          <path d="M18.948 11.112C18.511 7.67 15.563 5 12.004 5c-2.756 0-5.15 1.611-6.243 4.15-3.26.129-5.845 2.86-5.76 6.22C.11 18.873 3.138 22 6.642 22h11.315c3.504 0 6.387-3.127 6.496-6.63.082-2.599-1.487-4.903-3.705-5.648a5.794 5.794 0 00-1.8.79zm-4.888 4.888C13.8 16.241 13.8 16.7 13.588 17c-.214.3-.643.496-1.079.496h-1.004c-.445 0-.858-.196-1.071-.496-.214-.3-.214-.759-.054-1c.54-1.005 1.395-1 1.798-1h.086c.403 0 1.259-.005 1.798 1h-.01z"/>
        </svg>
      ),
      category: "AI & ML"
    },
    { 
      name: "LLM Fine-tuning", 
      level: 70,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" fill="currentColor">
          <path d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 00.894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.018-.243L2.688 8.736a1 1 0 00-.686.894zm16.464-3.971l-4.182 12.73-2.534-5.522a.998.998 0 00-.492-.492L5.734 9.841l12.732-4.182z"/>
        </svg>
      ),
      category: "AI & ML"
    }
  ];

  // Group skills by category with proper typing
  const skillCategories: Record<string, Skill[]> = skills.reduce((acc: Record<string, Skill[]>, skill: Skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const projects = [
    {
      id: 1,
      name: "Saner",
      description: "A mental health and wellness application built with React Native and Expo featuring breathing exercises, mood tracking, and a beautiful dark theme inspired by Expo Go. Integrates with Supabase for data management.",
      techStack: ["React Native", "Expo", "Supabase", "TypeScript"],
      links: {
        demo: "https://saner-seven.vercel.app",
        repo: "https://github.com/almas-cp/Saner"
      }
    },
    {
      id: 2,
      name: "EcoCommute",
      description: "A blockchain-based platform incentivizing eco-friendly transportation. Won 1st Prize at 'Hack to The Future' Web3 hackathon. Features carbon footprint tracking and token rewards for sustainable commuting.",
      techStack: ["Blockchain", "Web3", "React", "Solidity"],
      links: {
        demo: "https://github.com/almas-cp/EcoCommute",
        repo: "https://github.com/almas-cp/EcoCommute"
      }
    },
    {
      id: 3,
      name: "Sentinel Shield",
      description: "A cybersecurity solution for small businesses that provides real-time threat monitoring, vulnerability scanning, and security awareness training in an affordable package.",
      techStack: ["Python", "Flask", "React", "TensorFlow"],
      links: {
        demo: "https://github.com/almas-cp/sentinel-shield",
        repo: "https://github.com/almas-cp/sentinel-shield"
      }
    },
    {
      id: 4,
      name: "OurRupee",
      description: "A personal finance management application built for the Indian market. Features expense tracking, budget planning, investment suggestions, and financial goal setting with localized tax considerations.",
      techStack: ["React Native", "Firebase", "Node.js"],
      links: {
        demo: "https://github.com/almas-cp/ourrupee",
        repo: "https://github.com/almas-cp/ourrupee"
      }
    },
    {
      id: 5,
      name: "AnonReport",
      description: "A blockchain-based platform for anonymous crime reporting. This system uses Web3 technologies to enable secure, tamper-proof submission of crime reports while protecting the identity of reporters.",
      techStack: ["Blockchain", "Web3", "HTML"],
      links: {
        demo: "https://github.com/almas-cp/AnonReport",
        repo: "https://github.com/almas-cp/AnonReport"
      }
    },
    {
      id: 6,
      name: "Internet Status Indicator",
      description: "A simple Windows widget application that displays a system tray icon indicating the current internet connectivity status.",
      techStack: ["Python", "Windows API"],
      links: {
        demo: "https://github.com/almas-cp/internet-status-indicator",
        repo: "https://github.com/almas-cp/internet-status-indicator"
      }
    },
    {
      id: 7,
      name: "Recurrent Neural Network",
      description: "Implementation of Recurrent Neural Network models for sequence prediction tasks.",
      techStack: ["Python", "ML", "Deep Learning"],
      links: {
        demo: "https://github.com/almas-cp/Recurrent-Neural-Network",
        repo: "https://github.com/almas-cp/Recurrent-Neural-Network"
      }
    },
    {
      id: 8,
      name: "Go-Back-N Demo",
      description: "A Python script demonstrating the Go-Back-N protocol for reliable data transfer.",
      techStack: ["Python", "Networking"],
      links: {
        demo: "https://github.com/almas-cp/go-back-n-demo",
        repo: "https://github.com/almas-cp/go-back-n-demo"
      }
    }
  ];

  const experience = [
    {
      id: 1,
      title: "Prompt Engineering Lead",
      organization: "CUSAT AI Club",
      date: "2023 - Present",
      description: "Developing optimized prompts for specialized AI applications and teaching prompt engineering techniques to fellow students."
    },
    {
      id: 2,
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2022 - Present",
      description: "Contributing to various open-source projects on GitHub, focusing on Python utilities and Web development."
    },
    {
      id: 3, 
      title: "Technical Lead",
      organization: "College Tech Club",
      date: "2022 - 2023",
      description: "Organized coding workshops and hackathons, mentored junior students in web development."
    }
  ];

  // Define Achievements Data
  interface Certification {
    id: number;
    name: string;
    issuer: string;
    description: string;
    link: string;
  }

  interface Competition {
    competition: string;
    organization: string;
    description: string;
    date?: string;
    link?: string;
  }

  interface Hackathon {
    hackathon: string;
    organizer: string;
    description: string;
    date?: string;
    project?: string;
    link?: string;
  }

  const certifications: Certification[] = [
    {
      id: 1,
      name: "One Million Prompters Initiative",
      issuer: "HH Sheikh Hamdan Bin Mohammed Bin Rashid Al Maktoum",
      description: "Successfully completed the One Million Prompters initiative focused on developing skills in AI prompt engineering. This Dubai-based program is part of the Dubai Universal Blueprint for Artificial Intelligence to build a future-ready workforce.",
      link: "https://lnkd.in/gQMYZvuS"
    },
    {
      id: 2,
      name: "Certified Penetration Tester (CPT v3)",
      issuer: "RedTeam Hacker Academy",
      description: "Professional certification in penetration testing, covering methodologies, tools, and techniques for identifying and exploiting security vulnerabilities.",
      link: "https://github.com/almas-cp"
    },
    {
      id: 3,
      name: "Introduction to Responsible AI",
      issuer: "Google",
      description: "Certificate covering the fundamentals of responsible AI development, including ethics, fairness, and best practices for creating trustworthy AI systems.",
      link: "https://www.cloudskillsboost.google/public_profiles/2b518d59-e6a0-4e29-8de0-ae2e78436f32"
    },
    {
      id: 4,
      name: "Introduction to Large Language Models",
      issuer: "Google",
      description: "Certification in understanding LLM architecture, capabilities, limitations, and applications in various domains.",
      link: "https://www.cloudskillsboost.google/public_profiles/2b518d59-e6a0-4e29-8de0-ae2e78436f32"
    },
    {
      id: 5,
      name: "Introduction to Generative AI",
      issuer: "Google",
      description: "Certification covering the fundamentals of generative AI, including different model types, training methods, and real-world applications.",
      link: "https://www.cloudskillsboost.google/public_profiles/2b518d59-e6a0-4e29-8de0-ae2e78436f32"
    },
    {
      id: 6,
      name: "Cybersecurity Simulation",
      issuer: "Mastercard via Forage",
      description: "Completed an industry-standard cybersecurity simulation program covering threat detection, analysis, and response strategies.",
      link: "https://github.com/almas-cp"
    }
  ];

  const competitions: Competition[] = [
    {
      competition: "Capture The Flag (CTF) Competition",
      organization: "South India",
      description: "Secured 10th place",
      date: "Ranked 10th among 80+ teams from South India in this cybersecurity competition focusing on vulnerability assessment and exploitation techniques.",
      link: "https://github.com/almas-cp"
    },
    {
      competition: "WH4T TH3 HACK",
      organization: "TinkerSpace Kochi",
      description: "Cybersecurity Event",
      date: "Participated in this intensive cybersecurity event at TinkerSpace Kochi, focused on practical hacking challenges and defense strategies.",
      link: "https://github.com/almas-cp"
    },
    {
      competition: "Hack The Box Kerala",
      organization: "Hack The Box",
      description: "Launch Event",
      date: "Participated in the inaugural Kerala chapter launch event of Hack The Box, engaging in hands-on cybersecurity challenges and networking with security professionals.",
      link: "https://github.com/almas-cp"
    }
  ];

  const hackathons: Hackathon[] = [
    {
      hackathon: "Hack to The Future",
      organizer: "IEEE SB, Manipal University Jaipur",
      description: "1st Prize Winner",
      date: "Won 1st Prize at the IEEE SB, Manipal University Jaipur Web3 hackathon with Team Spartans. Developed 'EcoCommute', a blockchain-based platform incentivizing eco-friendly transportation.",
      project: "EcoCommute",
      link: "https://github.com/almas-cp/EcoCommute"
    },
    {
      hackathon: "XINNOVATE 2024",
      organizer: "Kerala Blockchain Academy",
      description: "Web3 Build-a-thon",
      date: "Participated in the Web3 build-a-thon at Kerala Blockchain Academy, developing an Anonymous Crime Reporting System using Blockchain technologies.",
      project: "AnonReport",
      link: "https://github.com/almas-cp/AnonReport"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-3 overflow-hidden group">
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary/80 to-primary shadow-inner transition-all duration-300 group-hover:shadow-md">
              <span className="font-bold text-primary-foreground text-lg">A</span>
              <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </span>
            <span className="font-semibold text-xl tracking-tight transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 font-sans">
              <span className="font-sans">ALMAS CP</span>
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group py-1">
              About
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full opacity-70"></span>
            </a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group py-1">
              Skills
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full opacity-70"></span>
            </a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group py-1">
              Projects
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full opacity-70"></span>
            </a>
            <a href="#achievements" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group py-1">
              Achievements
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full opacity-70"></span>
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group py-1">
              Contact
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full opacity-70"></span>
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-20 flex flex-col items-center justify-center text-center min-h-[90vh] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-10" />
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-full max-w-4xl h-[500px] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-3xl relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 font-sans">{personalInfo.name}</h1>
            
            <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-muted border border-border shadow-sm">
              <span className="text-sm font-medium font-mono">{personalInfo.role}</span>
            </div>
            
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-muted-foreground font-serif italic">
                "Give me six hours to complete a task and I will spend the first four perfecting the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">prompt</span>."
              </p>
            </div>

            <div className="flex justify-center gap-6 mb-16">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" asChild>
                <a href="#connect">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                  Let's Connect
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-8">
              <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background -z-10" />
          
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="inline-block relative font-serif">
              About Me
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <Avatar className="h-56 w-56 relative border-2 border-background">
                  <AvatarImage src="/images/photo.jpeg" alt={personalInfo.name} className="object-cover" />
                  <AvatarFallback className="text-4xl">{personalInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="mt-8 space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-semibold tracking-tight">{personalInfo.name}</h3>
                <p className="text-muted-foreground">{personalInfo.education}</p>
                <p className="text-muted-foreground">{personalInfo.institution}</p>
              </div>
            </div>

            <div>
              <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
                <p className="text-lg leading-relaxed">{personalInfo.bio}</p>
              </div>
              
              <h3 className="text-xl font-semibold mb-6">Skills</h3>
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category} className="mb-8">
                  <h4 className="text-md font-medium mb-3 text-muted-foreground uppercase tracking-wider">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        title={`${skill.name}: ${skill.level}% proficiency`}
                      >
                        {skill.icon}
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="absolute inset-0 bg-grid-small-white -z-10" />
          <div className="bg-shadow-blob w-[45vw] h-[45vw] absolute top-[20%] left-[0%] opacity-20"></div>
          <div className="bg-shadow-blob w-[30vw] h-[30vw] absolute bottom-[10%] right-[5%] opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="relative inline-block">
                Projects
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></span>
              </span>
            </h2>

            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="hover-lift">
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                          <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-muted/30 -z-10" />
          <div className="bg-shadow-blob w-[50vw] h-[50vw] absolute top-[0%] right-[-10%] opacity-15"></div>
          <div className="bg-shadow-blob w-[40vw] h-[40vw] absolute bottom-[0%] left-[-5%] opacity-15"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="relative inline-block">
                Achievements
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></span>
              </span>
            </h2>

            <div className="container mx-auto px-4">
              <Tabs defaultValue="certifications" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                  <TabsTrigger value="competitions">Competitions</TabsTrigger>
                  <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
                </TabsList>
                
                <TabsContent value="certifications">
                  <div className="achievements-scroll">
                    <div className="achievements-scroll-content">
                      {[...certifications, ...certifications].map((cert, index) => (
                        <Card key={`${cert.id}-${index}`} className="achievements-card hover-lift">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                              {cert.name}
                            </CardTitle>
                            <CardDescription>{cert.issuer}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{cert.description}</p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm" className="w-full" asChild>
                              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                View Certificate
                              </a>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="competitions">
                  <div className="achievements-scroll">
                    <div className="achievements-scroll-content">
                      {[...competitions, ...competitions].map((comp, index) => (
                        <Card key={`${comp.competition}-${index}`} className="achievements-card hover-lift">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                              {comp.competition}
                            </CardTitle>
                            <CardDescription>{comp.organization}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{comp.date}</p>
                          </CardContent>
                          {comp.link && (
                            <CardFooter>
                              <Button variant="outline" size="sm" className="w-full" asChild>
                                <a href={comp.link} target="_blank" rel="noopener noreferrer">
                                  Learn More
                                </a>
                              </Button>
                            </CardFooter>
                          )}
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="hackathons">
                  <div className="achievements-scroll">
                    <div className="achievements-scroll-content">
                      {[...hackathons, ...hackathons].map((hack, index) => (
                        <Card key={`${hack.hackathon}-${index}`} className="achievements-card hover-lift">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              {hack.hackathon}
                            </CardTitle>
                            <CardDescription>{hack.organizer}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">{hack.description}</p>
                            {hack.project && (
                              <div className="text-sm font-medium">
                                Project: {hack.project}
                              </div>
                            )}
                          </CardContent>
                          {hack.link && (
                            <CardFooter>
                              <Button variant="outline" size="sm" className="w-full" asChild>
                                <a href={hack.link} target="_blank" rel="noopener noreferrer">
                                  View Project
                                </a>
                              </Button>
                            </CardFooter>
                          )}
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Connect With Me Section */}
        <section id="connect" className="py-20 relative">
          <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-10" />
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-full max-w-3xl h-96 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="inline-block relative">
                Connect With Me
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full"></span>
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  I'm always open to discussing project work, collaboration opportunities, 
                  or just connecting with fellow tech enthusiasts. Feel free to reach out!
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 text-foreground">
                  <a href="https://github.com/almas-cp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </Button>
                
                <Button asChild className="shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 text-foreground">
                  <a href="https://www.linkedin.com/in/almascp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </Button>
                
                <Button asChild className="shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 text-foreground">
                  <a href="mailto:almascp11@gmail.com" className="inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                </Button>
                
                <Button asChild className="shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 text-foreground">
                  <a href="https://wa.me/919605256512" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t relative overflow-hidden mt-auto">
        <div className="absolute inset-0 bg-grid-small-white opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 py-10 relative">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-primary shadow-inner">
                  <span className="font-bold text-primary-foreground">A</span>
                </span>
                <span className="font-semibold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                  ALMAS CP
                </span>
              </div>
              <p className="text-sm leading-loose text-muted-foreground max-w-md">
                Student developer with expertise in prompt engineering, web development, and AI, crafting innovative solutions that make a difference.
              </p>
            </div>
            
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm font-medium">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About Me</a>
                <a href="#skills" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Skills</a>
                <a href="#projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Projects</a>
                <a href="#achievements" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Achievements</a>
                <a href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm font-medium">Connect</h3>
              <div className="flex space-x-3">
                <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" 
                   className="h-9 w-9 flex items-center justify-center rounded-full bg-muted/50 hover:bg-muted transition-colors">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" 
                   className="h-9 w-9 flex items-center justify-center rounded-full bg-muted/50 hover:bg-muted transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="mailto:almascp11@gmail.com"
                   className="h-9 w-9 flex items-center justify-center rounded-full bg-muted/50 hover:bg-muted transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-muted/20">
            <p className="text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">ALMAS CP</span>. All rights reserved. Built with Next.js, React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
