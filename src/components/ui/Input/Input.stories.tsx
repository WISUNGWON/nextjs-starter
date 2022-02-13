import styled from "@emotion/styled";
import React from "react";

import { Input } from "./Input";
import { Button, FormItem } from "@components/ui";
import { StorybookTemplate } from "../StorybookTemplate";
import { Meta } from "@storybook/react";

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
  & > * {
    margin-bottom: 24px;
  }
`;

export default {
  title: "Input",
  component: Input,
} as Meta;

export const Default: React.FC = () => {
  return (
    <StorybookTemplate title="Input">
      <Container>
        <StyledColumn>
          <Input placeholder="플레이스 홀더!" />
          <Input defaultValue="기본" />
          <Input disabled placeholder="플레이스 홀더 (disabled)" />
          <Input disabled value="disabled" />
          <Row>
            <Input defaultValue="기본" style={{ marginRight: 8 }} />
            <Button size="h44" variant="line">
              버튼
            </Button>
          </Row>
          <Row>
            <Input defaultValue="기본" style={{ marginRight: 8 }} />
          </Row>
          <FormItem label="회원가입">
            <Input value="FormItem with label" />
          </FormItem>
        </StyledColumn>
      </Container>
    </StorybookTemplate>
  );
};
