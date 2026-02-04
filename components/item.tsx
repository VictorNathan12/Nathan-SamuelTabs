import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export const Item = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <View style={s.itemList}>
      <Image style={s.imageStyle} source={image} />
      <Text style={s.txt}>{name}</Text>
      <Text style={s.txt2}>{description}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  itemList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#ffffffa5",
    margin: 10,
    height: 80,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#00a6ffe5",
  },
  imageStyle: {
    width: 75,
    height: 75,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  txt: {
    color: "#1f1f1f",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "rgba(39, 39, 39, 0.51)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
  },
  txt2: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "regular",
  },
});
