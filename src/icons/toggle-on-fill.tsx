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
        fill={color}
        d="M7 7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10zm10 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "ToggleOnFill";

export const ToggleOnFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
