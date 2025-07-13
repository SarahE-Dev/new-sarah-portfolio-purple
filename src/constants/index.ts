import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bluezack,
  fyretunes,
  articleElevator,
  neonlink,
  momswatchlist
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Solutions",
    icon: creator,
  },
  {
    title: "Project Management",
    icon: web,
  },
  {
    title: "AI Solutions",
    icon: backend,
  },
  {
    title: "Mobile Applications",
    icon: creator,
  },
];


const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
  title: "Agile Project Lead & Software Engineer (AI Projects)",
  companyName: "Banyan Labs",
  icon: "https://banyanlabs.io/wp-content/uploads/2022/09/cropped-BANYAN-LABS-LOGO-2022_FINAL_icon-02-32x32.png",
  iconBg: "#2E3440",
  date: "May 2025 – Present",
  points: [
    "Serve as both project management lead and hands-on software engineer, developing and shipping cutting-edge AI-powered applications.",
    "Lead Agile ceremonies, sprint planning, and project tracking for multiple concurrent AI initiatives, driving collaboration and on-time delivery.",
    "Architect and implement intelligent automation agents (MCP) using Next.js, Supabase, and modern AI frameworks.",
    "Actively contribute code, conduct code reviews, and ensure best practices across full stack development teams.",
    "Coordinate with AI researchers and cross-functional stakeholders to translate complex requirements into scalable, user-friendly solutions.",
    "Oversee resource allocation, risk management, and technical decision-making to support project goals and drive continuous improvement."
    ],
  },
  {
    title: "Front End Developer Intern",
    companyName: "UpUnikSelf",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAMAAAA2a+hwAAAAhFBMVEUCIl4AFlkADlYAGFoAHlwAE1h7hJ6fprqborZlcJEAAFMnO27KztlqdJMnPG+Ikqu8wtC2vMsPKWMAIF0AGlpfa42Sm7GttsgACVUcNGne4egAAE+pscQAC1Xs7/P///83SXbQ1N0xQ3KKlK0TLWUAAEPz9PZTYIZKWYEAAEpYZIhGVH2iYLLXAAABTklEQVR4AYXRB7aCQAxA0WEKJYiUiRClxN7+/tdnRwd+ewrknEtHPPPkICU+aeMHbmEEH4snSew2TTPZI+SFsY/wudUwK80LbQX9KRLV708vmwevk8hyUT8natox1h0v8TG139CLmHP4BesVMxf2R8Q13yrld7RSQHPHrrZjtG1AcJOceeaNUfqbbcqd2eW8qkdIU79IFsxptGde4xDrDULDryoYIqQGJtyHdoDLSKlDbwEJF8NkqetNjyuwQ5xSyvxWOcBoqdjJNw4GcSLXnD4l6yoYPYo0h+OEF4s9H8sTWnIQ/LVGeeDdKVglm/Q41Q62JpT3TwbUHEhSUtUOSr0OCfGAePYQZimQiwLn4dnUxpD5Kmdk2zdu75Om82aTpukm8pQQUJF4BtnjA6NRRaGMus04f6OKKlWTE8STWItX8pBXw2IU75CGtVr82xV67y8AkRQMiwAAAABJRU5ErkJggg==",
    iconBg: "#383E56",
    date: "September 2024 – March 2025",
    points: [
      "Improved user engagement by 30% through responsive design optimizations for mobile and desktop platforms using React and Tailwind CSS.",
      "Collaborated with a team of 15 developers to build scalable React components, achieving a 95% approval rate from senior developers and stakeholders.",
      "Implemented React Hooks and standardized styling to reduce inconsistencies, enhancing code maintainability and overall user experience.",
      "Resolved cross-platform compatibility issues, ensuring consistent performance and accessibility across all devices and browsers by conducting thorough testing and optimizations."
    ],
  },
  {
    title: "Mentor & Volunteer",
    companyName: "Persevere",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAP1BMVEVgvsRgv8VhwcZcrrZXmKJetr1KXW5MY3Napa5Wk55JVmdJVWdKW2xMZnVhw8hYm6RMaXhbqrJeuL9bq7JVkJofWlQnAAAAcklEQVR4AbXSsQ6AIBRDUQFQFVBE//9bTVhsu6gDJ2xd3k0YejJWGNicF+FZrR/ZNMO4rCQmHRGOxueJZBzDLAKeuwmLKYtwlJLI+HYtjhFwyl4yKZRyiCopyGLKeYnvKamdu7YXf6YUwCnViYofTA093Zr1Dxs7tp6yAAAAAElFTkSuQmCC",
    iconBg: "#E6DEDD",
    date: "July 2023 – Present",
    points: [
      "Actively mentor aspiring developers by providing code reviews and project guidance.",
      "Enhance learning outcomes by sharing industry insights, teaching best practices, and fostering a collaborative learning environment."
    ],
  },
  {
    title: "Software Engineering Student",
    companyName: "Justice Through Code, Columbia University",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAMFBMVEVHcEwWSIUWSIUWSIUWSIUWSIUWSIUWSIUWSIUWSIUWSIUWSIUWSIUWSIUWSIUWSIXb062aAAAAEHRSTlMAMQ63UiH/3GeQ7XfKpUaaWtzHkgAAAOVJREFUeAFjIAYwKqBwhZ2QeaxmFchcpvaJKIrDHVBkzZbAmaFBDKxl2UA6FMSVPGO7T+FaIaOnzWEnoOTnls7Lt82qJ9tv8bQDOuAcA0PI97QsayEGpp8KDIwHgRr009IFgNR+KJdlWTLImPkKDKzWINOPgSxitACy9gYwOjB8K2SQU+A2BLl+k+ySgG2HFO84xWwAcrkP7lnTsO2Q7HLTzQIgHedFjAWuFWpXi1SDHTnroo3HslzJJV6FYEdvy0pblpa2LCutCMyNc4ECATD3RQcUNIG5s1ZBwVEwVwSm+BEDaQAA6NVKUoxY5bUAAAAASUVORK5CYII=",
    iconBg: "#383E56",
    date: "September 2024 – June 2025",
    points: [
      "Advanced coursework in full stack development, data science fundamentals, and cutting-edge AI technologies",
      "Specialized training in Artificial Intelligence (AI), Machine Learning Operations (MLOps), and serverless computing",
      "Hands-on experience with AI model integration, prompt engineering, and intelligent application development",
      "Applied machine learning techniques to real-world challenges including housing risk prediction and social impact AI solutions"

    ],
  },
  {
    title: "Full Stack Software Development Certification",
    companyName: "Persevere",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAP1BMVEVgvsRgv8VhwcZcrrZXmKJetr1KXW5MY3Napa5Wk55JVmdJVWdKW2xMZnVhw8hYm6RMaXhbqrJeuL9bq7JVkJofWlQnAAAAcklEQVR4AbXSsQ6AIBRDUQFQFVBE//9bTVhsu6gDJ2xd3k0YejJWGNicF+FZrR/ZNMO4rCQmHRGOxueJZBzDLAKeuwmLKYtwlJLI+HYtjhFwyl4yKZRyiCopyGLKeYnvKamdu7YXf6YUwCnViYofTA093Zr1Dxs7tp6yAAAAAElFTkSuQmCC",
    iconBg: "#E6DEDD",
    date: "July 2023 – May 2024",
    points: [
      "Completed comprehensive training in full stack development with hands-on projects like Fyre Tunes and BlueZack.",
      "Gained expertise in API integration, responsive web design, and agile development practices."
    ],
  },
];


const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",

  },
];

const projects: TProject[] = [
  {
    name: "Bluezack",
    description:
      "A YouTube clone built with the MERN stack. Users can search for videos, watch them, and interact through comments. The app integrates with the official YouTube API for fetching video data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: bluezack, 
    sourceCodeLink: "https://github.com/SarahE-Dev/youtube-frontend", 
    liveDemoLink: "https://bluezack.saraheatherly.dev", 
  },
  {
    name: "Fyre Tunes",
    description:
      "A music app that integrates with the Spotify API. Users can search for tracks, view detailed album information, and create custom playlists based on their preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spotify-api",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: fyretunes,
    sourceCodeLink: "https://github.com/SarahE-Dev/midterm-react-front-end", 
    liveDemoLink: "https://fyretunes.saraheatherly.dev",
  },
  {
    name: "Article Elevator",
    description:
      "A Next.js app for creating and managing articles. It allows users to write, edit, and organize articles with a clean and minimalistic interface.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "eldoraui",
        color: "pink-text-gradient",
      },
    ],
    image: articleElevator, 
    sourceCodeLink: "https://github.com/SarahE-Dev/internship-project", 
    liveDemoLink: "https://internship-project-cyan-nu.vercel.app/",
  },
  {
    name: "Neon Link",
    description:
      "A Next.js-powered chat application featuring a sleek, futuristic cyberpunk-inspired front-end design.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: neonlink, 
    sourceCodeLink: "https://github.com/SarahE-Dev/neonlink", 
    liveDemoLink: "https://neonlink-chi.vercel.app",
  },
    {
    name: "Mom's Watchlist App",
    description:
      "An app built special for my mom so I can share movie and show recommendations with her. Built with Next.js, TailwindCSS and TMDB API.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tmdb api",
        color: "pink-text-gradient",
      },
      
    ],
    image: momswatchlist, 
    sourceCodeLink: "https://github.com/SarahE-Dev/moms-watchlist-app", 
    liveDemoLink: "https://moms-watchlist-app.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
