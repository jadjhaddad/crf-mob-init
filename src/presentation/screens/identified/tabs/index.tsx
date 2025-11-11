import {
  getFocusedRouteNameFromRoute,
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllScreensParamList } from "../all";
import HomeTab from "./HomeTab";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { useMemo } from "react";
import AgendaTab from "./AgendaTab";
import MyQRTab from "./MyQRTab";
import PatientsTab from "./PatientsTab";
import ProfileTab from "./ProfileTab";
// TODO: Add icon library - @untitledui/icons not compatible with React Native

export type BottomTabParamList = {
  HomeTab: NavigatorScreenParams<AllScreensParamList>;
  AgendaTab: NavigatorScreenParams<AllScreensParamList>;
  MyQRTab: NavigatorScreenParams<AllScreensParamList>;
  PatientsTab: NavigatorScreenParams<AllScreensParamList>;
  ProfileTab: NavigatorScreenParams<AllScreensParamList>;
};

const PagesWithHiddenTabBar: Array<keyof AllScreensParamList> = [];
const shouldHideTab = (
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>,
) => {
  return PagesWithHiddenTabBar.some(
    (name) => name === getFocusedRouteNameFromRoute(route),
  );
};

export type BottomTabProp<ScreenName extends keyof BottomTabParamList> = {
  route: RouteProp<BottomTabParamList, ScreenName>;
  navigation: NavigationProp<BottomTabParamList>;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const IconContainer: React.FC<TouchableOpacityProps> = ({
  style,
  children,
  ...props
}) => {
  const flattenedStyle = useMemo(() => StyleSheet.flatten(style), [style]);
  return (
    <TouchableOpacity
      {...props}
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        ...flattenedStyle,
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        headerShadowVisible: false,
        tabBarStyle: {
          display: shouldHideTab(route) ? "none" : undefined,
          elevation: 2,
          position: "absolute",
          bottom: 40,
          width: "95%",
          alignSelf: "center",
          marginLeft: "2.5%",
          borderRadius: 8,
          paddingBottom: 0,
        },
      })}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarButton: (props) => (
            <IconContainer onPress={props.onPress}>
              <View
                style={{
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  backgroundColor: "green",
                }}
              />
            </IconContainer>
          ),
        }}
      />
      <BottomTab.Screen
        name="AgendaTab"
        component={AgendaTab}
        options={{
          tabBarButton: (props) => (
            <IconContainer onPress={props.onPress}>
              <View
                style={{
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  backgroundColor: "red",
                }}
              />
            </IconContainer>
          ),
        }}
      />
      <BottomTab.Screen
        name="MyQRTab"
        component={MyQRTab}
        options={{
          tabBarButton: (props) => (
            <IconContainer onPress={props.onPress}>
              <View
                style={{
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  backgroundColor: "red",
                }}
              />
            </IconContainer>
          ),
        }}
      />
      <BottomTab.Screen
        name="PatientsTab"
        component={PatientsTab}
        options={{
          tabBarButton: (props) => (
            <IconContainer onPress={props.onPress}>
              <View
                style={{
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  backgroundColor: "red",
                }}
              />
            </IconContainer>
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          tabBarButton: (props) => (
            <IconContainer onPress={props.onPress}>
              <View
                style={{
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  backgroundColor: "red",
                }}
              />
            </IconContainer>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
