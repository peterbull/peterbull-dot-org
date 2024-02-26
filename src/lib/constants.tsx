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
]
