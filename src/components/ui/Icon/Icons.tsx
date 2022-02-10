import Image from "next/image";

interface IconProps {
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const SearchIcon = ({ width = 24, height = 24, onClick }: IconProps) => (
  <Image
    src="/icons/search.svg"
    alt="Search"
    width={width}
    height={height}
    onClick={onClick}
  />
);
export const ArrowDownIcon = ({
  width = 24,
  height = 24,
  onClick,
}: IconProps) => (
  <Image
    src="/icons/arrow-down.svg"
    alt="arrow-down"
    width={width}
    height={height}
    onClick={onClick}
  />
);
export const ArrowRightIcon = ({
  width = 24,
  height = 24,
  onClick,
}: IconProps) => (
  <Image
    src="/icons/arrow-right.svg"
    alt="arrow-right"
    width={width}
    height={height}
    onClick={onClick}
  />
);
export const CheckedIcon = ({
  width = 24,
  height = 24,
  onClick,
}: IconProps) => (
  <Image
    src="/icons/checked.svg"
    alt="checked"
    width={width}
    height={height}
    onClick={onClick}
  />
);
export const MinusIcon = ({ width = 24, height = 24, onClick }: IconProps) => (
  <Image
    src="/icons/minus.svg"
    alt="minus"
    width={width}
    height={height}
    onClick={onClick}
  />
);
export const PlusIcon = ({ width = 24, height = 24, onClick }: IconProps) => (
  <Image
    src="/icons/plus.svg"
    alt="plus"
    width={width}
    height={height}
    onClick={onClick}
  />
);
