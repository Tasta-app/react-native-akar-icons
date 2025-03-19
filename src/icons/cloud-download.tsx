import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="M12 22v-9m0 9-2.5-2m2.5 2 2.5-2M5.034 9.117A4.002 4.002 0 0 0 6 17h1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M15.83 7.138a5.5 5.5 0 0 0-10.796 1.98S5.187 10 5.5 10.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M17 17a5 5 0 1 0-1.17-9.862L14.5 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "CloudDownload";

export const CloudDownload: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
