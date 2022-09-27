import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            <meta property="og:title" content="tazes"/>
            <meta property="og:description" content="Founder of Readnet Publications"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://tazes.me"/>
            <meta property="og:image" content="/ogpersonal.png"/>
            <link rel="icon" href="/dog-face_1f436.png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument