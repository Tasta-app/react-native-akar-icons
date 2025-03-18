import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill={color} {...otherProps}>
      <Path
        fill={color}
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "CircleMinusFill";

export const CircleMinusFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
