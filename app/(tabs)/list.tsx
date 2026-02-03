import { StyleSheet, Text } from "react-native";
export default function TabTwoScreen() {
  return (
    <>
      <Text style={s.title}>Sensores 3</Text>
    </>
  );
}
const s = StyleSheet.create({
  title: {
    fontSize: 32,
    alignSelf: "center",
  },
});
