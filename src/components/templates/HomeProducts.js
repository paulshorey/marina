// import { http_get } from "@twodashes/node/cjs/requests";
// import { sort_objects_by_property } from "@twodashes/universal/umd/sort_objects";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import propertyOf from "lib/function/propertyOf";
import Newsletter from "src/components/Newsletter";
import HeaderNav from "src/components/HeaderNav";

/*
 * Styles
 */
const Styled = styled.div`
  .products {
    background: rgb(148, 193, 189);
    color: white;
    .content {
      display: flex;
      padding: 1.5rem 0;
      @media (max-width: 500px) {
        display: block;
      }
      .product {
        display: inline-block;
        padding: 1rem 1.5rem 1rem 0;
        min-width: 200px;
        &:last-child {
          padding-right: 0;
        }
      }
    }
  }

  .about {
    margin: 0 0 1.5rem;
    display: flex;
    position: relative;
    @media (max-width: 800px) {
      display: block;
    }

    .image {
      height: 400px;
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
          padding-left: 0;
          padding-right: 0;
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

/**
 * Render homepage
 * @params props.data {object} rows from airtable
 *    each key represents the row.id
 */
export default function Template({ rows = {} }) {
  if (!rows["main"]) {
    return null;
  }
  let styles = {
    bgColor: {
      backgroundColor: rows["bg color"].value
    }
  };
  let image = propertyOf(rows, "main", "image", 0, "url");
  return (
    <Styled>
      <HeaderNav rows={rows} />

      <div className="content">
        <section className="about" style={styles.bgColor}>
          {!!image && (
            <div className="image">
              <img src={image} />
            </div>
          )}

          <div className="main">
            <div className="text">
              {!!rows["main"].title && <h2>{rows["main"].title}</h2>}

              <ReactMarkdown className="ReactMarkdown">{rows["main"].text}</ReactMarkdown>

              {!!rows["consultation"] && (
                <p>
                  <a className="button" href={rows["consultation"].linkUrl}>
                    {rows["consultation"].linkText}
                  </a>
                </p>
              )}
            </div>

            {!!rows["quote"] && (
              <blockquote className="quote">
                <ReactMarkdown className="ReactMarkdown">{rows["quote"].text}</ReactMarkdown>
              </blockquote>
            )}
          </div>
        </section>
      </div>

      {!!rows["product 1"] && !!rows["product 2"] && (
        <div className="products">
          <div className="content">
            <article className="product">
              <h3>{rows["product 1"].title}</h3>
              <ReactMarkdown className="ReactMarkdown">{rows["product 1"].text}</ReactMarkdown>
              <p>
                <a className="button" href={rows["product 1"].linkUrl}>
                  {rows["product 1"].linkText}
                </a>
              </p>
            </article>

            <article className="product">
              <h3>{rows["product 2"].title}</h3>
              <ReactMarkdown className="ReactMarkdown">{rows["product 2"].text}</ReactMarkdown>
              <p>
                <a className="button" href={rows["product 2"].linkUrl}>
                  {rows["product 2"].linkText}
                </a>
              </p>
            </article>
          </div>
        </div>
      )}

      <Newsletter rows={rows} />
    </Styled>
  );
}
