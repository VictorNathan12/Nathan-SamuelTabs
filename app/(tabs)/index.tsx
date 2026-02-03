import dados from "@/assets/constants/mock";
import { Item } from "@/components/item";
import { FlatList, StyleSheet } from "react-native";
export default function TabTwoScreen() {
  return (
    <>
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
  title: {
    fontSize: 32,
    alignSelf: "center",
  },
  wraplist: {
    flex: 1,
  },
});
