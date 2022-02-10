import styled from "@emotion/styled";
import React from "react";

import { Button } from "./Button";
import { StoryContainer, Layout, Title, Space } from "@components/ui/styles";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Column)`
  align-items: flex-start;
  ${Row} ~ ${Row} {
    margin-top: 16px;
  }
`;

const StyledRow = styled(Row)`
  align-items: "flex-end";
  justify-content: "space-between";
  ${Button} ~ ${Button} {
    margin-left: 24px;
  }
`;

export default {
  title: "Button",
  component: Button,
};

export const Default: React.FC = () => {
  return (
    <Layout>
      <StoryContainer>
        <Title>Button (Fill)</Title>
        <Container>
          <StyledRow>
            <Button variant="fill">h32 fill</Button>
            <Button variant="fill" disabled>
              h32 fill disabled
            </Button>
          </StyledRow>
          <Space />
          <StyledRow>
            <Button variant="fill" size="h48">
              h48 fill
            </Button>
            <Button variant="fill" size="h48" disabled>
              h48 fill disabled
            </Button>
          </StyledRow>
        </Container>
      </StoryContainer>
    </Layout>
  );
};

export const Line: React.FC = () => {
  return (
    <Layout>
      <StoryContainer>
        <Title>Button (Line)</Title>
        <Container>
          <StyledRow>
            <Button>h32 line</Button>
            <Button>h32 line actived</Button>
            <Button disabled>h32 line disabled</Button>
          </StyledRow>
          <Space />
          <StyledRow>
            <Button size="h44">h44 line</Button>
            <Button size="h44">h44 line actived</Button>
            <Button size="h44" disabled>
              h48 line disabled
            </Button>
          </StyledRow>
          <Space />
          <StyledRow>
            <Button size="h48">h48 line</Button>
            <Button size="h48">h48 line actived</Button>
            <Button size="h48" disabled>
              h48 line disabled
            </Button>
          </StyledRow>
        </Container>
      </StoryContainer>
    </Layout>
  );
};
