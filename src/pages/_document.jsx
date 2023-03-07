import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="antialiased bg-white scroll-smooth" lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/rny2ikl.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
