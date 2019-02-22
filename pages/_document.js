
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
        </Head>
        <body style={{ background: '#f5f5f5', minHeight: '100%' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}