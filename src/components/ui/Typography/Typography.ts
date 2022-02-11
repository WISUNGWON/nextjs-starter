import { ThemeType } from "@styles/themes/ThemeType";

import Text from "./Text";

export interface ITypographyProps {
  type?: "h1" | "h2" | "h3" | "s1" | "s2" | "b1" | "b2" | "small" | "caption";
  gutter?:
    | number
    | { top?: number; bottom?: number; left?: number; right?: number };
  align?: "left" | "center" | "right";
  bold?: boolean;
  medium?: boolean;
  inline?: boolean;
  color?: keyof ThemeType["colors"];
  underline?: boolean;
}

export const Typography = { Text };
