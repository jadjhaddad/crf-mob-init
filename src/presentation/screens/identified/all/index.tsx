import {
  NavigationProp,
  RouteProp,
  RouteConfig,
  StackNavigationState,
  ParamListBase,
} from "@react-navigation/native";
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import HomePageConfig from "./HomePage";
import AgendaPageConfig from "./AgendaPage";
import MyQRPageConfig from "./MyQRPage";
import PatientsPageConfig from "./PatientsPage";
import ProfilePageConfig from "./ProfilePage";

export type AllScreensParamList = {
  HomePage: undefined;
  AgendaPage: undefined;
  MyQRPage: undefined;
  PatientsPage: undefined;
  ProfilePage: undefined;
};

export type AllScreensProps<ScreenName extends keyof AllScreensParamList> = {
  route: RouteProp<AllScreensParamList, ScreenName>;
  navigation: NavigationProp<AllScreensParamList>;
};

export type AllScreenConfig<ScreenName extends keyof AllScreensParamList> =
  RouteConfig<
    AllScreensParamList,
    ScreenName,
    StackNavigationState<ParamListBase>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap,
    NavigationProp<AllScreensParamList>
  >;

export const AllScreens: Array<AllScreenConfig<keyof AllScreensParamList>> = [
  HomePageConfig,
  AgendaPageConfig,
  MyQRPageConfig,
  PatientsPageConfig,
  ProfilePageConfig,
] as Array<AllScreenConfig<keyof AllScreensParamList>>;
