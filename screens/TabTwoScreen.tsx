import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";



import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Searchbar } from "react-native-paper";

export default function TabTwoScreen() {
  const [data, setdata] = useState(["contrato 1", "contrato 2", "contrato 3"]);
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const emptyListView = () => {
    return (
      <View style={styles.emptyListView}>
        <Text
          // size={16}
          // color="grey"
          style={styles.emptyListViewText}
        >
          No hay Datos para mostrar...
        </Text>
      </View>
    );
  };

  const renderSeparator = () => {
    return (
      <View style={styles.renderSeparatorBlock}>
        <View style={styles.renderSeparatorLine} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    {isVisible ? (
      <Searchbar
        placeholder="Busca en tus contratos ejecutados"
        //onChangeText={onChangeSearch}
        value={search}
      />
    ) : null}

    {loading ? (
      <ActivityIndicator animating={loading} color="grey" size="large" />
    ) : null}

    <View style={styles.container}>
      <FlatList
        data={data}
        //keyExtractor={(item) => item.id}
        ListEmptyComponent={emptyListView}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                //navigateItem(item);
              }}
            >
              <View style={styles.blockFlatList}>
                <Text
                  style={styles.itemFlatList}
                  //color={nowTheme.COLORS.PRIMARY}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  blockFlatList: {
    flexDirection: "row",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  itemFlatList: {
    fontFamily: "montserrat-bold",
    fontWeight: "900",
    fontSize: 22,
    lineHeight: 24,
  },
  renderSeparatorLine: {
    borderColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
  emptyListViewText: {
    fontFamily: "montserrat-bold",
    marginTop: 5,
    lineHeight: 16,
    fontSize: 16,
    opacity: 0.8,
  },
  emptyListView: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  renderSeparatorBlock: { marginVertical: 15, paddingHorizontal: 8 },
  blockInternalFlatList: { flex: 1, marginLeft: 20 },
  viewFlatList: { flex: 1, paddingTop: 20, paddingBottom: 80 },
});
