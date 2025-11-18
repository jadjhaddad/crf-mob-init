import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import CustomText from "./CustomText";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, ...props }) => {
  return (
    <TouchableOpacity
      className="flex-initial h-14 items-center justify-center bg-primary rounded-lg"
      {...props}
    >
      <CustomText className="text-white text-xl">{title}</CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
