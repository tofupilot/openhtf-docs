import Image from 'next/image'
import { Button } from './Button'

export function TofuPilotBanner() {
  return (
    <div className="fixed bottom-0 left-0 z-50 px-4 pb-4">
      <a href="https://tofupilot.com" target="_blank" className="block">
        <div className="mx-auto w-[288px] p-4 dark:bg-zinc-900 bg-white">
          <p className="text-2xs text-zinc-600 dark:text-zinc-400">Sponsored</p>
          <h3 className="mt-2 text-sm font-semibold text-zinc-900 dark:text-white">
            Looking for plug-and-play <br/> OpenHTF test analytics?
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
            <Button variant="textindigo" arrow="right">
              Try TofuPilot
            </Button>
          </div>
        </div>
      </a>
    </div>
  )
}
