import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { Circle as _Circle, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <_Circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M8 9.05v-.1M16 9.05v-.1"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M12 13a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "FaceVerySad";

export const FaceVerySad: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
