import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const StackOverflowFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M18.372 20.222v-5.358h1.79V22H4v-7.136h1.79v5.358z"
        />
        <Path
          fill={color}
          d="m7.768 14.356 8.79 1.824.372-1.755L8.14 12.6zm1.162-4.157 8.14 3.764.744-1.617-8.14-3.787zm2.256-3.973 6.907 5.705 1.14-1.363-6.907-5.704zM15.651 2 14.21 3.062l5.35 7.16L21 9.159zm-8.07 16.42h8.977v-1.778H7.581z"
        />
      </Svg>
    );
  },
);

export { StackOverflowFill };
export default StackOverflowFill;
