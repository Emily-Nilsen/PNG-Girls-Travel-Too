import Link from 'next/link'
import Image from 'next/image'

export function Categories() {
  return (
    <div className="bg-secondary/50">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="py-3 text-4xl tracking-tight -rotate-6 font-display text-primary sm:text-5xl md:text-6xl">
            Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              fill
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/PNG%20Girls%20Travel%20Too/AdobeStock_284915930_xl0to3.jpg"
              alt="Melbourne, Australia"
              className="object-cover object-center transition group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="opacity-50 bg-gradient-to-b from-transparent to-black"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Stunning Destinations & Travel Stories
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Visit our blog
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-none sm:relative sm:h-full">
            <Image
              fill
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/PNG%20Girls%20Travel%20Too/dish_w2u4ab.webp"
              alt="Delicious Discoveries"
              className="object-cover object-center transition group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="opacity-50 bg-gradient-to-b from-transparent to-black sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Delicious Discoveries
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  See all local cuisine reviews
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-none sm:relative sm:h-full">
            <Image
              fill
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/PNG%20Girls%20Travel%20Too/tropical_flowers_rxg0au.webp"
              alt="Digital Store"
              className="object-cover object-center transition group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="opacity-50 bg-gradient-to-b from-transparent to-black sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Digital Store
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-primary hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div> */}
      </div>
    </div>
  )
}
