'use client'

import Image from 'next/image'
import { Button } from './Button'
import Link from 'next/link'
import { useMotionValue } from 'framer-motion'

function Banner() {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={'https://tofupilot.com'} target="_blank">
            <span className="absolute inset-0 rounded-2xl" />
            Test
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          This is a test
        </p>
      </div>
    </div>
  )
}

export function TofuPilotBanner() {
  return (
    <div className="fixed bottom-0 left-0 z-50 px-4 pb-4">
      <a
        href="https://tofupilot.com"
        target="_blank"
        className="block h-[144px]"
      >
        <div className="mx-auto w-[288px] rounded-2xl bg-white p-4 ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:bg-zinc-900 dark:ring-white/10 dark:group-hover:ring-white/20">
          <p className="text-2xs text-zinc-600 dark:text-zinc-400">
            Docs maintained by the TofuPilot team
          </p>
          <h3 className="mt-2 text-sm font-semibold text-zinc-900 dark:text-white">
            Looking for plug-and-play <br /> OpenHTF database & analytics?
          </h3>
          <div className="mt-3 flex items-center gap-3">
            <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200 shadow">
              <Image
                width={16}
                height={16}
                quality={100}
                src="/tofupilot-icon.png"
                alt="TofuPilot"
                className="mb-0.5 h-4 w-4"
              />
            </div>
            <Button variant="teal" arrow="right">
              Try TofuPilot
            </Button>
          </div>
        </div>
      </a>
    </div>
  )
}
