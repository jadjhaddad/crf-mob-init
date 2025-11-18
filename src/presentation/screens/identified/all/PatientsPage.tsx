import { AllScreenConfig, AllScreensProps } from ".";
import CustomScrollView from "@/src/presentation/components/common/CustomScrollView";

const PatientsPage: React.FC<AllScreensProps<"PatientsPage">> = () => {
  return <CustomScrollView></CustomScrollView>;
};

const PatientsPageConfig: AllScreenConfig<"PatientsPage"> = {
  name: "PatientsPage",
  component: PatientsPage,
  options: {
    title: "Patients",
  },
};

export default PatientsPageConfig;
