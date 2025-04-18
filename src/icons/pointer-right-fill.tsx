import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const PointerRightFill = React.memo((props: IconProps) => {
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
        fill={color}
        d="M17.9 4.2A3 3 0 0 0 15.5 3h-11a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h11a3 3 0 0 0 2.4-1.2l4.5-6a3 3 0 0 0 0-3.6z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
});

export { PointerRightFill };
export default PointerRightFill;
