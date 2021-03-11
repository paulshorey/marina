// import { http_get } from "@twodashes/node/cjs/requests";
// import { sort_objects_by_property } from "@twodashes/universal/umd/sort_objects";
import { useRouter } from "next/router";
// import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import propertyOf from "lib/function/propertyOf";
import HeaderNav from "src/components/HeaderNav";
import Newsletter from "../Newsletter";

import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons/faRocket";

/*
 * Styles
 */
const Styled = styled.div`
  background: #fbfcfd;
  min-height: 100vh;
  .main {
    padding-top: 0.75rem;

    .products {
      .product {
        margin-right: 1.5rem;
      }
    }

    .calendar {
    }
  }

  iframe {
    display: block;
    border: none;
    width: 100%;
    height: 800px;
  }
`;

/**
 * Render homepage
 * @params props.data {object} rows from airtable
 *    each key represents the row.id
 */
export default function Template({ rows = {} }) {
  const router = useRouter();

  if (!rows["main"]) {
    return null;
  }
  let styles = {
    bgColor: {}
  };

  let image = propertyOf(rows, "main", "image", 0, "url");
  let products = [];
  for (let n = 1; n < 6; n++) {
    if (rows["product " + n]) {
      products.push(rows["product " + n]);
    }
  }
  return (
    <Styled>
      <HeaderNav rows={rows} />

      <div className="content main">
        {!!image && (
          <div className="image">
            <img src={image} />
          </div>
        )}

        <div className="text">
          {!!rows["main"].title && <h2>{rows["main"].title}</h2>}
          {/*{!!rows["main"].text && <ReactMarkdown className="ReactMarkdown">{rows["main"].text}</ReactMarkdown>}*/}
          <div className="products">
            {products.map((product) => (
              <a className="product" href={`?calendar=${product.linkUrl}`}>
                <FA icon={faRocket} /> {product.linkText}
              </a>
            ))}
          </div>
        </div>
      </div>

      {!!router.query.calendar && (
        <div className="calendar">
          <iframe src={router.query.calendar} />
        </div>
      )}

      <Newsletter rows={rows} />
    </Styled>
  );
}
