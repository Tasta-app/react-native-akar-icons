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
        d="M11.114 2.438a2 2 0 0 1 1.772 0l6.275 3.1a2 2 0 0 1 1.066 1.358l1.569 7.047a2 2 0 0 1-.374 1.662l-4.371 5.623a2 2 0 0 1-1.579.772H8.528a2 2 0 0 1-1.579-.772l-4.371-5.623a2 2 0 0 1-.374-1.662l1.569-7.047a2 2 0 0 1 1.066-1.359z"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Heptagon";

export const Heptagon: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
