'use client'

import { XMarkIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from './Button'

export function TofuPilotBanner() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 px-4 pb-4">
      <div className="block h-[144px]">
        <div className="mx-auto w-[280px] rounded-2xl bg-white p-4 ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:bg-zinc-900 dark:ring-white/10 dark:group-hover:ring-white/20">
          <div className="flex justify-between">
            <p className="text-2xs text-zinc-600 dark:text-zinc-400">
              Docs by the TofuPilot team
            </p>
            <XMarkIcon
              aria-hidden="true"
              className="h-5 w-5 cursor-pointer dark:text-zinc-400"
              onClick={() => setIsOpen(false)}
            />
          </div>

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
            <a href="https://tofupilot.com" target="_blank">
              <Button variant="teal" arrow="right">
                Try TofuPilot
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
