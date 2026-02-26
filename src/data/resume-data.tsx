import TCSLogo from "../images/logos/tcs.png";
import XebiaLogo from "../images/logos/xebia.png";
import TutreeLogo from "../images/logos/tutree.png";
import siemenslogo from "../images/logos/siemens.png"
import thoughtworksLogo from "../images/logos/tw.png"

export const RESUME_DATA = {
  name: "Amrendra Yadav",
  initials: "AY",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  about:
    "Passionate software developer with 6 years of hands-on experience in designing, implementing, and maintaining scalable and efficient web applications.",
  summary:
    "Passionate software developer with 6 years of hands-on experience in designing, implementing, and maintaining scalable and efficient web applications. I care about team, code-quality and delivering high-quality software solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/38122251?v=4",
  personalWebsiteUrl: "https://amren1254.github.io",
  contact: {
    email: "y.amren00@gmail.com",
    tel: "+91-8896726484",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/amren1254",
        icon: "github" as const,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amren1254/",
        icon: "linkedin" as const,
      },
      {
        name: "X",
        url: "https://x.com/i_am_amren",
        icon: "x" as const,
      },
    ],
  },
  education: [
    {
      school: "Institute of Technology and Management, GIDA, Gorakhpur",
      degree: "B.Tech in Computer Science and Engineering with 69.5%",
      link: "https://itmgkp.edu.in/",
      start: "Aug/2015",
      end: "June/2019",
    },
    {
      school: "Devasthaly Vidyapeeth Devasthaly, Ballia",
      degree: "Intermediate(CBSE) with 74.6%",
      link: "https://devasthalyballia.com/",
      start: "April/2014",
      end: "June/2015"
    },
    {
      school: "Devasthaly Vidyapeeth Devasthaly, Ballia",
      degree: "High School(CBSE) with 9.6CGPA",
      link: "https://devasthalyballia.com/",
      start: "April/2012",
      end: "March/2013"
    },
  ],
  work: [
    {
      company: "Thoughtworks",
      link: "https://www.thoughtworks.com/",
      badges: ["Pune, India"],
      title: "Senior Consultant Developer",
      logo: thoughtworksLogo,
      start: "Sep 2025",
      end: "Present",
      description:
        "Technologies: Go, Docker, AWS, AWS Devops, GIT, Terraform",
    },
    {
      company: "Siemens",
      link: "https://siemens.com/",
      badges: ["Pune, India"],
      title: "Software Developer Engineer",
      logo: siemenslogo,
      start: "Jan 2024",
      end: "Sep 2025",
      description:
        "Added new features using microservices with technologies like golang, docker, aws providing solutions to business problems to the client in the Building sector. Learned new technologies like terraform, aws and helped in improving the process of development and deployment.\nProject: Geometry Service",
    },
    {
      company: "Xebia",
      link: "https://xebia.com/apac/",
      badges: ["Gurgaon, India"],
      title: "Consultant (Software Developer)",
      logo: XebiaLogo,
      start: "Jan 2022",
      end: "Oct 2023",
      description:
        "Worked and implemented projects involving technologies like golang, docker providing solutions to business problems to the client in the Banking sector. Introduced pair code-review to enhance code quality.\nProject: RMS(Risk Management Service)",
    },
    {
      company: "TCS",
      link: "https://www.tcs.com/",
      badges: ["Pune, India"],
      title: "System Engineer",
      logo: TCSLogo,
      start: "Jan 2020",
      end: "Jan 2022",
      description:
        "Worked and implemented projects in the Automotive sector providing solutions to clients. Developed desktop & web applications, Automated test applications for clients. Design architecture for web apps using Azure components. Other responsibilities include building RESTful API's for client applications using gorilla/mux, gin/gonic and writing algorithms for calculation of Vehicle ECU’s data.\nProjects: AEMS Tool, DWA (Denso Web Application)",
    },
    {
      company: "Tutree",
      link: "https://tutree.com/",
      badges: ["Noida, India"],
      title: "Golang Developer Intern",
      logo: TutreeLogo,
      start: "Aug 2019",
      end: "Dec 2019",
      description:
        "GO, Python, RUST to maintain web and software Installed, configured, and maintained web and Machine Learning Model Experience with Apache, Nginx, Docker.\nProject: Tutree_v2",
    },
  ],
  skills: [
    "Golang",
    "Python",
    "C#",
    "AWS",
    "MS Azure",
    "Graphql",
    "gRPC",
    "Docker",
    "Terraform",
    "Gorilla/Mux",
    "MySQL",
    "PostgreSQL",
    "NoSQL (DynamoDB)",
    "DevOps",
    "Linux",
    "Git",
    "TDD",
    "Clean Code",
  ],
  projects: [
    {
      title: "htmx-blog",
      techStack: ["Personal Project", "Golang", "HTMX", "HTML"],
      description: "Blog web app implemented using HTMX and Golang.",
      link: {
        label: "github.com",
        href: "https://github.com/amren1254/htmx-blog",
      },
    },
    {
      title: "mini-projects",
      techStack: ["Personal Project", "Golang"],
      description: "A collection of mini-projects implemented in Golang.",
      link: {
        label: "github.com",
        href: "https://github.com/amren1254/mini-projects",
      },
    },
    {
      title: "blog",
      techStack: ["Personal Project", "JavaScript", "React", "Next.js"],
      description: "Blog application implemented by antigravity.",
      link: {
        label: "github.com",
        href: "https://github.com/amren1254/blog",
      },
    },
  ],
} as const;
