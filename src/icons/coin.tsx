import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Ellipse, Path, Svg } from "react-native-svg";
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
      <Ellipse
        cx="9.5"
        cy="10"
        stroke={color}
        rx="9.5"
        ry="10"
        transform="matrix(-1 0 0 1 20 2)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M13 8.8a3.58 3.58 0 0 0-2.25-.8C8.679 8 7 9.79 7 12s1.679 4 3.75 4c.844 0 1.623-.298 2.25-.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M10 2c4.333 0 13 1 13 10s-8.667 10-13 10"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Coin";

export const Coin: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
