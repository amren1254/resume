import ConsultlyLogo from "../images/logos/consultly.svg";
import TCSLogo from "../images/logos/tcs.png";
import XebiaLogo from "../images/logos/xebia.png";
import TutreeLogo from "../images/logos/tutree.png";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Amrendra Yadav",
  initials: "AY",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/NewDelhi",
  about:
    "Passionate Software Engineer with 4 years of hands-on experience in designing, implementing, and maintaining scalable and efficient web applications.",
  summary:
    "As a Backend Software Engineer, I have successfully completed multiple projects. Currently, I work mostly with Golang, Gin, REST and Databases(MySQL, Psql).",
  avatarUrl: "",
  personalWebsiteUrl: "https://amren1254.github.io",
  contact: {
    email: "y.amren00@gmail.com",
    tel: "+91-8896726484",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/amren1254",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amren1254/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/i_am_amren",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Institute of Technology and Management, GIDA, Gorakhpur",
      degree: "B.Tech in Computer Science and Engineering with 69.5%",
      start: "Aug/2015",
      end: "June/2019",
    },
    {
      school: "Devasthaly Vidyapeeth Devasthaly, Ballia",
      degree: "Intermediate(CBSE) with 74.6%",
      start: "April/2014",
      end: "June/2015"
    },
    {
      school: "Devasthaly Vidyapeeth Devasthaly, Ballia",
      degree: "High School(CBSE) with 9.6CGPA",
      start: "April/2012",
      end: "March/2013"
    },
  ],
  work: [
    {
      company: "Xebia IT Infotech, Gurgaon",
      link: "https://xebia.com/apac/",
      badges: ["Remote", "Full-Time"],
      title: "Consultant",
      logo: XebiaLogo,
      start: "Feb/2022",
      end: "Oct/2023",
      description:
        "Implemented new features, unit tests, developed a tool for analysis of daily healthy/unhealthy tx's.\
        Improved security, optimized code.  Technologies: Golang, Gin, MySQL, Docker, Kafka, Grafana, Git",
    },
    {
      company: "TCS, Pune",
      link: "https://www.tcs.com/",
      badges: ["Remote", "Full-Time"],
      title: "Assistant System Engineer Trainee → System Engineer",
      logo: TCSLogo,
      start: "Jan/2020",
      end: "Jan/2022",
      description:
        "Created desktop app and web apps. Designed architecture on MS Azure.\
         Technologies: Golang, C#, MySQL, Docker, MS Azure",
    },
    {
      company: "Tutree Inc. , Noida",
      link: "https://tutree-india-technologies-limited.business.site/",
      badges: ["Intern"],
      title: "Software Developer",
      logo: TutreeLogo,
      start: "Aug/2019",
      end: "Nov/2019",
      description:
        "My Contribution here is to make API’s using gorilla/mux, use data-structure and algorithms\
        and optimize codebase, write unit test cases and bug fixing",
    },
  ],
  skills: [
    "Golang",
    "MS Azure Cloud",
    "DSA",
    "Python/C#",
    "Microservices",
    "Docker",
    "MySQL/PostgreSQL",
    "Gin/gorilla-mux",
    "HTML/CSS",
    "Git"
  ],
  projects: [
    {
      title: "Risk Management Service",
      techStack: [
        "Client-Project/XEBIA",
        "Golang",
        "Gin",
        "Docker",
        "Grafana",
        "Kafka",
      ],
      description: "Microservice to assess the risk occurring during a transaction from the \
      user and label it as healthy/unhealthy by connecting with an external service provider.",
      logo: XebiaLogo,
      link: {
        label: "xebia.com",
        href: "https://xebia.com/apac",
      },
    },
    {
      title: "DWA",
      techStack: ["Client-Project/TCS", "Golang", "MS Azure", "Web app", "Docker"],
      description:
        "REST API based web app exposing multiple endpoints for user and vehicle management",
      logo: TCSLogo,
      link: {
        label: "monito.dev",
        href: "https://tcs.com/",
      },
    },
    {
      title: "Tutree web app",
      techStack: ["Tutree", "Golang", "Python", "MySQL", "Docker", "Gorilla/mux", "Testing"],
      description:
        "Tutree is a human intelligence network. A tutor is only a tap away. In-person qualified tutors \
        will come to your location of choice on demand.\
        In this application my contribution is to make API’s using gorilla/mux, use data-structure and algorithms\
        and optimize codebase, write unit test cases and bug fixing.",
      logo: TutreeLogo,
      link: {
        label: "github.com",
        href: "https://tutree.com",
      },
    },
  ],
} as const;
