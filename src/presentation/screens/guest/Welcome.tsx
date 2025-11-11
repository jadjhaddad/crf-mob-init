import { ScrollView, Text } from "react-native";
import { GuestScreenProps } from ".";

const Welcome: React.FC<GuestScreenProps<"Welcome">> = () => {
  return (
    <ScrollView>
      <Text>Hello</Text>
    </ScrollView>
  );
};

export default Welcome;
