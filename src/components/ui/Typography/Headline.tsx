import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ITypographyProps } from "./Typography";

const Text = styled.span<ITypographyProps>`
  display: block;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;

  ${({ type }) =>
    type === "primary" &&
    css`
      font-size: 32px;
    `}
  ${({ type }) =>
    type === "secondary" &&
    css`
      font-size: 24px;
      line-height: 3.2;
      font-weight: 400;
    `}
  ${({ type }) =>
    type === "tertiary" &&
    css`
      font-size: 18px;
      line-height: 2.4;
      font-weight: 400;
    `}

  ${({ gutter }) => {
    if (typeof gutter === "number") {
      return css`
        margin: ${gutter}px;
      `;
    }
    if (typeof gutter === "object") {
      return css`
        margin-top: ${gutter.top ? `${gutter.top}px` : 0};
        margin-bottom: ${gutter.bottom ? `${gutter.bottom}px` : 0};
        margin-left: ${gutter.left ? `${gutter.left}px` : 0};
        margin-right: ${gutter.right ? `${gutter.right}px` : 0};
      `;
    }
  }}
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
    
  ${({ inline }) =>
    inline &&
    css`
      display: inline;
    `}
    
  ${({ color, theme }) =>
    color &&
    css`
      color: ${theme.colors[color]};
    `}

    ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`;

export default Text;
