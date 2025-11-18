import {
  getFocusedRouteNameFromRoute,
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { AllScreensParamList } from "../all";
import HomeTab from "./HomeTab";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { ReactNode, useMemo, useState } from "react";
import AgendaTab from "./AgendaTab";
import MyQRTab from "./MyQRTab";
import PatientsTab from "./PatientsTab";
import ProfileTab from "./ProfileTab";
import HomeIcon from "@/resources/icons/HomeIcon";
import CalendarIcon from "@/resources/icons/CalendarIcon";
import QRIcon from "@/resources/icons/QRIcon";
import PatientsIcon from "@/resources/icons/PatientsIcon";
import ProfileIcon from "@/resources/icons/ProfileIcon";
import CustomText from "@/src/presentation/components/common/CustomText";
import colors from "@/resources/colors/tailwindExport";

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

interface IconContainerProps extends TouchableOpacityProps {
  label: string;
  icon: (color: string, size: number) => ReactNode;
  isFocused?: boolean;
}

const IconContainer: React.FC<IconContainerProps> = ({
  icon,
  label,
  style,
  isFocused = false,
  ...props
}) => {
  const flattenedStyle = useMemo(() => StyleSheet.flatten(style), [style]);
  const [containerHeight, setContainerHeight] = useState(2);

  return (
    <TouchableOpacity
      {...props}
      className={isFocused ? "bg-primary/10" : "bg-transparent"}
      style={{
        flex: 1,
        borderRadius: containerHeight * 0.156,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "12%",
        marginHorizontal: "0.2%",
        ...flattenedStyle,
      }}
      onLayout={(t) => setContainerHeight(t.nativeEvent.layout.height)}
    >
      {icon?.(
        isFocused ? colors.primary : colors.placeholder,
        containerHeight * 0.395,
      )}
      <CustomText
        style={{
          marginTop: containerHeight * 0.107,
          fontSize: containerHeight * 0.166,
        }}
        className={`${isFocused ? "text-primary" : "text-placeholder"}`}
      >
        {label}
      </CustomText>
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
          position: "absolute",
          bottom: 40,
          display: shouldHideTab(route) ? "none" : undefined,
          shadowColor: colors.shadowColor,
          height: "8.3%",
          width: "95.7%",
          marginLeft: "2.15%",
          elevation: 4,
          alignSelf: "center",
          borderRadius: 8,
          paddingBottom: 0,
          paddingHorizontal: "2.22%",
          borderTopWidth: 0,
        },
      })}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTab}
        options={({ navigation }) => ({
          tabBarButton: (props) => {
            const isFocused = navigation.isFocused();
            return (
              <IconContainer
                onPress={props.onPress}
                icon={(color, size) => <HomeIcon size={size} color={color} />}
                label="HOME"
                isFocused={isFocused}
              />
            );
          },
        })}
      />
      <BottomTab.Screen
        name="AgendaTab"
        component={AgendaTab}
        options={({ navigation }) => ({
          tabBarButton: (props) => {
            const isFocused = navigation.isFocused();
            return (
              <IconContainer
                onPress={props.onPress}
                icon={(color, size) => (
                  <CalendarIcon size={size} color={color} />
                )}
                label="AGENDA"
                isFocused={isFocused}
              />
            );
          },
        })}
      />
      <BottomTab.Screen
        name="MyQRTab"
        component={MyQRTab}
        options={({ navigation }) => ({
          tabBarButton: (props) => {
            const isFocused = navigation.isFocused();
            return (
              <IconContainer
                onPress={props.onPress}
                icon={(color, size) => <QRIcon size={size} color={color} />}
                label="MY QR CODE"
                isFocused={isFocused}
              />
            );
          },
        })}
      />
      <BottomTab.Screen
        name="PatientsTab"
        component={PatientsTab}
        options={({ navigation }) => ({
          tabBarButton: (props) => {
            const isFocused = navigation.isFocused();
            return (
              <IconContainer
                onPress={props.onPress}
                icon={(color, size) => (
                  <PatientsIcon size={size} color={color} />
                )}
                label="PATIENTS"
                isFocused={isFocused}
              />
            );
          },
        })}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={({ navigation }) => ({
          tabBarButton: (props) => {
            const isFocused = navigation.isFocused();
            return (
              <IconContainer
                onPress={props.onPress}
                icon={(color, size) => (
                  <ProfileIcon size={size} color={color} />
                )}
                label="PROFILE"
                isFocused={isFocused}
              />
            );
          },
        })}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
