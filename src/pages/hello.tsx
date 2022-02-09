import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";
import { Typography } from "@components/Typograpgy/Typography";
import { css } from "@emotion/react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Hello!" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://picsum.photos/seed/picsum/200/300"
        />
      </Head>
      <Typography.Text
        css={css`
          font-size: 32px;
        `}
      >
        Hello Page
      </Typography.Text>
    </Wrapper>
  );
};

export default Home;
