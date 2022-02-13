import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { UseFormRegister, FieldValues } from "react-hook-form";

const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 12px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.slategray80};
  box-sizing: border-box;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.slategray20};
  border-radius: 4px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.slategray40};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.primaryGreen60};
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.primaryGreen60};
  }

  :disabled {
    color: ${({ theme }) => theme.colors.slategray40};
    background-color: ${({ theme }) => theme.colors.slategray10};

    :hover {
      border: 1px solid ${({ theme }) => theme.colors.slategray20};
    }
  }
`;

interface IInputProps extends React.ComponentProps<typeof StyledInput> {
  className?: string;
  formName?: string;
  label?: string;
  labelStyle?: SerializedStyles;
  register?: UseFormRegister<FieldValues>;
}

// TODO : subfix (button, icon 등등)
export const Input = ({
  formName,
  className,
  label,
  labelStyle,
  register,
  ...props
}: IInputProps) => (
  <StyledInput
    {...(register && { ...register(formName!, { required: true }) })}
    {...props}
  />
);
