export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'INA Digital',
    desc: `INA DIGITAL is not just an application or platform, but a key enabler of Indonesia's Government Digital Services Ecosystem, acting as an accelerator for digital transformation in government services. INA DIGITAL is responsible for developing, integrating, maintaining, and managing digital infrastructure to deliver public services that are higher in quality, more reliable, and more efficient.`,
    subdesc: `As a strategic partner in Indonesia's digital transformation, INA DIGITAL facilitates seamless integration of government services. By providing a reliable digital infrastructure, it enhances public service delivery, ensuring efficiency, transparency, and accessibility for citizens across the nation.`,
    href: 'https://inadigital.co.id/',
    texture: '/textures/project/inadigital.mp4',
    logo: '/assets/inadigital.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },

      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'INAku',
    desc: `INAku is an all-in-one digital portal that simplifies access to a wide range of government services for Indonesian citizens. By integrating various public services into a single platform, INAku aims to enhance convenience and streamline interactions with the government, making essential resources more accessible to everyone.`,
    subdesc:
      'With a user-friendly interface and secure systems, INAku empowers Indonesians to manage everything from official documentation and registrations to accessing public utilities and social services. Designed for ease of use, the platform offers a centralized solution that caters to the diverse needs of the community.',
    href: 'https://inaku.go.id',
    texture: '/textures/project/inaku.mp4',
    logo: '/assets/inaku.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Confiction Portal',
    desc: 'The Confiction One Portal is a centralized, secure platform that streamlines access to a wide range of services for registered users. Designed for efficient navigation, it helps users verify their identities and access various tools and resources all in one place.',
    subdesc:
      'With a seamless registration and verification process, the Confiction One Portal ensures that users can securely connect with essential services. This portal prioritizes accessibility and user security, offering a unified experience for managing multiple service needs.',
    href: 'https://one.confiction.com/portal',
    texture: '/textures/project/confiction.mp4',
    logo: '/assets/portal.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'figma',
        path: '/assets/figma.svg',
      },
    ],
  },
  {
    title: 'Hyperhire - Assignment Web',
    desc: 'Hyperhire is a streamlined recruitment platform built for a Korean outsourcing company to efficiently share job opportunities and recruitment information. Designed as part of a technical assignment, the platform allows users to explore available positions and learn more about the company’s hiring needs, bringing essential recruitment details to the forefront.',
    subdesc:
      'Developed with the latest Next.js, TypeScript, Tailwind CSS, and Framer Motion, Hyperhire combines powerful performance with a clean, responsive UI. The integration of smooth animations enhances user interaction, showcasing a modern and intuitive experience.',
    href: 'https://siren-portfolio.vercel.app/',
    texture: '/textures/project/hyperhire.mp4',
    logo: '/assets/hyperhire.svg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Hulu Repository',
    desc: `A web app for browsing trending movies and TV series across categories like "Trending Now," "Top Rated," and genre collections. Featuring a clean, user-friendly design, it allows users to explore titles with details like release dates, ratings, and brief summaries.`,
    subdesc: `Tech Stack: Built with Next.js and TypeScript, styled using Tailwind CSS, and enhanced with Framer Motion for smooth animations, this project showcases front-end development skills and a polished, interactive user experience.`,
    href: 'https://hulurepository.vercel.app',
    texture: '/textures/project/hulu.mp4',
    logo: '/assets/hulu.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Telkom Indonesia',
    pos: 'Front End Developer - Full Time',
    duration: '2023 - Present',
    title:
      'As a Frontend Developer at Telkom Indonesia, I play a vital role in enhancing user experiences across multiple projects within the country’s leading telecommunications company.',
    icon: '/assets/telkom.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: `INA Digital - Under Telkom's Project`,
    pos: 'Front End Developer - Full Time',
    duration: '2024',
    title:
      'I contributed to transforming government digital services by delivering high-quality, efficient public offerings. Working alongside a diverse team of designers, product owners, backend developers, and QA professionals, I ensured our product met national administration standards and effectively addressed user needs.',
    icon: '/assets/inadigital.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'The Digital Cellar',
    pos: 'Front End Developer - Freelance',
    duration: '2023 - 2024',
    title:
      'I contributed to the development of an all-in-one super app for mobile and desktop, which included features like event ticket booking, online live events, and educational tools similar to Udemy, aiming to enhance user accessibility and engagement.',
    icon: '/assets/digital.jpg',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Confiction Labs',
    pos: 'Front End Developer - Freelance',
    duration: '2022 - 2023',
    title:
      'At Confiction Labs, I had the opportunity to help redefine the Web3 gaming experience by contributing to various aspects of the project.',
    icon: '/assets/confiction.png',
    animation: 'victory',
  },
  {
    id: 5,
    name: 'Tokocrypto',
    pos: 'Front End Developer - Full Time',
    duration: '2022',
    title:
      'During my time in Tokocrypto, I helped create a streamlined coworking and event space booking system. As a frontend developer, I leveraged Next.js and Tailwind CSS to build a responsive platform focused on user experience and efficient data processing.',
    icon: '/assets/tokocrypto.png',
    animation: 'victory',
  },
];
