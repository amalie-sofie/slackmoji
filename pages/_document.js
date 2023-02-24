import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="" lang="nb">
      {/* scroll-smooth */}
      <Head>
        <meta
        name="description"
        content=""
        />
        <meta
        property="og:title"
        content=""
        />
        <meta
        property="og:description"
        content=""
        />
        <meta
        property="og:image"
        content=""
        />
        <link
        rel="icon"
        type="image/png"
        size="32x32"
        href="/favicons/favicons-32x32.png"
        />
        <meta
        name="msapplication-config"
        content=""
        />
        <meta
        name="msapplication-TileColor"
        content=""
        />
        <meta
        name="theme-color"
        content=""
        />
        <meta
        name="google-site-verification"
        content=""
        />
      </Head>

      <body
        className="font-sans text-sm selection:bg-darkgrey selection:text-cream"
        >
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}