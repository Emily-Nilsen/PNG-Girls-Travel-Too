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
    date: 'Jan 01, 2023',
    datetime: '2023-01-01',
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

export function FromTheBlog({
  title,
  date,
  author,
  authorPosition,
  imgUrl,
  category,
  categoryColour,
  excerpt,
  minToRead,
  authorImg,
}) {
  const catColour =
    categoryColour === 'pink'
      ? 'text-pink-600 text-sm font-medium relative z-10 rounded-full bg-pink-50 py-1.5 px-3 font-medium'
      : categoryColour === 'orange'
      ? 'text-orange-600 text-sm font-medium relative z-10 rounded-full bg-primary/10 py-1.5 px-3 font-medium'
      : categoryColour === 'gray'
      ? 'text-gray-600 text-sm font-medium relative z-10 rounded-full bg-neutral-50 py-1.5 px-3 font-medium text-neutral-600'
      : categoryColour === 'red'
      ? 'text-red-600 text-sm font-medium relative z-10 rounded-full bg-red-50 py-1.5 px-3 font-medium'
      : categoryColour === 'green'
      ? 'text-lime-600 text-sm font-medium relative z-10 rounded-full bg-tertiary/10 py-1.5 px-3 font-medium'
      : ''

  return (
    <article className="relative flex flex-col gap-8 isolate lg:flex-row">
      <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
        <Image
          src={imgUrl}
          alt=""
          fill
          className="absolute inset-0 object-cover w-full h-full rounded-2xl bg-neutral-50"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10" />
      </div>
      <div>
        <div className="flex items-center text-xs gap-x-4">
          <time dateTime={date} className="text-neutral-500">
            {date}
          </time>
          <p className={catColour}>{category}</p>
        </div>
        <div className="relative max-w-xl group">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-neutral-600">
            <div>
              <span className="absolute inset-0" />
              {title}
            </div>
          </h3>
          <p className="mt-5 text-sm leading-6 text-neutral-600">{excerpt}</p>
        </div>
        <div className="flex pt-6 mt-6 border-t border-neutral-900/5">
          <div className="relative flex items-center gap-x-4">
            <img
              src={authorImg}
              alt=""
              className="w-10 h-10 rounded-full bg-neutral-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-neutral-900">
                <div>
                  <span className="absolute inset-0" />
                  {author}
                </div>
              </p>
              <p className="text-neutral-600">{authorPosition}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
