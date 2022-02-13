import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";
import { Typography, Button, Input, Dropdown } from "@components/ui";
import { css } from "@emotion/react";
import { SearchIcon } from "@components/ui/Icon/Icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hello: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Hello!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography.Text
        css={css`
          font-size: 32px;
        `}
      >
        Hello Page 0213 Dev
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

export default Hello;
