import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Circle as _Circle, Rect, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill={color} {...otherProps}>
      <Rect
        width="20"
        height="10"
        x="2"
        y="7"
        stroke={color}
        rx="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <_Circle
        cx="7"
        cy="12"
        r="5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "ToggleOff";

export const ToggleOff: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
