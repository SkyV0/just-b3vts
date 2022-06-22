import Document, {DocumentContext, Head, Html, Main, NextScript} from "next/document"
import { ColorModeScript } from "@chakra-ui/color-mode"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head />
        <ColorModeScript/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument