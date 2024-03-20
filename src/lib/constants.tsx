import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  ArrowTopRightIcon,
} from '@radix-ui/react-icons'
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
  {
    name: 'Bodhi-cast',
    url: 'https://www.bodhicast.com',
    pageLink: 'https://www.bodhicast.com',
    icon: <ArrowTopRightIcon className='ml-1 mt-1 inline w-4 h-4' />,
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
    name: 'Contract Queue',
    url: 'https://www.contractqueue.com',
    github: 'https://www.github.com/peterbull/contract-queue',
    description:
      'App for analyzing federal procurement notices using vector stores, LLMs, and airflow.',
    image: '/projects/contractqueue.png',
    tags: ['Airflow', 'PGvector', 'Anthropic', 'FastAPI', 'Streamlit'],
  },
  {
    name: 'Bohdi-cast',
    url: 'https://www.bodhicast.com',
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
    description: 'Finding Likely Rainfall Drainage Paths',
    image: '/projects/rain-analysis.gif',
    tags: ['Python', 'Grasshopper', 'Rhino'],
  },
  {
    name: 'Pantry Dash',
    url: 'https://github.com/peterbull/pantry-dash',
    github: 'https://github.com/peterbull/pantry-dash',
    description: 'A Dashboard to Monitor Pantry Staples',
    image: '/projects/pantry_dash.png',
    tags: ['React', 'Node', 'Express', 'Docker', 'Postgres'],
  },
  {
    name: 'Platform Agnostic BIM Data Management',
    url: 'https://github.com/peterbull/grasshopper_scripts',
    github: 'https://github.com/peterbull/grasshopper_scripts',
    description:
      'Manage the round trip data stream between revit and rhino utilizing custom JSON schemas to ensure interoperability and no loss of BIM data',
    image: '/projects/data-interop.png',
    tags: ['Python', 'Javascript', 'Speckle', 'Grasshopper'],
  },
  {
    name: 'Noise reduction, cleaning, formatting, joining of public Lidar data',
    url: 'https://github.com/peterbull/csv-to-xyz',
    github: 'https://github.com/peterbull/csv-to-xyz',
    description:
      'Using pandas to clean noise points and reformat tiled point cloud datasets. Joining datasets to span larger areas of terrain. Eventually moved points to postGIS database for future use.',
    image: '/projects/topo-context-4.jpg',
    tags: ['Python', 'Grasshopper', 'postGIS', 'Pandas'],
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
