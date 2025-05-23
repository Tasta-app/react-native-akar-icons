import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const ToggleOffFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M7 7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10zm0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  },
);

export { ToggleOffFill };
export default ToggleOffFill;
