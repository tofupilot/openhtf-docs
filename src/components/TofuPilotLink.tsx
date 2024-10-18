'use client'
import { usePathname } from 'next/navigation'

export const TofuPilotLink = ({ utmMedium }: { utmMedium: string }) => {
  const pathname = usePathname()
  console.log(pathname)
  const baseUrl = 'https://tofupilot.com'
  const utmSource = 'openhtf.com'

  const fullHref = `${baseUrl}?utm_source=${utmSource}&utm_medium=${utmMedium}`

  return (
    <a href={fullHref} target="_blank" rel="noopener noreferrer">
      TofuPilot
    </a>
  )
}
