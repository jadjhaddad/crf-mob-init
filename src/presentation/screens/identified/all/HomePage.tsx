import HomeHeader from "@/src/presentation/components/headers/HomeHeader";
import { AllScreenConfig, AllScreensProps } from ".";
import CustomScrollView from "@/src/presentation/components/common/CustomScrollView";
import { useEffect } from "react";
import { View } from "react-native";
import CustomText from "@/src/presentation/components/common/CustomText";
import AppointmentCard from "@/src/presentation/components/appointment/AppointmentCard";
import GradeCard from "@/src/presentation/components/grade/GradeCard";

const HomePage: React.FC<AllScreensProps<"HomePage">> = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      header: () => <HomeHeader />,
    });
  }, []);

  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
  const twoHoursFromNow = new Date(now.getTime() + 2 * 60 * 60 * 1000);
  const threeHoursFromNow = new Date(now.getTime() + 3 * 60 * 60 * 1000);
  const fiveHoursFromNow = new Date(now.getTime() + 5 * 60 * 60 * 1000);

  return (
    <CustomScrollView className="pt-0">
      <View className="mt-3">
        <CustomText className="text-lg font-medium mb-2">
          Appointments
        </CustomText>
        <AppointmentCard
          color="#486AD1"
          fieldStartDate={oneHourAgo}
          fieldEndDate={twoHoursFromNow}
          field="Endodontics"
          appointmentInfo={[
            {
              startDate: oneHourAgo,
              endDate: twoHoursFromNow,
              patient: "Winston Shmidt",
              notes:
                "Routine checkup and cleaning. Patient requested fluoride treatment.",
            },
          ]}
        />
        <AppointmentCard
          containerClassName="mt-3"
          color="#FF9271"
          fieldStartDate={threeHoursFromNow}
          fieldEndDate={fiveHoursFromNow}
          field="Periodontics"
          appointmentInfo={[
            {
              startDate: threeHoursFromNow,
              endDate: fiveHoursFromNow,
              patient: "Winston Bishop",
              notes:
                "Cavity filling on upper right molar. Patient is nervous about the procedure.",
            },
          ]}
        />
      </View>

      <View className="mt-3">
        <CustomText className="text-lg font-medium mb-2">
          Grades
        </CustomText>
        <GradeCard
          doctor="Dr. Ryan Geauxinue"
          date={new Date(2025, 10, 15)}
          title="Root Canal Procedure"
          grade={92}
          topGrade={100}
        />
        <GradeCard
          doctor="Dr. Nick Miller"
          date={new Date(2025, 10, 10)}
          title="Crown Placement"
          grade={88}
          topGrade={100}
        />
        <GradeCard
          doctor="Dr. Emily Parker"
          date={new Date(2025, 10, 5)}
          title="Dental Implant Surgery"
          grade={95}
          topGrade={100}
        />
      </View>
    </CustomScrollView>
  );
};

const HomePageConfig: AllScreenConfig<"HomePage"> = {
  name: "HomePage",
  component: HomePage,
  options: {},
};

export default HomePageConfig;
