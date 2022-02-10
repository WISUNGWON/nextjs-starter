import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";

import { StoryContainer, Layout, Title } from "@components/ui/styles";
import {
  SearchIcon,
  PlusIcon,
  MinusIcon,
  ArrowDownIcon,
  CheckedIcon,
  ArrowRightIcon,
} from "./Icons";

const Container = styled.div`
  display: flex;
  gap: 10px;
  img {
    border: 1px solid #4b4b4b !important;
    padding: 12px !important;
    border-radius: 8px;
  }
`;

export default {
  title: "Icons",
};

export const Default: React.FC = () => {
  return (
    <Layout>
      <StoryContainer>
        <Title>Icons</Title>
        <Container>
          <SearchIcon />
          <ArrowDownIcon />
          <MinusIcon />
          <CheckedIcon />
          <ArrowRightIcon />
          <PlusIcon />
        </Container>
      </StoryContainer>
    </Layout>
  );
};
