import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="M3 5h4m14 0H11m-8 7h12m6 0h-2M3 19h2m16 0H9"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <_Circle
        cx="9"
        cy="5"
        r="2"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <_Circle
        cx="17"
        cy="12"
        r="2"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <_Circle
        cx="7"
        cy="19"
        r="2"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "SettingsHorizontal";

export const SettingsHorizontal: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
