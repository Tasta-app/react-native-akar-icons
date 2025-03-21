import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<Path
				stroke={color}
				d="M2 10c6-6.667 14-6.667 20 0M6 14c3.6-4 8.4-4 12 0"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<_Circle
				cx="12"
				cy="18"
				r="1"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Wifi";

export const Wifi: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
