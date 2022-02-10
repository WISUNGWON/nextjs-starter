import styled from "@emotion/styled";

export const Input = styled.input`
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
