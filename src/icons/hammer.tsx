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
        d="m4 22-2-2 1-1 2 2zM9 13l2 2M12 12l-8 8M20 4l-1 1M9.707 7.707a1 1 0 0 1 0-1.414l4.086-4.086a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 0 1.414l-4.086 4.086a1 1 0 0 1-1.414 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Hammer";

export const Hammer: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
