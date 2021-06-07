import React from "react";
import styled from "styled-components";
// import a from "next/link";

export default function Certifications({ rows = {} }) {
  return (
    <Styled className="Certifications">
      {!!rows["certifications title"] && <h3>{rows["certifications title"].value}</h3>}
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623037526/marina/cert-health-coach.jpg" alt="Health Coach" />
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623037450/marina/life-coach.jpg" alt="Life Coach" />
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623037393/marina/cert-transformational-coach.jpg" alt="Certified Transformational Coach" />
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623037285/marina/cert-mastery-coach.png" alt="Certified Mastery Coach" />
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623036109/marina/award-energy-medicine.png" alt="Insured Practitioner" />
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623036089/marina/award-rtt.png" alt="RTT Certified" />
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623036172/marina/award-american-business.jpg" alt="Stevie Gold American Business Award" />
      <img src="https://res.cloudinary.com/dtscyrr9u/image/upload/w_180/v1623036051/marina/award-international-business.jpg" alt="Stevie Gold International Business Award" />
    </Styled>
  );
}

const Styled = styled.nav`
  max-width: 1000px;
  margin: 25px auto 100px;
  text-align: center;

  h3 {
	margin-bottom: 25px;
  }

  img {
	margin: 15px;
	vertical-align: center;

	&:last-of-type {
	  margin-right: 0;
	}

  }
`;
