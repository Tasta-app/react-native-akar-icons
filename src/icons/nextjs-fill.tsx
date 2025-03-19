import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <G clipPath="url(#a)">
        <Path
          fill={color}
          d="M11.214.006c-.052.005-.216.022-.364.033C7.442.347 4.25 2.186 2.226 5.013a11.9 11.9 0 0 0-2.118 5.243c-.096.66-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.507 3.86 8.293 8.209 9.696.779.251 1.6.422 2.533.526.364.04 1.936.04 2.3 0 1.611-.179 2.977-.578 4.323-1.265.207-.105.247-.134.219-.157-.02-.014-.899-1.194-1.955-2.62l-1.919-2.593-2.404-3.559a343 343 0 0 0-2.422-3.556c-.009-.003-.018 1.578-.023 3.51-.007 3.38-.01 3.516-.052 3.596a.43.43 0 0 1-.206.213c-.075.038-.14.045-.495.045H7.81l-.108-.068a.44.44 0 0 1-.157-.172l-.05-.105.005-4.704.007-4.706.073-.092a.6.6 0 0 1 .174-.143c.096-.047.133-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 2 2.895 4.362l4.734 7.172 1.9 2.878.097-.063a12.3 12.3 0 0 0 2.465-2.163 11.95 11.95 0 0 0 2.825-6.135c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.748C23.24 5.75 20.032 1.963 15.683.56a12.6 12.6 0 0 0-2.498-.523c-.226-.024-1.776-.05-1.97-.03m4.913 7.26a.47.47 0 0 1 .237.276c.018.06.023 1.365.018 4.305l-.007 4.218-.743-1.14-.746-1.14v-3.066c0-1.983.009-3.097.023-3.151a.48.48 0 0 1 .232-.296c.097-.05.132-.054.5-.054.347 0 .408.005.486.047"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={color} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconComponent.displayName = "NextjsFill";

export const NextjsFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
