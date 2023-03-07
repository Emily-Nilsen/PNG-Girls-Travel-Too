import Link from 'next/link'
import Image from 'next/image'

const posts = [
  {
    id: 1,
    title: 'Honolulu, Hawaii',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1678185448/PNG%20Girls%20Travel%20Too/hawaii-dark_vlwgpq.webp',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'United States', href: '#' },
    author: {
      name: 'png_girlstraveltoo',
      role: 'Digital Content Creator',
      href: '#',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/PNG%20Girls%20Travel%20Too/georgie_mcn27v.webp',
    },
  },
  // More posts...
]

export function LatestFromTheBlog() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <p className="mb-6 text-4xl leading-7 -rotate-6 font-display text-primary sm:text-5xl md:text-6xl">
            The Latest
          </p>
          <h2 className="pt-6 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            From the PNG Girls Travel Too blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-neutral-600">
            Empowering Papua New Guinean Women to see the world beyond their
            borders.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative flex flex-col gap-8 isolate lg:flex-row"
              >
                <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
                  <Image
                    src={post.imageUrl}
                    alt=""
                    fill
                    className="absolute inset-0 object-cover w-full h-full rounded-2xl bg-neutral-50"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10" />
                </div>
                <div>
                  <div className="flex items-center text-xs gap-x-4">
                    <time dateTime={post.datetime} className="text-neutral-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-neutral-50 py-1.5 px-3 font-medium text-neutral-600 hover:bg-neutral-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="relative max-w-xl group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-neutral-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-neutral-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex pt-6 mt-6 border-t border-neutral-900/5">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="w-10 h-10 rounded-full bg-neutral-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-neutral-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-neutral-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
