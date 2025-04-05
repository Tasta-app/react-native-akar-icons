import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const PointerLeftFill = React.memo((props: IconProps) => {
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
        d="M6.6 4.2A3 3 0 0 1 9 3h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H9a3 3 0 0 1-2.4-1.2l-4.5-6a3 3 0 0 1 0-3.6z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
});

export { PointerLeftFill };
export default PointerLeftFill;
