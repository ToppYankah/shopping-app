import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';
import SingleProductScreen from './src/screens/singleProduct';
import CartScreen from './src/screens/cart';
import { ProductsProvider } from './src/providers/products';
import { OrderProvider } from './src/providers/order';
import { CartProvider } from './src/providers/cart';
import CheckoutScreen from './src/screens/checkout';
import LoginScreen from './src/screens/login';
import { AuthProvider } from './src/providers/auth';
import SignupScreen from './src/screens/signup';
import OnboardingScreen from './src/screens/onBoarding';

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
      <AuthProvider>
        <ProductsProvider>
          <OrderProvider>
            <CartProvider>
              <NavigationContainer >
                <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Onboarding">
                  <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Signup" component={SignupScreen} />
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
                  <Stack.Screen name="Cart" component={CartScreen} />
                  <Stack.Screen name="Checkout" component={CheckoutScreen} />
                </Stack.Navigator>
              </NavigationContainer>
            </CartProvider>
          </OrderProvider>
        </ProductsProvider>
      </AuthProvider>
    );
  }
}
