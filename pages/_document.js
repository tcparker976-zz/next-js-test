import Document, { Head } from 'next/document'

export default class myDocument extends Document {
  render() {
    const { html } = this.props
    return (
      <html>
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
          <div id='__next' dangerouslySetInnerHTML={{ __html: html }} />
        </body>
      </html>
    )
  }
}