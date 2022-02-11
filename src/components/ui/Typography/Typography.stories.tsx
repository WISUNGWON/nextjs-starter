import React from "react";
import { Meta } from "@storybook/react";
import styled from "@emotion/styled";

import { Typography } from "./Typography";

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
        <Typography.Text type="h1">
          다람쥐 헌 쳇바퀴 타고파 (H1)
        </Typography.Text>
        <Typography.Text type="h2">
          다람쥐 헌 쳇바퀴 타고파 (H2)
        </Typography.Text>
        <Typography.Text type="h3">
          다람쥐 헌 쳇바퀴 타고파 (H3)
        </Typography.Text>
        <Typography.Text type="s1">
          다람쥐 헌 쳇바퀴 타고파 (Subtitle1)
        </Typography.Text>
        <Typography.Text type="s2">
          다람쥐 헌 쳇바퀴 타고파 (Subtitle2)
        </Typography.Text>
        <Typography.Text type="b1">
          다람쥐 헌 쳇바퀴 타고파 (Body1)
        </Typography.Text>
        <Typography.Text type="b2">
          다람쥐 헌 쳇바퀴 타고파 (Body2)
        </Typography.Text>
        <Typography.Text type="small">
          다람쥐 헌 쳇바퀴 타고파 (Small)
        </Typography.Text>
        <Typography.Text type="caption">
          다람쥐 헌 쳇바퀴 타고파 (Caption)
        </Typography.Text>
        <br />
        <Typography.Text type="h1">COSBRIDGE Typograhy (H1)</Typography.Text>
        <Typography.Text type="h2">COSBRIDGE Typograhy (H2)</Typography.Text>
        <Typography.Text type="h3">COSBRIDGE Typograhy (H3)</Typography.Text>
        <Typography.Text type="s1">
          COSBRIDGE Typograhy (Subtitle1)
        </Typography.Text>
        <Typography.Text type="s2">
          COSBRIDGE Typograhy (Subtitle2)
        </Typography.Text>
        <Typography.Text type="b1">COSBRIDGE Typograhy (Body1)</Typography.Text>
        <Typography.Text type="b2">COSBRIDGE Typograhy (Body2)</Typography.Text>
        <Typography.Text type="small">
          COSBRIDGE Typograhy (Small)
        </Typography.Text>
        <Typography.Text type="caption">
          COSBRIDGE Typograhy (Caption)
        </Typography.Text>
      </Container>
    </Wrapper>
  </Template>
);
