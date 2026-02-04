import dados from "@/assets/constants/mock3";
import { Item } from "@/components/item";
import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function TabTwoScreen() {
  const voltar = () => {
    router.push("/");
  };

  return (
    <>
      <View>
        <TouchableOpacity onPress={voltar}>
          <Text style={s.backBtn}>🔁</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <Item
            name={item.nome}
            description={item.descrição}
            image={item.imagem}
          />
        )}
      ></FlatList>
    </>
  );
}

const s = StyleSheet.create({
  wrapList: {
    flex: 1,
  },
  backBtn: {
    fontSize: 40,
  },
});
