import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Project } from '@/lib/types'

export const NAV_ITEMS = [
  {
    name: 'About',
    url: '#about',
    pageLink: '/about',
  },
  {
    name: 'Projects',
    url: '#projects',
    pageLink: '/projects',
  },
  {
    name: 'Experience',
    url: '#experience',
    pageLink: '/experience',
  },
]

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/peterbull',
    icon: <GitHubLogoIcon />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/petercbull',
    icon: <LinkedInLogoIcon />,
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Bohdi-cast',
    url: 'https://www.peterbull.org',
    github: 'https://github.com/peterbull/bodhi-cast',
    description:
      'A surf forecasting app with worldwide swell forecasts, visualizations, and up to the minute weather conditions',
    image: '/projects/swell-vis.png',
    tags: [
      'Airflow',
      'Kafka',
      'FastAPI',
      'TypeScript',
      'PostGIS',
      'React',
      'Docker',
      'Tailwind CSS',
      'Cloudflare',
    ],
  },
  {
    name: 'Natural Drainage and Rainfall Analysis',
    url: 'https://github.com/peterbull/grasshopper_scripts',
    github: 'https://github.com/peterbull/grasshopper_scripts',
    description:
      'Finding paths of most likely travel for rainfall using Grasshopper and Python',
    image: '/projects/rain-analysis.gif',
    tags: ['Python', 'Grasshopper', 'Rhino'],
  },
]

export const EXPERIENCES = [
  {
    title: 'BIM Manager & Computational Design Lead',
    company: 'Vestige Design Studio',
    logo: '/logos/birdred.png',
    date: '2020 - Present',
    description:
      'Pioneering sustainable and innovative design through computational strategies and BIM, by crafting advanced design tools, streamlining documentation workflows, and harnessing programming expertise.',
  },
  {
    title: 'Owner',
    company: 'Bull Custom Woodworking',
    logo: '',
    date: '2016 - Present',
    description:
      'Founded Bull Custom Woodworking, blending artistry with technology through custom design/build projects, leveraging Rhino 3D and CNC programming to deliver unique, high-quality woodwork.',
  },
  {
    title: 'Area Operations Manager',
    company: 'Zoomer',
    logo: '/logos/zoomer.jpg',
    date: '2014 - 2016',
    description:
      'Streamlined operations and fostered growth as Area Operations Manager at Zoomer, a Y Combinator-backed delivery startup, by implementing efficient processes and leveraging JavaScript among other skills to enhance performance.',
  },
  {
    title: 'Assistant Operations Manager',
    company: 'HourWise',
    logo: '/logos/hourwise.jpg',
    date: '2012 - 2014',
    description:
      'As Assistant Operations Manager at HourWise, a construction startup for mid-level contractors, I drove operational improvements and new business development, applying keen operational management strategies to support startup growth and scalability.',
  },
]
