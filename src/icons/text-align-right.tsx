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
				d="M3 6h18m-10 6h10M6 18h15"
				strokeLinecap="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "TextAlignRight";

export const TextAlignRight: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
