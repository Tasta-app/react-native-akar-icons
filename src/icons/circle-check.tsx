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
        d="m8 12.5 3 3 5-6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <_Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    </Svg>
  );
};

IconComponent.displayName = "CircleCheck";

export const CircleCheck: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
