import { View } from "react-native";
import { AllScreenConfig, AllScreensProps } from ".";
import CustomScrollView from "@/src/presentation/components/common/CustomScrollView";

const AgendaPage: React.FC<AllScreensProps<"AgendaPage">> = () => {
  return <CustomScrollView></CustomScrollView>;
};

const AgendaPageConfig: AllScreenConfig<"AgendaPage"> = {
  name: "AgendaPage",
  component: AgendaPage,
  options: {
    title: "Agenda",
  },
};

export default AgendaPageConfig;
