import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";

import { StoryContainer, Layout, Title } from "@components/ui/styles";

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
          <Image
            src="/icons/search.svg"
            alt="search-icon"
            width={24}
            height={24}
          />
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow-down"
            width={24}
            height={24}
          />
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow-right"
            width={24}
            height={24}
          />
          <Image
            src="/icons/checked.svg"
            alt="checked"
            width={24}
            height={24}
          />
          <Image src="/icons/minus.svg" alt="minus" width={24} height={24} />
          <Image src="/icons/plus.svg" alt="plus" width={24} height={24} />
        </Container>
      </StoryContainer>
    </Layout>
  );
};
