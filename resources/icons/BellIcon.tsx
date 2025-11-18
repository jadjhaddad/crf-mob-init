import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const BellIcon = ({ size = 20, color = "#9FABC6", ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M12.5 15.833a2.5 2.5 0 0 1-5 0M11.497 5.2a2.083 2.083 0 1 0-2.994 0M15 9.333c0-1.149-.527-2.251-1.465-3.064C12.598 5.457 11.325 5 10 5c-1.326 0-2.598.457-3.536 1.27C5.527 7.081 5 8.183 5 9.332c0 1.902-.472 3.293-1.06 4.288-.67 1.134-1.006 1.7-.993 1.836.015.155.043.204.169.296.11.08.662.08 1.766.08h10.236c1.104 0 1.656 0 1.766-.08.125-.092.153-.14.168-.296.014-.135-.322-.702-.992-1.836-.589-.995-1.06-2.386-1.06-4.288Z"
    />
  </Svg>
);

export default BellIcon;
