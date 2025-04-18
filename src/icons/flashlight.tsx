import React from "react";
import { Ellipse, Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const Flashlight = React.memo((props: IconProps) => {
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
        d="M5 4v1c0 1.636 2 4 3 5l.75 9.01A3.26 3.26 0 0 0 12 22v0a3.26 3.26 0 0 0 3.25-2.99L16 10c1-1 3-3.364 3-5V4M12 11v2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Ellipse
        cx="12"
        cy="4"
        stroke={color}
        rx="7"
        ry="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { Flashlight };
export default Flashlight;
