export const defaultKeywords = [
  'openhtf',
  'google',
  'open source',
  'python',
  'tofupilot',
  'test framework',
  'test automation',
  'hardware testing',
  'test execution engine',
  'open source teststand',
]

export const defaultOpenGraph = {
  title: 'OpenHTF Documentation',
  description: 'The open-source hardware test automation framework.',
  url: 'https://openhtf.com',
  siteName: 'OpenHTF Documentation',
  images: [
    {
      url: 'https://openhtf.com/og.png',
      width: 800,
      height: 600,
    },
  ],
  locale: 'en_US',
  type: 'website',
}

export const defaultMetadata = {
  title: {
    template: 'OpenHTF › %s',
    default: 'OpenHTF Documentation',
  },
  description:
    'Documentation for OpenHTF, a hardware test automation framework including guides and integration with TofuPilot.',
  authors: [{ name: 'TofuPilot Team', url: 'https://tofupilot.com' }],
  keywords: defaultKeywords,
  openGraph: defaultOpenGraph,
}
