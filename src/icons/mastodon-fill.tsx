import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        fill={color}
        d="M12.158 0c-3.068.025-6.02.357-7.74 1.147 0 0-3.41 1.526-3.41 6.733 0 1.192-.024 2.617.014 4.129.123 5.092.933 10.11 5.64 11.355 2.171.575 4.035.695 5.535.613 2.722-.151 4.25-.972 4.25-.972l-.09-1.974s-1.945.613-4.13.538c-2.163-.074-4.448-.233-4.798-2.89a5.5 5.5 0 0 1-.048-.745s2.124.519 4.816.642c1.647.076 3.19-.096 4.759-.283 3.007-.36 5.625-2.212 5.954-3.905.519-2.667.476-6.508.476-6.508 0-5.207-3.411-6.733-3.411-6.733C18.255.357 15.302.025 12.233 0zM8.686 4.068c1.278 0 2.245.491 2.885 1.474l.622 1.043.623-1.043c.64-.983 1.607-1.474 2.885-1.474 1.105 0 1.995.388 2.675 1.146q.987 1.136.986 3.07v6.303h-2.497V8.47c0-1.29-.543-1.945-1.628-1.945-1.2 0-1.802.777-1.802 2.313v3.349h-2.483v-3.35c0-1.535-.601-2.312-1.802-2.312-1.085 0-1.628.655-1.628 1.945v6.118H5.024V8.283q0-1.932.987-3.07c.68-.757 1.57-1.145 2.675-1.145"
      />
    </Svg>
  );
};

IconComponent.displayName = "MastodonFill";

export const MastodonFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
