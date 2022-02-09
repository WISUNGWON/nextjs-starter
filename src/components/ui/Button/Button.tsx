import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ButtonProps {
  variant?: "fill" | "line";
  size?: "h32" | "h48";
}

const defaultProps = {
  variant: "line" as const,
  size: "h32" as const,
};

export const Button = styled.button<ButtonProps>`
  position: flex;
  justify-content: center;
  align-content: center;
  height: 32px;
  padding: 7px 8px;
  line-height: 1;
  border-radius: 4px;
  cursor: pointer;

  ${(props: any) =>
    props.size === "h32" &&
    css`
      height: 32px;
      padding: 7px 8px;
      font-weight: 400;
      font-size: 12px;
      border-radius: 4px;
    `}

  ${(props: any) =>
    props.variant === "fill" &&
    css`
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.white};
      border: none;

      :hover {
        opacity: 0.8;
      }

      :disabled {
        background-color: ${props.theme.colors.slategray10};
        color: ${props.theme.colors.slategray40};
      }
    `}

    ${(props: any) =>
    props.variant === "line" &&
    css`
      color: ${props.theme.colors.slategray60};
      background-color: ${props.theme.colors.white};
      border: 1px solid ${props.theme.colors.slategray20};

      :hover {
        background-color: #fafafb;
      }

      :active {
        color: ${props.theme.colors.slategray80};
        border: 1px solid ${props.theme.colors.primary};
      }

      :disabled {
        background-color: #fafafb;
        border: 1px solid ${props.theme.colors.slategray20};
        color: ${props.theme.colors.slategray40};
        pointer-events: none;
        cursor: not-allowed;
      }
    `}
`;

Button.defaultProps = defaultProps;
