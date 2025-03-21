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
				d="M20 11V8l-8-5-8 5v3h16M3 21h18M5 20v-5h2M17 20v-5h2M11 20v-5h2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Bank";

export const Bank: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
