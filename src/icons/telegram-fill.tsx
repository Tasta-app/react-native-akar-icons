import React from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const TelegramFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <G clipPath="url(#a)">
          <Path
            fill={color}
            d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12M12.43 8.859q-1.75.728-6.998 3.014-.852.339-.893.663c-.046.366.412.51 1.034.705q.128.04.263.084c.613.199 1.437.432 1.865.441q.583.012 1.302-.48 4.902-3.31 5.061-3.346c.075-.017.179-.039.249.024.07.062.063.18.056.212-.046.193-1.84 1.862-2.77 2.726-.29.269-.495.46-.537.504q-.143.145-.282.279c-.57.548-.996.96.024 1.632.49.323.882.59 1.273.856.427.291.853.581 1.405.943q.21.14.405.28c.497.355.944.673 1.496.623.32-.03.652-.331.82-1.23.397-2.126 1.179-6.73 1.36-8.628a2 2 0 0 0-.02-.472.5.5 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14-.451.008-1.143.249-4.476 1.635"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill={color} d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  },
);

export { TelegramFill };
export default TelegramFill;
