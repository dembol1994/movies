import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import React from 'react';

export default class CustomDocument extends Document {
  static async getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(
      <App {...props} />
    ));
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags};
  }

  render() {
    return (
      <html>
      <Head>
        <title>AppuniteFed.init()</title>
        { this.props.styleTags }
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
      </html>
    )
  }
}