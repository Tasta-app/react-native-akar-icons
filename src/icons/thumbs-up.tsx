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
				d="m11.605 5.782.23-2.369c.091-.952.98-1.598 1.878-1.366 1.351.35 2.3 1.605 2.3 3.044v3.035c0 .675 0 1.013.146 1.26.083.141.197.26.333.345.24.151.567.151 1.22.151h.396c1.703 0 2.554 0 3.078.39.393.293.67.722.78 1.208.146.65-.181 1.463-.836 3.087l-.326.81a3.26 3.26 0 0 0-.226 1.48c.232 2.874-2.047 5.295-4.833 5.136l-10.424-.599c-1.139-.065-1.708-.098-2.222-.553-.515-.455-.612-.924-.805-1.861a14.3 14.3 0 0 1 .055-6.037c.283-1.248 1.475-1.92 2.706-1.76 3.264.42 6.223-2.019 6.55-5.4"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="m7 11.5-.137.457A15 15 0 0 0 7 21"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "ThumbsUp";

export const ThumbsUp: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
