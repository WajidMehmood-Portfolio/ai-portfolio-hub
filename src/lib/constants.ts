// src/lib/constants.ts
import { NavLink } from '../types';

export const SITE_METADATA = {
  title: 'End-to-End Flutter & ML Portfolio',
  description: 'Portfolio of a Flutter Developer and ML Engineer.',
  author: '[Your Name]',
  url: 'https://portfolio.dev',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'ML Case Studies', href: '#ml-case-studies' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_URLS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/wajidmehmood/',
  twitter: 'https://twitter.com/yourusername',
  email: 'mailto:wajidmehmood074@gmail.com',
};
