import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

const Container = styled.div`
  width: 100%;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const DropdownWrapper = styled.div<{ open?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 12px;
  border-radius: 4px;
  background-color: ${({ open, theme }) =>
    open ? "white" : theme.colors.pressed};
  border: 1px solid ${({ theme }) => theme.colors.slategray20};
`;

const SelectedItem = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.slategray40};
`;

const DropdownMenu = styled.ul<{ open?: boolean }>`
  display: ${({ open }) => (open ? `block` : `none`)};
  width: 100%;
  max-height: 220px;
  margin-top: 6px;
  overflow: auto;
  background-color: white;
  position: absolute;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.slategray20};
`;

const DropdownItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-top: none;

  :hover {
    background-color: ${({ theme }) => theme.colors.primaryGreen10};
  }
`;

const Item = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.slategray40};
`;

interface DropdownProps {
  items: {
    id: number;
    name: string;
  }[];
  cssStyle?: SerializedStyles;
  onSelect?: () => void;
}

export const Dropdown = ({ items, cssStyle, onSelect }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);

  const handleSelectItem = (e: any) => {
    const targetId = e.target.id;
    if (targetId === "item_name") {
      setItem(e.target.parentElement.innerText);
    } else if (targetId === "item") {
      setItem(e.target.innerText);
    }

    onSelect && onSelect();
    setOpen((draft) => !draft);
  };

  return (
    <Container css={cssStyle}>
      <DropdownWrapper open={open} onClick={() => setOpen(!open)}>
        <SelectedItem>{item ? item : "선택해 주세요."}</SelectedItem>
        <Image
          src="/icons/arrow-down.svg"
          width={24}
          height={24}
          alt="arrow-down"
        />
      </DropdownWrapper>
      <DropdownMenu open={open}>
        {items.map((item) => (
          <DropdownItemContainer
            id="item"
            key={item.id}
            onClick={handleSelectItem}
          >
            <Item id="item_name">{item.name}</Item>
          </DropdownItemContainer>
        ))}
      </DropdownMenu>
    </Container>
  );
};
