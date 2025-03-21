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
				d="m16.926 19.382-4.302 1.413a2 2 0 0 1-1.248 0L7.074 19.38a4 4 0 0 1-2.623-2.794L3 11l9 1 9-1-1.451 5.587a4 4 0 0 1-2.623 2.794"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="M6.497 7.257A2 2 0 0 1 8.354 6h7.292a2 2 0 0 1 1.857 1.257L19 11l-7 1-7-1zM12 3v3M11 3h2M12 12v4"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Boat";

export const Boat: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
