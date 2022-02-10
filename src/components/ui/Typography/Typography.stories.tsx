import React from "react";
import { Meta } from "@storybook/react";
import styled from "@emotion/styled";

import { Typography } from "./Typography";
import { css } from "@emotion/react";
import { SubTitle } from "../styles";

const Template = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 4rem 20px;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${Typography} ~ ${Typography} {
    margin-top: 4px;
  }
`;

const Caption = styled.div`
  font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular",
    "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  color: #333;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 40px;
`;

export default {
  title: "Typography",
  component: Typography.Text,
} as Meta;

export const Text: React.VFC = () => (
  <Template>
    <Wrapper>
      <Container>
        <Caption>Text</Caption>
        <Typography.Text type="primary">
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Text>
        <Typography.Text type="secondary">
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Text>
        <Typography.Text type="tertiary">
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Text>
        <Typography.Text type="quaternary">
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Text>
        <br />
        <SubTitle>클릭</SubTitle>
        <Typography.Text type="secondary" onClick={() => {}}>
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Text>
        <Typography.Text type="tertiary" onClick={() => {}}>
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Text>
        <br />
        <Typography.Text type="primary">COSBRIDGE Typograhy</Typography.Text>
        <Typography.Text type="secondary">COSBRIDGE Typograhy</Typography.Text>
        <Typography.Text type="tertiary">COSBRIDGE Typograhy</Typography.Text>
        <Typography.Text type="quaternary">COSBRIDGE Typograhy</Typography.Text>
      </Container>
    </Wrapper>
  </Template>
);

export const Title: React.VFC = () => (
  <Template>
    <Wrapper>
      <Container>
        <Caption>Title</Caption>
        <Typography.Title type="primary">
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Title>
        <Typography.Title type="secondary">
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Title>
        <br />
        <Typography.Title type="primary">COSBRIDGE Typograhy</Typography.Title>
        <Typography.Title type="secondary">
          COSBRIDGE Typograhy
        </Typography.Title>
      </Container>
    </Wrapper>
  </Template>
);

export const Headline: React.VFC = () => (
  <Template>
    <Wrapper>
      <Container>
        <Caption>Headline</Caption>
        <Typography.Headline type="primary">
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Headline>
        <Typography.Headline type="primary">
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Headline>
        <Typography.Headline type="secondary">
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Headline>
        <Typography.Headline type="tertiary">
          다람쥐 헌 쳇바퀴 타고파
        </Typography.Headline>
        <br />
        <Typography.Headline type="primary">
          COSBRIDGE Typograhy
        </Typography.Headline>
        <Typography.Headline type="secondary">
          COSBRIDGE Typograhy
        </Typography.Headline>
        <Typography.Headline type="tertiary">
          COSBRIDGE Typograhy
        </Typography.Headline>
      </Container>
    </Wrapper>
  </Template>
);
