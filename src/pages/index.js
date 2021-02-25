// import { http_get } from "@twodashes/node/cjs/requests";
// import { sort_objects_by_property } from "@twodashes/universal/umd/sort_objects";
import Head from "next/head";
import Link from "next/link";
import { MainStyled } from "src/pages_styled/home";
import Airtable from "airtable";
import ReactMarkdown from "react-markdown";

export default function Home({ data = {} }) {
  if (!data["welcome text"]) {
    return null;
  }
  console.log("image", data["welcome text"].image);
  return (
    <>
      <Head>
        <title>Marina's site</title>
      </Head>

      <MainStyled className="main">
        <img src={data["welcome text"].image[0].thumbnails.large.url} />
        <ReactMarkdown className="ReactMarkdown">{data["welcome text"].text}</ReactMarkdown>
      </MainStyled>
    </>
  );
}

export function getStaticProps(context) {
  return new Promise((resolve) => {
    var base = new Airtable({ apiKey: "keytWFat3VYn1wKDG" }).base("apppHCkVGu1Q6cxF3");
    let data = {};

    base("home")
      .select({
        maxRecords: 10,
        view: "Grid view"
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // add row
          records.forEach(function (record) {
            let row = {};
            row.id = record.get("id");
            if (!row.id) return;
            row.text = record.get("text") || null;
            row.title = record.get("title") || null;
            row.image = record.get("image") || null;
            row.linkText = record.get("linkText") || null;
            row.linkUrl = record.get("linkUrl") || null;
            data[row.id] = row;
          });

          // next
          fetchNextPage();
        },
        function done(err) {
          // error
          if (err) {
            console.error(err);
          }
          // success
          console.log("data", data);
          resolve({
            props: { data: data } // will be passed to the page component as props
          });
        }
      );
  });
}
