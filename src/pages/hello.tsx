import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";
import { Typography, Button, Input, Dropdown } from "@components/ui";
import { css } from "@emotion/react";
import { SearchIcon } from "@components/ui/Icon/Icons";
import unsplash from "../core/api/unsplash";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hello: NextPage = ({ photoUrl }: any) => {
  return (
    <Wrapper>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Hello!" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={photoUrl} />
      </Head>
      <Typography.Text
        css={css`
          font-size: 32px;
        `}
      >
        Hello Page 0212
      </Typography.Text>
      <Button
        css={css`
          width: 60px;
        `}
      >
        Button
      </Button>
      <div
        css={css`
          position: relative;
        `}
      >
        <Input />
        <div
          css={css`
            position: absolute;
            top: 10px;
            right: 12px;
          `}
        >
          <SearchIcon />
        </div>
        <Dropdown items={[{ id: 1, name: "hello" }]} />
      </div>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const response = await unsplash.get("/photos/random");
  const photoUrl = response.data.urls.small ?? "";
  return {
    props: {
      photoUrl,
    },
  };
}

export default Hello;
