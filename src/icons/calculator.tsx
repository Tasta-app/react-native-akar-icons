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
        d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5H2z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M18.5 16.5h-3"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M12 11h10v7a4 4 0 0 1-4 4h-6zM12 11H2v7a4 4 0 0 0 4 4h6z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M5.5 18 7 16.5m0 0L8.5 15M7 16.5 8.5 18M7 16.5 5.5 15"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Calculator";

export const Calculator: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
