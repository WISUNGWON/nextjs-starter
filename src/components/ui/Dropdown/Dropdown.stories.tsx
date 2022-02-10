import styled from "@emotion/styled";
import React from "react";

import { Dropdown } from "./Dropdown";
import { Button } from "@components/ui";
import { StoryContainer, Layout, Title } from "@components/ui/styles";
import { css } from "@emotion/react";

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

export default {
  title: "Dropdown",
  component: Dropdown,
};

const items = [
  { id: 1, name: "서울" },
  { id: 2, name: "부산" },
  { id: 3, name: "울산" },
  { id: 4, name: "경기" },
  { id: 5, name: "대구" },
  { id: 6, name: "광주" },
  { id: 7, name: "제주" },
];

export const Default: React.FC = () => {
  return (
    <Layout>
      <StoryContainer>
        <Title>Dropdown</Title>
        <Container>
          <Dropdown
            cssStyle={css`
              width: 300px;
              margin-top: 16px;
            `}
            items={items}
          />
        </Container>
      </StoryContainer>
    </Layout>
  );
};
