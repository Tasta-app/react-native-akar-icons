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
				d="M20 20 4 4m16 0L4 20"
				strokeLinecap="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Cross";

export const Cross: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
