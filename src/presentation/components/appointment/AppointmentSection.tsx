import { View } from "react-native";
import CustomText from "../common/CustomText";
import AppointmentCard from "./AppointmentCard";

const AppointmentSection: React.FC<{}> = () => {
  //DummyData
  const now = new Date();

  const nowStartDate = new Date(now.getTime() - 30 * 60 * 1000); // 30 mins ago
  const nowEndDate = new Date(now.getTime() + 30 * 60 * 1000); // 30 mins from now

  const a1StartDate = new Date(now.getTime() - 30 * 60 * 1000); // 30 mins ago
  const a1EndtDate = new Date(now.getTime()); // now

  const a2StartDate = new Date(now.getTime()); // now
  const a2EndtDate = new Date(now.getTime() + 30 * 60 * 1000); // 30 mins from now

  const upcomingStartDate = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour from now
  const upcomingEndDate = new Date(now.getTime() + 120 * 60 * 1000); // 2 hours from now

  return (
    <View>
      <CustomText></CustomText>
      <AppointmentCard
        field="Endodontics"
        color={"#486AD1"}
        fieldStartDate={nowStartDate}
        fieldEndDate={nowEndDate}
        appointmentInfo={[
          {
            startDate: a1StartDate,
            endDate: a1EndtDate,
            patient: "Winston Bishop",
            notes: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          },
          {
            startDate: a2StartDate,
            endDate: a2EndtDate,
            patient: "Winston Shmidt",
            notes: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          },
        ]}
      />
      <AppointmentCard
        containerClassName="mt-4"
        field="Periodontics"
        color={"#FF9271"}
        fieldStartDate={upcomingStartDate}
        fieldEndDate={upcomingEndDate}
        appointmentInfo={[
          {
            startDate: upcomingStartDate,
            endDate: upcomingEndDate,
            patient: "Jessica Day",
            notes: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          },
        ]}
      />
    </View>
  );
};

export default AppointmentSection;
