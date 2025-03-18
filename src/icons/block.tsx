import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Circle as _Circle, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill={color} {...otherProps}>
      <_Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <Path stroke={color} d="M5 19 19 5" strokeWidth="2" />
    </Svg>
  );
};

IconComponent.displayName = "Block";

export const Block: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
