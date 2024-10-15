'use client'

import { XMarkIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from './Button'

import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import React from 'react'
import { motion } from 'framer-motion'

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  }
  return (
    <div className={cn('group relative p-[4px]', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]',
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 z-[1] rounded-3xl will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]',
        )}
      />

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  )
}

export function TofuPilotBanner() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 px-4 pb-4">
      <div className="block h-[144px]">
        <BackgroundGradient className="w-[280px] rounded-[22px] bg-white dark:bg-zinc-900">
          <div className="mx-auto w-[280px] rounded-3xl bg-white p-4 ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:bg-zinc-900 dark:ring-white/10 dark:group-hover:ring-white/20">
            <div className="flex justify-between">
              <p className="text-2xs text-zinc-600 dark:text-zinc-400">
                Docs by the TofuPilot team
              </p>
              <XMarkIcon
                aria-hidden="true"
                className="h-4 w-4 cursor-pointer text-zinc-300 dark:text-zinc-700"
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
                  className="h-4 w-4"
                />
              </div>
              <a href="https://tofupilot.com" target="_blank">
                <Button variant="text" arrow="right">
                  Try TofuPilot
                </Button>
              </a>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  )
}
