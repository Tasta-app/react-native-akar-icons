import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill={color} {...otherProps}>
      <G clipPath="url(#a)">
        <Path
          fill={color}
          d="M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0M9.6 15.975q.225 1.012 0 1.8L9.525 18c0 .075-.075.15-.075.15-.15.3-.3.525-.525.825-.675.75-1.65 1.05-2.1.825s-.225-1.35.6-2.175c.9-.9 2.1-1.5 2.1-1.5zM19.5 5.1c-.525-2.1-4.05-2.85-7.425-1.65-1.95.75-4.125 1.875-5.7 3.3-1.875 1.725-2.1 3.225-2.025 3.825C4.8 12.75 7.8 14.25 9.075 15.3 8.7 15.45 6 16.8 5.4 18.225c-.675 1.5.075 2.55.6 2.625 1.575.45 3.225-.375 4.05-1.65s.75-2.85.375-3.675a3.53 3.53 0 0 1 1.8-.075c2.1.225 2.55 1.575 2.4 2.1s-.525.825-.675.975c-.15.075-.225.15-.15.15 0 .075.075.075.225.075s1.125-.45 1.125-1.5c.075-1.275-1.2-2.7-3.375-2.7-.9 0-1.5.075-1.875.225 0-.075-.075-.075-.075-.075-1.35-1.425-3.825-2.475-3.75-4.425 0-.675.3-2.55 4.8-4.8 3.675-1.875 6.675-1.35 7.2-.225.75 1.575-1.575 4.575-5.4 5.025-1.5.15-2.25-.375-2.4-.6-.225-.225-.225-.225-.3-.225-.15.075-.075.225 0 .375.15.3.6.825 1.425 1.125.675.225 2.4.375 4.5-.45 2.325-.9 4.125-3.375 3.6-5.475z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={color} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconComponent.displayName = "SassFill";

export const SassFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
