import { Text, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  className?: string;
}

const CustomText: React.FC<CustomTextProps> = ({ className, ...props }) => {
  return <Text className={`font-regular ${className || ""}`} {...props} />;
};

export default CustomText;
