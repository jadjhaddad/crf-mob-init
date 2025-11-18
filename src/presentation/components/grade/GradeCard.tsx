import { View, ViewProps } from "react-native";
import CustomText from "../common/CustomText";

interface GradeCardProps extends ViewProps {
  doctor: string;
  date: Date;
  title: string;
  grade: number;
  topGrade: number;
}

const GradeCard: React.FC<GradeCardProps> = ({
  doctor,
  date,
  title,
  grade,
  topGrade,
  ...props
}) => {
  return (
    <View className="flex-row flex-initial items-end" {...props}>
      <View className="flex-1">
        <CustomText className="text-placeholder text-sm"></CustomText>
        <CustomText className="text-xl">{title}</CustomText>
      </View>
      <CustomText className="font-normal text-xl text-primary">{`${grade} / ${topGrade}`}</CustomText>
    </View>
  );
};

export default GradeCard;
