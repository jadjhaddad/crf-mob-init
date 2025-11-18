import SunIcon from "@/resources/icons/SunIcon";
import MoonIcon from "@/resources/icons/MoonIcon";
import { useMemo, useState } from "react";
import { TouchableOpacity, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import CustomText from "../common/CustomText";
import BellIcon from "@/resources/icons/BellIcon";

const HomeHeader: React.FC<{}> = () => {
  const { width } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const [isDaytime, setIsDaytime] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const currentHour = new Date().getHours();
      setIsDaytime(currentHour < 18); // Before 6pm (18:00)
    }, []),
  );

  const iconSize = useMemo(() => {
    return 20 * (width / 375);
  }, [width]);

  const fontSize = useMemo(() => {
    return 22 * (width / 375);
  }, [width]);

  const subFontSize = useMemo(() => {
    return 13 * (width / 375);
  }, [width]);

  const gap = useMemo(() => {
    return 8 * (width / 375);
  }, [width]);

  const Icon = isDaytime ? (
    <SunIcon size={iconSize} style={{ marginRight: gap }} className="mb-1.5" />
  ) : (
    <MoonIcon
      size={iconSize - 3}
      style={{ marginRight: gap }}
      className="mb-1.5"
    />
  );

  return (
    <View
      style={{ marginTop: top }}
      className="flex-row flex-initial items-end mx-4"
    >
      {Icon}
      <View className="flex-1">
        <CustomText
          style={{ fontSize: subFontSize }}
          className="text-placeholder leading-4"
        >
          Welcome Back,
        </CustomText>
        <CustomText
          style={{ fontSize: fontSize }}
          className="text-xl font-medium leading-8"
        >
          Dr. Sam Sweeney
        </CustomText>
      </View>
      <TouchableOpacity className="p-1 rounded-full">
        <BellIcon size={iconSize + 1} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
