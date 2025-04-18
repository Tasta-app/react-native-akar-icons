import React from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const FaceVerySad = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <_Circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M8 9.05v-.1M16 9.05v-.1"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M12 13a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { FaceVerySad };
export default FaceVerySad;
