import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="M15 3v18m0-18-4 4m4-4 4 4M8 10l-4 4 4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path stroke={color} d="M15 21a7 7 0 0 0-7-7H4" strokeWidth="2" />
    </Svg>
  );
};

IconComponent.displayName = "ForkLeft";

export const ForkLeft: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
