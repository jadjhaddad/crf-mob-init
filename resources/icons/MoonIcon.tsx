import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const MoonIcon = ({ size = 20, color = "#0D1785", ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"
    />
  </Svg>
);
export default MoonIcon;
