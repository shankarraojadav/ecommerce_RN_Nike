import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import cart from "../data/cart";
import CartListItem from "../component/CartListItem";
import { UseSelector, useSelector } from "react-redux";
import { selectDeliveryPrice, selectSubtotal, selectTotal } from "../store/cartSlice";

const ShoppingCartTotals = () => {
  
  const subtotal = useSelector(selectSubtotal);
  const total = useSelector(selectTotal)

  const deliveryFee = useSelector(selectDeliveryPrice)
  return (
    <View style={styles.totalsContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>{subtotal}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>${deliveryFee}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>${total}</Text>
    </View>
  </View>
  )
  }

const ShoppingCart = () => {

  const cartItems = useSelector(state => state.cart.items)

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },

  button: {
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ShoppingCart;
