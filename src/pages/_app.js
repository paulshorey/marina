import "src/styles/reset.scss";
import "src/styles/styles.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/icomoon/style.css" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

// ${(process.env.NODE_ENV==='development' ? 'src' : 'dist')}
