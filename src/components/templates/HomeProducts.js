// import { http_get } from "@twodashes/node/cjs/requests";
// import { sort_objects_by_property } from "@twodashes/universal/umd/sort_objects";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import propertyOf from "lib/function/propertyOf";
import Newsletter from "src/components/Newsletter";
import HeaderNav from "src/components/HeaderNav";
import Certifications from "src/components/Certifications";
import Testimonials from "src/components/Testimonials";

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
              {!rows["main"].title && !!rows["quote"].title && (
                <h2>
                  <span className="quote">{rows["quote"].title}</span>
                </h2>
              )}

              <ReactMarkdown className="ReactMarkdown">{rows["main"].text}</ReactMarkdown>

              {!!rows["consultation"] && (
                <p>
                  <a className="button" href={rows["consultation"].linkUrl}>
                    {rows["consultation"].linkText}
                  </a>
                </p>
              )}

              {!!rows["main"].linkText && (
                <p className="cta">
                  <a className="button" href={rows["main"].linkUrl}>
                    {rows["main"].linkText}
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

      {(!!rows["product 1"] || !!rows["product 2"]) && (
        <div className="products">
          <div className="content">
            {!!rows["product 1"] && (
              <article className="product">
                <a className="" href={rows["product 1"].linkUrl}>
                  <h2>{rows["product 1"].title}</h2>
                </a>
                <ReactMarkdown className="ReactMarkdown">{rows["product 1"].text}</ReactMarkdown>
                <p>
                  <a className="button" href={rows["product 1"].linkUrl}>
                    {rows["product 1"].linkText}
                  </a>
                </p>
              </article>
            )}

            {!!rows["product 2"] && (
              <article className="product">
                <a className="" href={rows["product 2"].linkUrl}>
                  <h2>{rows["product 2"].title}</h2>
                </a>
                <ReactMarkdown className="ReactMarkdown">{rows["product 2"].text}</ReactMarkdown>
                <p>
                  <a className="button" href={rows["product 2"].linkUrl}>
                    {rows["product 2"].linkText}
                  </a>
                </p>
              </article>
            )}
          </div>
        </div>
      )}

      <Newsletter rows={rows} />

      <Testimonials rows={rows} />

      <Certifications rows={rows} />
    </Styled>
  );
}


/*
 * Styles
 */
const Styled = styled.div`
  h2 {
	font-size: 1.25rem;
  }

  a h2 {
	font-size: 1.5rem;
	font-weight: normal;
  }

  h3 {
	font-size: 1rem;
  }

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
		width: 50%;

		&:last-child {
		  padding-right: 0;
		}

		h1,
		h2,
		h3,
		h4,
		h5 {
		  color: #fff;
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
		font-family: "Caveat", sans-serif;
		font-size: 1.67rem;
		flex: 1 0 0;
		padding: 1rem 2rem;
		margin: 0;
		color: #222;
		text-indent: 2px;
		text-shadow: 0 0 44px white;
		color: hsl(200deg 42% 27%);

		a {
		  color: hsl(200deg 90% 50%);
		}
	  }

	  h2 .quote {
		padding-left: 0;
		margin-left: -2px;
		color: hsl(200deg 42% 47%);
	  }
	}

	.cta {
	}
  }
`;
