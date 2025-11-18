import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ProfileIcon = ({ size = 20, color = "#9FABC6", ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M16.667 17.5c0-1.163 0-1.745-.144-2.218a3.333 3.333 0 0 0-2.222-2.222c-.473-.143-1.055-.143-2.217-.143H7.917c-1.163 0-1.745 0-2.218.143a3.333 3.333 0 0 0-2.222 2.222c-.143.473-.143 1.055-.143 2.218M13.75 6.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </Svg>
);
export default ProfileIcon;
