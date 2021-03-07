import React from "react";
import styled from "styled-components";
// import Link from "next/link";

const Styled = styled.div`
  .form {
    padding: 1.5rem 1.5rem 3rem;
    text-align: center;
    h3 {
      margin-bottom: -0.125rem;
    }
    .fields {
      input {
        display: inline-block;
        padding: 0.33rem 0.5rem;
        font-size: 1rem;
        margin: 1.25rem 0.25rem 0 0.25rem;
      }
      input[type="email"] {
        width: 300px;
      }
      input[type="text"] {
        width: 150px;
      }
      input[type="submit"] {
        padding: 0.5rem 1rem;
        width: 200px;
      }
    }
  }
`;

export default function Newsletter({ rows }) {
  return (
    <Styled id="mc_embed_signup">
      <form
        action="https://marinavmercado.us1.list-manage.com/subscribe/post?u=9d4d2d895374b6095a61034bb&amp;id=2d2d05428d"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div className="form">
          {!!rows["newsletter signup title"] && <h3>{rows["newsletter signup title"].value}</h3>}
          <div className="fields">
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Your Email" />
            <input type="text" name="FNAME" className="" id="mce-FNAME" placeholder="First Name" />
            <input type="text" name="LNAME" className="" id="mce-LNAME" placeholder="Last Name" />
            <input type="submit" value="Subscribe" name="subscribe" className="button" />
          </div>

          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{ display: "none" }} />
            <div className="response" id="mce-success-response" style={{ display: "none" }} />
          </div>
          <input type="text" name="b_9d4d2d895374b6095a61034bb_2d2d05428d" tabIndex="-1" hidden="true" />
        </div>
      </form>
    </Styled>
  );
}
