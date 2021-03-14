import "src/styles/reset.scss";
import "src/styles/styles.scss";
import "src/styles/fonts.scss";
import Head from "next/head";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Therapy and Coaching | Marina V Mercado</title>
        <a rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

// ${(process.env.NODE_ENV==='development' ? 'src' : 'dist')}
