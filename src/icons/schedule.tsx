import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
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
      <Path
        stroke={color}
        d="M9 20H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v3M8 2v2M15 2v2M2 8h19M18.5 15.643l-1.5 1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <_Circle
        cx="17"
        cy="17"
        r="5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Schedule";

export const Schedule: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
