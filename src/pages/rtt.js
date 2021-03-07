import Head from "next/head";
import aggregateBaseRows from "lib/promise/aggregateBaseRows";
import HomeProducts from "src/components/templates/HomeProducts";

/**
 * Render homepage
 * @params props.data {object} rows from airtable
 *    each key represents the row.id
 */
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Marina's site</title>
      </Head>
      <HomeProducts {...props} />
    </>
  );
}

/*
 * Get page data from airtable
 */
export async function getStaticProps() {
  let rows = {};

  // aggregate rows
  await (async () => {
    return [await aggregateBaseRows("site", rows), await aggregateBaseRows("rtt", rows)];
  })();

  // return aggregate rows
  return {
    props: { rows: rows } // will be passed to the page component as props
  };
}
