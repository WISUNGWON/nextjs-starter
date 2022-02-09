import React from "react";
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

const Title = styled.div`
  font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular",
    "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  color: #333;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${Typography} ~ ${Typography} {
    margin-top: 4px;
  }
`;

export default {
  title: "Typography",
  component: Typography.Text,
};

export const TextKorean: React.VFC = () => (
  <Template>
    <Wrapper>
      <Container>
        <Title>Typograhpy</Title>
        <Typography.Text>다람쥐 헌 쳇바퀴 타고파</Typography.Text>
        <Typography.Text>다람쥐 헌 쳇바퀴 타고파</Typography.Text>
        <Typography.Text>다람쥐 헌 쳇바퀴 타고파</Typography.Text>
        <br />
        <Typography.Text color="yellow10">
          다람쥐 헌 쳇바퀴에 타고파
        </Typography.Text>
        <Typography.Text color="yellow10">
          다람쥐 헌 쳇바퀴에 타고파
        </Typography.Text>
        <Typography.Text color="yellow10">
          다람쥐 헌 쳇바퀴에 타고파
        </Typography.Text>
        <br />
        <Typography.Text>다람쥐 헌 쳇바퀴에 타고파</Typography.Text>
        <Typography.Text>다람쥐 헌 쳇바퀴에 타고파</Typography.Text>
        <Typography.Text>다람쥐 헌 쳇바퀴에 타고파</Typography.Text>
      </Container>
    </Wrapper>
  </Template>
);
