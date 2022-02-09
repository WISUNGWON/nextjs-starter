import { ThemeType } from "@styles/themes/ThemeType";

import Text from "./Text";

export interface TextProps {
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
