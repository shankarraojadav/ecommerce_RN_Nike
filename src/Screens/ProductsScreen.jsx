import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productSlice";

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.img} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id.toString()} // Add a unique key extractor
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
