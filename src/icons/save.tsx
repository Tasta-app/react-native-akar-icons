import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const Save = React.memo((props: IconProps) => {
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
        d="M7 21h10a4 4 0 0 0 4-4V7.414a1 1 0 0 0-.293-.707l-3.414-3.414A1 1 0 0 0 16.586 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M9 3h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M11 17h2"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export { Save };
export default Save;
