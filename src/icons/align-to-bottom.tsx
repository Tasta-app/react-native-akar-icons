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
        d="M3 22h18M12 2v15M5 10l7 7 7-7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "AlignToBottom";

export const AlignToBottom: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
