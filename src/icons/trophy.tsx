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
				d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7zM9 22h6l-3-5z"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="M5 4H4a2 2 0 0 0-2 2v1.239a4 4 0 0 0 2.128 3.535L5.5 11.5M19 4h1a2 2 0 0 1 2 2v.637a5 5 0 0 1-2.66 4.419l-.84.444"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Trophy";

export const Trophy: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
