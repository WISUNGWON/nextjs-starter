import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ITypographyProps } from "./Typography";

const Text = styled.span<ITypographyProps>`
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;

  ${({ type }) =>
    type === "h1" &&
    css`
      font-size: 32px;
    `}
  ${({ type }) =>
    type === "h2" &&
    css`
      font-size: 24px;
      line-height: 3.2;
      font-weight: 400;
    `}
  ${({ type }) =>
    type === "h3" &&
    css`
      font-size: 18px;
      line-height: 2.4;
      font-weight: 400;
    `}

     ${({ type }) =>
    type === "s1" &&
    css`
      font-size: 16px;
      line-height: 2.4;
      font-weight: 700;
    `}
  ${({ type }) =>
    type === "s2" &&
    css`
      font-size: 14px;
      line-height: 1.4;
      font-weight: 700;
    `}

  ${({ type }) =>
    type === "b1" &&
    css`
      font-size: 16px;
      line-height: 1.6;
    `}
  ${({ type }) =>
    type === "b2" &&
    css`
      font-size: 14px;
      line-height: 1.4;
    `}
  ${({ type }) =>
    type === "small" &&
    css`
      font-size: 12px;
      line-height: 1.2;
    `}
  ${({ type }) =>
    type === "caption" &&
    css`
      font-size: 10px;
      line-height: 1;
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

    ${({ onClick, theme }) =>
    onClick &&
    css`
      cursor: pointer;

      :hover {
        color: ${theme.colors.primaryGreen60};
      }
    `}
`;

export default Text;
