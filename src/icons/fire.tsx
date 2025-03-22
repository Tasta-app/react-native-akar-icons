import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
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
        d="M12 22c-4.97 0-9-2.582-9-7v-.088C3 12.794 4.338 11.1 6.375 10c1.949-1.052 3.101-2.99 2.813-5l-.563-3 2.086.795c3.757 1.43 6.886 3.912 8.914 7.066A8.5 8.5 0 0 1 21 14.464V15c0 1.562-.504 2.895-1.375 3.965"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M12 22c-1.657 0-3-1.433-3-3.2 0-1.4 1.016-2.521 1.91-3.548L12 14l1.09 1.252C13.984 16.28 15 17.4 15 18.8c0 1.767-1.343 3.2-3 3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Fire";

export const Fire: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
