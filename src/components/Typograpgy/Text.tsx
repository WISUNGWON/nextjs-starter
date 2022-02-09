import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { TextProps } from "./Typography";

const Text = styled.span<TextProps>`
  display: block;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
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
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `}
  ${({ medium }) =>
    medium &&
    css`
      font-weight: 500;
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
