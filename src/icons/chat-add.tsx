import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="M12 8v3m0 0v3m0-3h3m-3 0H9"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M14 19c3.771 0 5.657 0 6.828-1.172S22 14.771 22 11s0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11s0 5.657 1.172 6.828c.653.654 1.528.943 2.828 1.07"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M14 19c-1.236 0-2.598.5-3.841 1.145-1.998 1.037-2.997 1.556-3.489 1.225s-.399-1.355-.212-3.404L6.5 17.5"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "ChatAdd";

export const ChatAdd: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
