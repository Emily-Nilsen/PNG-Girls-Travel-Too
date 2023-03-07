import { useId, useRef, useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
// import { CldImage } from 'next-cloudinary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'

export function Hero() {
  return (
    <div
      className={clsx(
        `relative h-96 overflow-hidden py-20 sm:h-screen sm:max-h-[768px] sm:min-h-0 sm:pt-32 lg:max-h-[900px] lg:pb-20`
      )}
    >
      <Header />
      <div className="absolute inset-0 bg-gray-800">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            type: 'fade',
          }}
        >
          <Image
            priority
            className="object-cover"
            fill
            alt="The Beauty of Norway"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/PNG%20Girls%20Travel%20Too/hawaii-dark_vlwgpq.webp"
            unoptimized
          />
        </motion.div>
      </div>

      <Container className="relative w-full h-full z-1">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div>
            <h1 className="text-4xl text-white -rotate-6 font-display sm:text-5xl lg:text-6xl">
              PNG Girls Travel Too
            </h1>
          </div>

          <Button className="mt-6" href="/destinations">
            Join the Adventure
          </Button>
        </div>
      </Container>
    </div>
  )
}
