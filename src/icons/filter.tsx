import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Ellipse, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill={color} {...otherProps}>
      <Ellipse
        cx="12"
        cy="5"
        stroke={color}
        rx="9"
        ry="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M3 5c0 2.23 3.871 6.674 5.856 8.805A4.2 4.2 0 0 1 10 16.657V19a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-2.343c0-1.061.421-2.075 1.144-2.852C17.13 11.674 21 7.231 21 5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Filter";

export const Filter: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
