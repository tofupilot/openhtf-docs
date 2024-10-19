import glob from 'fast-glob'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'

import '@/styles/tailwind.css'
import { Analytics } from '@vercel/analytics/react'

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

export const metadata = {
  title: {
    template: 'OpenHTF › %s',
    default: 'OpenHTF Documentation',
  },
  description:
    'Documentation for OpenHTF, a hardware test automation framework including guides and integration with TofuPilot.',
  keywords: defaultKeywords,
  authors: [{ name: 'TofuPilot Team', url: 'https://tofupilot.com' }],
  openGraph: {
    siteName: 'OpenHTF',
    url: 'https://openhtf.com',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@tofupilot',
  },
  themeColor: '#ffffff',
  alternates: {
    languages: {
      'en-US': 'https://openhtf.com/',
    },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>{children}</Layout>
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
