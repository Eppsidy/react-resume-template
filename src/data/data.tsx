import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/istockphoto-1224500457-612x612.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tlhonolofatso Ramokhoase',
  description: "My personal website showcasing my work and skills as a software engineer.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Tlhonolofatso Ramokhoase`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Gauteng based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently doing
        my final year at <strong className="text-stone-100">Eduvos</strong> studying towards a Bachelors in
        Information Technology.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">gaming and watching anime</strong>,
        if im not building projects or at the gym.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Tlhonolofatso Ramokhoase_CV.pdf',
      text: 'CV Download',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My name is Tlhonolofatso Ramokhoase, a final-year Software Engineering student at Eduvos. Throughout my studies, 
  I’ve developed a strong foundation in programming, database systems, mobile app development, and web server management. 
  I'm passionate about building digital solutions and continuously learning new technologies. Currently focusing on Java and ReactJS (including Typescript). 
  I’ve also gained hands-on experience through personal and academic projects, including an e-commerce platform and a C2C book-selling website called Edubridge. 
  Beyond technical skills, I’ve learned to work effectively in teams, manage deadlines, and adapt to new challenges. 
  I’m eager to contribute my skills to real-world projects and grow as a developer`,
  aboutItems: [
    {label: 'Location', text: 'Gauteng, South Africa', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'South African', Icon: FlagIcon},
    {label: 'Interests', text: 'Gaming, Anime, Gyming', Icon: SparklesIcon},
    {label: 'Study', text: 'Eduvos', Icon: AcademicCapIcon},
    {label: 'Occupation', text: 'Student', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Afrikaans',
        level: 5,
      },
      {
        name: 'Sesotho',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'PHP',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Flutter',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
    {
    title: 'Edubridge',
    description: 'A C2C book selling website built with React, Node.js, and supabase for the database. It is dockered and deployed on Heroku.',
    url: 'https://app-edubridge-29a3fd738368.herokuapp.com/',
    image: porfolioImage2,
  },
  {
    title: 'Midyear university project',
    description: 'C2C clothing selling website built with HTML, CSS, and JavaScript and PHP for the backend.',
    url: 'https://eppsidy.kesug.com/?i=1',
    image: porfolioImage1,
  },
  {
    title: 'A sports betting UI prototype',
    description: 'This was my first project using React Typescript, it is a sports betting UI prototype built with React.',
    url: 'https://github.com/Eppsidy/sports-betting-ui',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2021',
    location: 'Vanderbijlpark, South Africa',
    title: 'Matric',
    content: <p>Learned to stand on my own</p>,
  },
  {
    date: '2023 - Present',
    location: 'Vanderbijlpark, South Africa',
    title: 'Eduvos',
    content: <p>During my time at university, I gained valuable knowledge and skills across various areas of software engineering. 
      I learned core subjects such as Programming, Mobile Application Development, Web Server Management, Database Systems, as well as 
      Network and Security. It was a completely new and enriching experience that pushed me to grow both technically and personally. 
      I also developed important soft skills like teamwork, time management, and the ability to meet deadlines-all of which are 
      essential in real-world work environments</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date:'currently',
    location: '',
    title: 'unemployed',
    content: (
      <p>
        No experience yet, but I am eager to learn and grow in the field of software engineering.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Gopolang Thabane',
      text: 'Hloni is a great person to work with, he is very dedicated and always goes the extra mile to ensure that the project is a success. I would highly recommend him to anyone looking for a software engineer.',
      image: 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=is&k=20&c=3g5FPg9un7Ktq2_TUpKqpnTL9WpSvNB0SzN9RrXSUog=',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out if you want to work together, have a question, or just want to say hi.',
  items: [
    {
      type: ContactType.Email,
      text: 'hloniramokhoase@gmail.com',
      href: 'mailto:hloniramokhoase@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Vereeniging, South Africa',
      href: 'https://www.google.com/maps/place/Vereeniging/@-26.6166728,27.9144003,11.5z/data=!4m6!3m5!1s0x1e94f7818173ad65:0x789d03421734458!8m2!3d-26.5814032!4d27.9365087!16zL20vMDQ1ODlk?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: 'Hloni Ramokhoase',
      href: 'https://www.instagram.com/eppsidy/',
    },
    {
      type: ContactType.Github,
      text: 'Tlhonolofatso',
      href: 'https://github.com/eppsidy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/eppsidy'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/tlhonolofatsoramokhoase/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/eppsidy/'},
];
