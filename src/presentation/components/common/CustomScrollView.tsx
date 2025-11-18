import {
  ScrollView,
  ScrollViewProps,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CustomScrollViewProps extends ScrollViewProps {}

const CustomScrollView: React.FC<CustomScrollViewProps> = ({
  children,
  ...props
}) => {
  const { top, bottom } = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="px-4"
      style={{
        paddingTop: top,
        paddingBottom: bottom,
      }}
      {...props}
    >
      {children}
      <View style={{ height: 0.156 * height }} />
    </ScrollView>
  );
};

export default CustomScrollView;
