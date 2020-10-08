import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

export default class MyDocument extends Document {
  // renderGTMSnippet() {
  //   return (
  //     <script
  //       dangerouslySetInnerHTML={{
  //         __html: `
  //         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  //         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  //         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  //         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  //         })(window,document,'script','dataLayer','GTM-K4XBPP9');
  //       `,
  //       }}
  //     />
  //   );
  // }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link rel='canonical' href='https://marcomesen.com' />
          <link rel='icon' href='/code.ico' />
          <link
            href='https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat&family=Orbitron&family=Quicksand&display=swap'
            rel='stylesheet'
          />
          {/* <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-K4XBPP9'
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
