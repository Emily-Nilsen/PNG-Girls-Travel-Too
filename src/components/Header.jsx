import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Marketplace', href: '/shop' },
  { name: 'About', href: '/about' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-10 w-full h-40 bg-gradient-to-b from-neutral-900 sm:h-60">
      <nav
        className="relative flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">PNG Girls Travel Too</span>
            <Image
              className="w-auto h-8"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1678190061/PNG%20Girls%20Travel%20Too/temp_logo_ceadpl.svg"
              alt="PNG Girls Travel Too logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white/80"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-white transition duration-300 ease-in-out hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-secondary sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">PNG Girls Travel Too</span>
              <Image
                className="w-auto h-8"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1678190061/PNG%20Girls%20Travel%20Too/temp_logo_ceadpl.svg"
                alt="PNG Girls Travel Too logo"
                width={50}
                height={50}
              />
              <h1 className="ml-6 text-3xl font-display text-neutral-800">
                PNG Girls Travel Too
              </h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-neutral-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-neutral-500/25">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-medium leading-7 transition duration-300 ease-in-out rounded-lg text-neutral-800 hover:bg-primary/80 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
