import { View } from "react-native";
import { AllScreenConfig, AllScreensProps } from ".";

const AgendaPage: React.FC<AllScreensProps<"AgendaPage">> = () => {
  return <View style={{ flex: 1, backgroundColor: "white" }}></View>;
};

const AgendaPageConfig: AllScreenConfig<"AgendaPage"> = {
  name: "AgendaPage",
  component: AgendaPage,
  options: {
    title: "Agenda",
    headerShadowVisible: false,
  },
};

export default AgendaPageConfig;
