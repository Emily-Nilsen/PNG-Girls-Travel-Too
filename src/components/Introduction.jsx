import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <div className="px-6 py-24 bg-white sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-4xl leading-7 -rotate-6 font-display text-primary sm:text-5xl md:text-6xl">
          Welcome
        </p>
        <h2 className="mt-2 text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">
          Discover the World with PNG Girls Travel Too
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to PNG Girls Travel Too, a travel blog by women from Papua New
          Guinea sharing stunning photos, in-depth reviews, personal stories,
          and practical tips for budget-friendly, meaningful travel. Join us on
          a journey of discovery, from the bustling streets of Melbourne to the
          serene beaches of Hawaii, as we inspire and empower Papua New Guinean
          women to explore the world. Discover each stop’s local cuisine,
          culture, and traditions and embark on your adventure. Let’s explore
          the world together, one destination at a time.
        </p>
      </div>
    </div>
  )
}
