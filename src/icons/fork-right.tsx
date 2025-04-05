import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const ForkRight = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        stroke={color}
        d="M9 3v18M9 3l4 4M9 3 5 7M16 10l4 4-4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M9 21a7 7 0 0 1 7-7h4"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { ForkRight };
export default ForkRight;
