import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const Moon: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          stroke={color}
          d="M20.958 15.325c.204-.486-.379-.9-.868-.684a7.7 7.7 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.3 7.3 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862 3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675Z"
          strokeWidth={strokeWidth}
        />
        <Path
          stroke={color}
          d="M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.33 2.33 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.33 2.33 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.33 2.33 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.33 2.33 0 0 1-2.588 0z"
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  },
);

export { Moon };
export default Moon;
