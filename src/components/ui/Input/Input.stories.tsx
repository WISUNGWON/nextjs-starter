import styled from "@emotion/styled";
import React from "react";

import { Input } from "./Input";
import { Button } from "@components/ui";
import { StoryContainer, Layout, Title } from "@components/ui/styles";
import { SearchInput } from "./SearchInput";
import { css } from "@emotion/react";
import Dropdown from "../Dropdown/Dropdown";

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

const StyledColumn = styled(Column)`
  ${Input} ~ ${Input} {
    margin-top: 24px;
  }
`;

export default {
  title: "Input",
  component: Input,
};

export const Default: React.FC = () => {
  return (
    <Layout>
      <StoryContainer>
        <Title>Input</Title>
        <Container>
          <StyledColumn>
            <Input placeholder="플레이스 홀더!" />
            <Input defaultValue="기본" />
            <Input disabled placeholder="플레이스 홀더 (disabled)" />
            <Input disabled value="disabled" />
            <Row style={{ marginTop: 16 }}>
              <Input defaultValue="기본" style={{ marginRight: 8 }} />
              <Button size="h44" variant="line">
                버튼
              </Button>
            </Row>
            <SearchInput
              cssStyle={css`
                margin-top: 16px;
              `}
              defaultValue="Search Input"
            />
            <Dropdown
              items={[
                { id: 1, name: "서울" },
                { id: 2, name: "부산" },
              ]}
            />
          </StyledColumn>
        </Container>
      </StoryContainer>
    </Layout>
  );
};
