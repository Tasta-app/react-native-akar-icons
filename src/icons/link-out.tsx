import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const LinkOut: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M13.5 10.5 21 3M16 3h5v5M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { LinkOut };
export default LinkOut;
