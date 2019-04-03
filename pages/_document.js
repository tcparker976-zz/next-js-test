import Document, { Html, Head, Main, NextScript  } from 'next/document'

export default class myDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='canonical' href='/' />
          <meta name='viewport' content='width=device-width,minimum-scale=1' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto'
          />
          <meta name="google-site-verification" content="bCj3HhIqDlnOUnl8OuWzxcoPCcWXIYLNEI68kALtrKQ" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}