import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "./Screens/ProductsScreen";
import ProductDetailsScreen from "./Screens/ProductDetailsScreen";
import ShoppingCart from "./Screens/ShoppingCart";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

const Stack = createNativeStackNavigator();

const Navigation = () => {

    const numberOfItems = useSelector(selectNumberOfItems);
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "#fff" } }}>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>{numberOfItems}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
