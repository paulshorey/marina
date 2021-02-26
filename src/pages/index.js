// import { http_get } from "@twodashes/node/cjs/requests";
// import { sort_objects_by_property } from "@twodashes/universal/umd/sort_objects";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import aggregateBaseRows from "lib/promise/aggregateBaseRows";
import HeaderNav from "src/components/HeaderNav";

/**
 * Render homepage
 * @params props.data {object} rows from airtable
 *    each key represents the row.id
 */
export default function Home({ rows = {} }) {
  if (!rows["welcome text"]) {
    return null;
  }
  let styles = {
    bgColor: {
      backgroundColor: rows["bg color"].text
    },
    bgImage: {
      backgroundImage: `url(${rows["products section"].image[0].url})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }
  };
  return (
    <Styled>
      <Head>
        <title>Marina's site</title>
      </Head>

      <HeaderNav rows={rows} />

      <div className="content">
        <section className="hero about" style={styles.bgColor}>
          <div className="image">
            <img src={rows["welcome text"].image[0].url} />
          </div>

          <div className="main">
            <div className="text">
              <ReactMarkdown className="ReactMarkdown">{rows["welcome text"].text}</ReactMarkdown>
            </div>

            <blockquote className="quote">
              <ReactMarkdown className="ReactMarkdown">{rows["quote"].text}</ReactMarkdown>
            </blockquote>
          </div>
        </section>
      </div>

      <div className="content full">
        <div className="hero products" style={styles.bgImage}>
          <article className="product">
            <h3>{rows["product 1"].title}</h3>
            <ReactMarkdown className="ReactMarkdown">{rows["product 1"].text}</ReactMarkdown>
            <p>
              <a href={rows["product 1"].linkUrl}>{rows["product 1"].linkText}</a>
            </p>
            <p>Schedule an appointment</p>
          </article>

          <article className="product">
            <h3>{rows["product 2"].title}</h3>
            <ReactMarkdown className="ReactMarkdown">{rows["product 2"].text}</ReactMarkdown>
            <p>
              <a href={rows["product 2"].linkUrl}>{rows["product 2"].linkText}</a>
            </p>
            <p>Schedule an appointment</p>
          </article>
        </div>
      </div>
    </Styled>
  );
}

/*
 * Styles
 */
const Styled = styled.div`
  .hero.products {
    display: flex;
    padding: 1.5rem 1.5rem 1.5rem;
    .product {
      padding: 1.5rem 1.5rem 1.5rem;
    }
  }

  .hero.about {
    margin: 0 0 1.5rem;
    display: flex;
    position: relative;
    @media (max-width: 800px) {
      display: block;
    }
    .image {
      height: 350px;
      padding: 1.5rem 0 0;
      background: white;
      img {
        height: 100%;
        width: auto;
      }
    }
    .main {
      display: flex;
      flex-direction: column;
      .text {
        color: #787878;
        background: white;
        padding: 1rem 2rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 800px) {
          padding: 0;
        }
      }
      .quote {
        flex: 1 0 0;
        padding: 1rem 2rem;
        margin: 0;
        color: #222;
        text-indent: 2px;
      }
    }
  }
`;

/*
 * Get page data from airtable
 */
export async function getStaticProps(context) {
  let rows = {};

  // aggregate rows
  await (async () => {
    return [await aggregateBaseRows("site", rows), await aggregateBaseRows("home", rows)];
  })();

  // return aggregate rows
  return {
    props: { rows: rows } // will be passed to the page component as props
  };
}
