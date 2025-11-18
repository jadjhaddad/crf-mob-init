import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import colors from "@/resources/colors/tailwindExport";

export const getDefaultTabScreenOptions = (): NativeStackNavigationOptions => ({
  headerShadowVisible: false,
  headerTransparent: false,
  headerBlurEffect: undefined,
  headerStyle: { backgroundColor: colors.background },
  contentStyle: { backgroundColor: colors.background },
});
