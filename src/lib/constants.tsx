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
    url: 'https://github.com/SeanOliver',
    icon: <GitHubLogoIcon />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/theseanoliver/',
    icon: <LinkedInLogoIcon />,
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Audioflare',
    url: 'https://audioflare.seanoliver/dev/',
    github: 'https://github.com/seanoliver/audioflare',
    description:
      'An all-in-one AI audio playground using Cloudflare AI Workers to transcribe, analyze, summarize, and translate any audio file.',
    image: '/projects/audioflare.png',
    tags: [
      'Cloudflare',
      'TypeScript',
      'React',
      'Whisper',
      'Tailwind CSS',
      'Cloudflare AI Workers',
    ],
  },
]

export const EXPERIENCES = [
  {
    title: 'Software Engineer',
    company: 'Gamma',
    logo: '/logos/gamma.png',
    date: '2023 - Present',
    description:
      'Building a new platform that helps people share knowledge in ways that engage, using AI-powered, interactive, multimodal docs that eliminate the dread of a blank page.',
  },
]
