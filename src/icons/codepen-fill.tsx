import React from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const CodepenFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <G clipPath="url(#a)">
          <Path
            fill={color}
            d="M11.372.19c.38-.253.875-.253 1.256 0L23.492 7.4c.317.21.508.565.508.946v7.308c0 .38-.19.736-.508.947l-10.864 7.21c-.38.252-.875.252-1.256 0L.508 16.6A1.14 1.14 0 0 1 0 15.654V8.346c0-.38.19-.736.508-.947zm-9.1 10.273v3.058l2.288-1.54zm4.337 2.878L3.18 15.648l7.684 5.1v-4.583zm6.527 2.824v4.582l7.684-5.1-3.43-2.306zm6.304-4.183 2.288 1.54v-3.06zm1.37-3.636-3.41 2.263-4.264-2.868V3.253zm-9.946-5.093V7.74l-4.263 2.868L3.19 8.346zM12 9.715l-3.35 2.254L12 14.192l3.35-2.223z"
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

export { CodepenFill };
export default CodepenFill;
