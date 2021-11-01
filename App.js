import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import AppLoading from 'expo-app-loading';
// import { useFonts, SourceSansPro_400Regular, SourceSansPro_700Bold } from '@expo-google-fonts/source-sans-pro';
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';
import SingleProductScreen from './src/screens/singleProduct';
import CartScreen from './src/screens/cart';
import { ProductsProvider } from './src/providers/products';
import { OrderProvider } from './src/providers/order';
import { CartProvider } from './src/providers/cart';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_600SemiBold,
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ProductsProvider>
        <OrderProvider>
          <CartProvider>
            <NavigationContainer >
              <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </CartProvider>
        </OrderProvider>
      </ProductsProvider>
    );
  }
}
