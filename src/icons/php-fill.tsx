import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps, IconType } from "../types/icons";

const PhpFill: IconType = React.memo(
  ({ color = "black", size = 24, strokeWidth = 2, ...rest }: IconProps) => {
    return (
      <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <Path
          fill={color}
          d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5 12-2.855 12-6.5-5.271-6.5-12-6.5m-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209q.086-.457-.067-.625c-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325zm-9.365 1-.377 2h.855c.74 0 1.428-.084 1.543-1.187.043-.428-.135-.813-.99-.813zm10.5 0-.377 2h.855c.74 0 1.428-.084 1.543-1.187.043-.428-.134-.813-.99-.813z"
        />
      </Svg>
    );
  },
);

export { PhpFill };
export default PhpFill;
