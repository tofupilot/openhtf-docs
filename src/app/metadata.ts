export const defaultKeywords = [
  'openhtf',
  'google',
  'open source',
  'python',
  'tofupilot',
  'tofupilot integration',
  'test framework',
  'test automation',
  'hardware testing',
  'test execution engine',
  'open source teststand',
]

export const defaultOpenGraph = {
  siteName: 'OpenHTF',
  title: 'OpenHTF Documentation',
  description: 'The open-source hardware test automation framework.',
  url: 'https://openhtf.com',
  images: [
    {
      url: 'https://openhtf.com/tofupilot-analytics-header.png',
      width: 800,
      height: 600,
    },
  ],
  locale: 'en_US',
  type: 'website',
}

export const defaultMetadata = {
  title: {
    template: '%s - OpenHTF Documentation',
    default: 'OpenHTF Documentation',
  },
  description:
    'Documentation for OpenHTF, the open-source hardware test automation framework.',
  authors: [{ name: 'TofuPilot Team', url: 'https://tofupilot.com' }],
  keywords: defaultKeywords,
  openGraph: defaultOpenGraph,
}
