import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function HeaderNav({ rows = {} }) {
  if (!rows["logo"]) {
    return null;
  }
  let styles = {
    header: {
      backgroundColor: rows["bg color"].value
    },
    nav: {
      backgroundColor: rows["bg color"].value
    }
  };
  return (
    <Styled className="HeaderNav" style={styles.header}>
      <span className="nav left" style={styles.nav}>
        <Link href="/rtt">
          <a>RTT</a>
        </Link>
        <Link href="/coaching">
          <a>COACHING</a>
        </Link>
      </span>
      <Link href="/">
        <a className="logo" href="/">
          <img src={rows["logo"].image[0].url} alt="logo" />
        </a>
      </Link>
      <span className="nav right" style={styles.nav}>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        <Link href="/contact">
          <a>SCHEDULE</a>
        </Link>
      </span>
    </Styled>
  );
}

const Styled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    height: 200px;
    text-align: center;
    @media (max-width: 500px) {
      height: 150px;
    }
    img {
      height: 100%;
      width: auto;
    }
  }
  .nav {
    padding: 0 1rem;
    @media (max-width: 700px) {
      padding: 0;
    }
    &.left {
      text-align: right;
    }
    a {
      display: inline-block;
      padding: 0.5rem 2rem;
      white-space: nowrap;
      color: white;
      text-decoration: none;
      @media (max-width: 500px) {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
