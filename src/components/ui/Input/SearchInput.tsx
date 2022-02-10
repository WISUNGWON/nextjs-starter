import { SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Input } from "..";
import { SearchIcon } from "../Icon/Icons";

interface SearchInputProps extends React.ComponentProps<typeof Input> {
  cssStyle?: SerializedStyles;
}

const Container = styled.div`
  position: relative;
`;

export const SearchInput = ({ cssStyle, ...props }: SearchInputProps) => {
  return (
    <Container css={cssStyle}>
      <Input {...props} />
      <div
        css={css`
          position: absolute;
          top: 10px;
          right: 12px;
        `}
      >
        <SearchIcon />
      </div>
    </Container>
  );
};
