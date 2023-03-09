import Head from 'next/head'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { Categories } from '@/components/Categories'
import { FromTheBlog } from '@/components/FromTheBlog'
import { BlogPreview } from '@/components/BlogPreview'
import { Footer } from '@/components/Footer'

import { getDatabase } from '../../lib/notion'

export const databaseId = process.env.NOTION_DATABASE_ID

export default function Home({ posts }) {
  console.log(posts)

  return (
    <>
      <Head>
        <title>Discover the World with PNG Girls Travel Too</title>
        <meta
          name="description"
          content="Travel blog by PNG women sharing stunning photos, reviews, tips, and inspiration. Explore the world with us. "
        />
      </Head>
      <Hero />
      <Introduction />
      <Categories />
      {/* <FromTheBlog /> */}

      {/* From notion db */}
      <div className="py-24 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:max-w-4xl">
            <p className="mb-6 text-4xl leading-7 -rotate-6 font-display text-primary sm:text-5xl md:text-6xl">
              The Latest Stories
            </p>
            <h2 className="pt-6 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
              From PNG Girls Travel Too
            </h2>
            <p className="mt-2 text-lg leading-8 text-neutral-600">
              Empowering Papua New Guinean Women to see the world beyond their
              borders.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <div key={post.id}>
                  <Link href={`/${post.id}`}>
                    <FromTheBlog
                      title={post.properties.Name.title[0].plain_text}
                      date={post.properties.Date.date.start}
                      category={post.properties.Tags.multi_select[0].name}
                      categoryColour={
                        post.properties.Tags.multi_select[0].color
                      }
                      excerpt={post.properties.Excerpt.rich_text[0].plain_text}
                      author={post.properties.Author.rich_text[0].plain_text}
                      authorPosition={
                        post.properties.AuthorPosition.rich_text[0].plain_text
                      }
                      authorImg={post.properties.AuthorImg.files[0].name}
                      imgUrl={post.properties.ImgUrl.files[0].name}
                      minToRead={post.properties.MinToRead.number}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)

  return {
    props: {
      posts: database,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}
