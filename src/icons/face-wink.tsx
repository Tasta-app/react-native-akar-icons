import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Circle as _Circle, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill={color} {...otherProps}>
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
        d="M7 9h2M16 9.05v-.1"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M16 15c-.5 1-1.79 2-4 2s-3.5-1-4-2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "FaceWink";

export const FaceWink: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
