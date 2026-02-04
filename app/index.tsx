import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const Tabs = () => {
    router.push("/(tabs)/list");
  };

  return (
    <>
      <View style={s.body1}>
        <Image
          style={s.Banner}
          source={require("@/assets/images/inicial.webp")}
        />
        <TouchableOpacity style={s.btn1} onPress={Tabs}>
          <Text style={s.btnText}>IR PARA SENSORES</Text>
        </TouchableOpacity>
        <Text style={s.Nome}>Samuel & Nathan</Text>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  wrapList: {
    flex: 1,
  },
  title: {
    color: "#090909",
  },
  body1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    gap: 10,
  },
  btn1: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: "#006effc8",
    width: "auto",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#090909",
    borderRadius: 999,
    marginTop: 10,
    paddingHorizontal: 30,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 22,
  },
  Banner: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    height: 300,
  },
  Nome: {
    fontSize: 22,
    fontFamily: "Arial",
  },
});
