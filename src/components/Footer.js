import React from "react";
import styled from "styled-components";
// import a from "next/link";

export default function Footer({ rows = {} }) {
  return (
    <Styled className="Footer">
      {!!rows["certifications title"] && <h3>{rows["certifications title"].value}</h3>}
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623036172/marina/award-american-business.jpg" alt="Stevie Gold American Business Award" />
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623036109/marina/award-energy-medicine.png" alt="Insured practitioner" />
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623036089/marina/award-rtt.png" alt="RTT certified" />
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623036051/marina/award-international-business.jpg" alt="Stevie Gold International Business Award" />
    </Styled>
  );
}

const Styled = styled.nav`
  padding: 50px 0 150px;
  text-align: center;

  h3 {
	margin-bottom: 25px;
  }

  img {
	margin-right: 20px;
	vertical-align: center;

	&:last-of-type {
	  margin-right: 0;
	}

  }
`;
