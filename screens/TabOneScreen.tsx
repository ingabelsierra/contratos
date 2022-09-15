import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { Searchbar } from "react-native-paper";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { Card, Title, Paragraph } from "react-native-paper";

import dataJson from "../constants/data.json";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [data, setdata] = useState(dataJson);
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
          placeholder="Busca en tus contratos vigentes"
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
          // keyExtractor={(item) => item.id}
          //keyExtractor={item => item.id}
          ListEmptyComponent={emptyListView}
          //ItemSeparatorComponent={renderSeparator}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  //navigateItem(item);
                }}
              >
                <Card>
                  <Card.Content>
                    <Paragraph>   <Text
                style={styles.textItem}
                //color={nowTheme.COLORS.PRIMARY}
              >
               {item.objeto}
              </Text>

</Paragraph>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  textItem: {
    fontFamily: "montserrat-regular",
    marginTop: 5,
    textTransform: "lowercase",
    fontWeight: "900",
    fontSize: 18,
  },
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
