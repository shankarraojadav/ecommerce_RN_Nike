import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);

  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({product}))
  }

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 10,
    lineHeight: 30,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  }
});

export default ProductDetailsScreen;
