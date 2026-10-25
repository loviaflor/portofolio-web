export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'Lovia Florencia Clarissa',
  title: 'Lovia - Business Analyst portfolio',
  description:
    'Lovia is a business analyst in who turns complex requirements and messy data into clear, practical solutions.',
  siteUrl: 'https://www.linkedin.com/in/loviaflorencia/',
  language: 'en',
  locale: 'en_AU',
  dateLocale: 'en-AU',
  socialImage: '/og-image.png',

  author: {
    name: 'Lovia Florencia',
    role: 'Business Analyst',
    location: 'Jakarta, Indonesia',
    email: 'loviaflorencia@gmail.com',
  },

  /** The pill above the homepage headline. Set `enabled: false` to remove it. */
  availability: {
    enabled: false,
    label: '',
  },

  /** The button at the end of the header and in the mobile menu. */
  action: { label: 'Get in touch', href: 'mailto:loviaflorencia@gmail.com' },

  /** A PDF in `public/`, offered on the resume page. Leave empty to hide the button. */
  resumePdf: '',

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/loviaflorencia/' },
    { label: 'GitHub', href: 'https://github.com/loviaflor' },
    { label: 'Instagram', href: 'https://www.instagram.com/loviaflorencia/' },

  ] satisfies NavLink[],
};

export const navigation: NavLink[] = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#work' },
  { label: 'Contact', href: '/#contact' },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
];