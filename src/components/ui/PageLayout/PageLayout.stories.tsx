import React from "react";
import { Meta } from "@storybook/react";
import styled from "@emotion/styled";

import { PageLayout } from "./PageLayout";

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
  title: "PageLayout",
  component: PageLayout,
} as Meta;

export const Text: React.VFC = () => (
  <PageLayout>
    <Caption>PageLayout Content</Caption>
  </PageLayout>
);
