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
        d="M13.533 3.81 8 2l1 4-5.37 4.475A1.75 1.75 0 0 0 3 11.82v0c0 .617.537 1.088 1.127.986L9 12l-2.097 7h10.614l1.283-5.745c.913-4.088-1.386-8.21-5.267-9.445M4 21a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H4z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Chess";

export const Chess: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
