import React from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const RedditFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <G clipPath="url(#a)">
          <Path
            fill={color}
            d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12m-4.312-.942c.194.277.304.604.316.942a1.75 1.75 0 0 1-.972 1.596q.021.264 0 .528c0 2.688-3.132 4.872-6.996 4.872S5.04 16.812 5.04 14.124a3.4 3.4 0 0 1 0-.528 1.75 1.75 0 1 1 1.932-2.868 8.57 8.57 0 0 1 4.68-1.476l.888-4.164a.37.37 0 0 1 .444-.288l2.94.588a1.2 1.2 0 1 1-.156.732L13.2 5.58l-.78 3.744a8.54 8.54 0 0 1 4.62 1.476 1.75 1.75 0 0 1 2.648.258M8.206 12.533a1.2 1.2 0 1 0 1.996 1.334 1.2 1.2 0 0 0-1.996-1.334m3.806 4.891c1.065.044 2.113-.234 2.964-.876a.335.335 0 1 0-.468-.48A3.94 3.94 0 0 1 12 16.8a3.92 3.92 0 0 1-2.496-.756.324.324 0 0 0-.456.456 4.6 4.6 0 0 0 2.964.924m2.081-3.178c.198.132.418.25.655.25a1.2 1.2 0 0 0 1.212-1.248 1.2 1.2 0 1 0-1.867.998"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill={color} d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  },
);

export { RedditFill };
export default RedditFill;
