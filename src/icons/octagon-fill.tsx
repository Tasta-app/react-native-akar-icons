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
        d="M11.235 1.317a2 2 0 0 1 1.53 0l6.248 2.588a2 2 0 0 1 1.082 1.082l2.588 6.248a2 2 0 0 1 0 1.53l-2.588 6.248a2 2 0 0 1-1.082 1.082l-6.248 2.588a2 2 0 0 1-1.53 0l-6.248-2.588a2 2 0 0 1-1.082-1.082l-2.588-6.248a2 2 0 0 1 0-1.53l2.588-6.248a2 2 0 0 1 1.082-1.082z"
      />
    </Svg>
  );
};

IconComponent.displayName = "OctagonFill";

export const OctagonFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
