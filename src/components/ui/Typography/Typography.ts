import { ThemeType } from "@styles/themes/ThemeType";

import Text from "./Text";
import Title from "./Title";
import Headline from "./Headline";

export interface ITypographyProps {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
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

export const Typography = { Text, Title, Headline };
