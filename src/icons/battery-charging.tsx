import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Rect
        width="18"
        height="12"
        x="2"
        y="6"
        stroke={color}
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M20 10h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H20zM11.4 9 9 12h4l-2.4 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "BatteryCharging";

export const BatteryCharging: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
