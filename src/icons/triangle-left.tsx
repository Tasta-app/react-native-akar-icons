import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const TriangleLeft = React.memo((props: IconProps) => {
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
        d="m7 12 8-6v12z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { TriangleLeft };
export default TriangleLeft;
