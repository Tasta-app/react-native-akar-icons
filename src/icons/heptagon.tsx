import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Heptagon: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M11.114 2.438a2 2 0 0 1 1.772 0l6.275 3.1a2 2 0 0 1 1.066 1.358l1.569 7.047a2 2 0 0 1-.374 1.662l-4.371 5.623a2 2 0 0 1-1.579.772H8.528a2 2 0 0 1-1.579-.772l-4.371-5.623a2 2 0 0 1-.374-1.662l1.569-7.047a2 2 0 0 1 1.066-1.359z"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Heptagon };
export default Heptagon;
