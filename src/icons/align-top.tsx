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
        d="M21 2H3"
        strokeLinecap="round"
        strokeMiterlimit="5.759"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M6 22V6h4v16zM14 16V6h4v10z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="5.759"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "AlignTop";

export const AlignTop: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
