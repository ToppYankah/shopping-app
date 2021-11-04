import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Animated, ScrollView, Text, Image, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import homeStyles from '../styles/home';
import {Feather, Foundation} from '@expo/vector-icons';
import constantsVals from '../constants';
import IconButton from '../components/iconButton';
import RatingCard from '../components/ratingCard';
import { useProducts } from '../providers/products';

export default function HomeScreen({navigation}) {
    const categories = [
        "Most Popular", "Chairs", "Sofers", "Trenches", "Benches"
    ];

    const {data: products} = useProducts();

    const [category, setCategory] = useState(categories[0]);

  return (
    <View style={homeStyles.container}>
      <StatusBar style="auto" />
          <SafeAreaView edges={['top']} />
          {/* Immediate header */}
          <View style={homeStyles.header}>
            <IconButton onPress={()=>navigation.navigate("Login")} parent={Feather} name="menu" light={true} size={25} />
            <IconButton parent={Feather} name="user" light={true} size={25} />
          </View>

          {/* Welcome text content */}
          <View style={{paddingHorizontal: constantsVals.xpadding, paddingVertical: constantsVals.ypadding}}>
              <Text style={homeStyles.headerText}>Discover</Text>
              <Text style={homeStyles.headerText}>our new items</Text>
          </View>

          {/* Search Area */}
          <View style={homeStyles.searchBar}>
              <View style={homeStyles.searchBarInputBox}>
                <Feather name="search" size={20} />
                <TextInput placeholder="Search products" style={homeStyles.searchInput}></TextInput>
              </View>
              <View style={homeStyles.searchButton}>
                <Feather name="box" size={25} color={"#ffffff90"} />
              </View>
          </View>

          {/* Categories Area */}
          <View style={homeStyles.categoriesContainer}>
            <ScrollView style={homeStyles.categoriesList} horizontal={true} showsHorizontalScrollIndicator={false}>
                {categories.map((cat, key)=> <CategoryItem key={key} onSelect={()=> setCategory(()=> cat)} active={cat === category} label={cat} />)}
            </ScrollView>
          </View>

          <ScrollView style={{flex: 1}} horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{width: 30}}></View>
              {products.map((product, key)=> <ProductCard key={key} data={product} onPress={()=>navigation.navigate("SingleProduct", product)} />)}
              <View style={{width: 10}}></View>
          </ScrollView>

        <BottomNavigationBar onNavigate={screen=> navigation.navigate(screen)} index={1} />
    </View>
  );
}

const ProductCard = ({data, onPress})=>{
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const scaleDown = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 200,
          useNativeDriver: true,
        }).start();
      };

    const scaleUp= () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
    };

    return <TouchableWithoutFeedback onPress={onPress} onPressIn={scaleDown} onPressOut={scaleUp}>
        <Animated.View style={{transform: [{scale: scaleAnim}] ,...homeStyles.productCardWrapper}}>
        <View style={homeStyles.productCard}>
        <View style={homeStyles.productImageBox}>
            <View style={homeStyles.rating}>
                <Foundation style={{marginRight: 5}} name="star" color="orange" size={16} />
                <Text style={{color: "orange", fontFamily: constantsVals.fmedium}}>5.0</Text>
            </View>
            <RatingCard />
        </View>
        <View style={homeStyles.productDescription}>
            <View>
                <Text style={{fontFamily: constantsVals.fmedium, marginBottom: 8, textTransform: "capitalize"}}>{data.name}</Text>
                <Text style={{fontFamily: constantsVals.fregular, color: "#777", textTransform: "capitalize"}}>{data.category}</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <Text style={{fontWeight: "bold", fontSize: 17}}>&cent; {data.price.toFixed(2)}</Text>
                <View style={{flexDirection: "row"}}>
                    <IconButton color="orange" parent={Foundation} transparent={true} name="heart" />
                    <View style={{width: 10}}></View>
                    <IconButton parent={Foundation} name="plus" />
                </View>
            </View>
        </View>
    </View>
    <Image source={data.images.main} style={homeStyles.productImage} />
    </Animated.View>
    </TouchableWithoutFeedback>
}

const CategoryItem = ({active, label, onSelect})=>{
    return <TouchableWithoutFeedback onPress={onSelect}>
        <View style={{...homeStyles.categoriesListItem}}>
        {active && <View style={homeStyles.categoriesListItemIndicator}></View>}
        <Text style={{...homeStyles.categoriesListItemLable,  ...(active ? homeStyles.categoriesListItemActiveLabel : {})}}>{label}</Text>
    </View>
    </TouchableWithoutFeedback>;
}

const BottomNavigationBar = ({index, onNavigate})=>{
    return <View style={homeStyles.bottomNavigationContainer}>
        <View style={homeStyles.bottomNavigationBar}>
            <TouchableWithoutFeedback>
                <View style={homeStyles.bottomNavigationBarItem}>
                    <Feather name="home" size={25} color={index === 1 ? constantsVals.primaryColor : "#fff"} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={homeStyles.bottomNavigationBarItem}>
                    <Feather name="star" size={25} color={index === 2 ? constantsVals.primaryColor : "#fff"} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={homeStyles.bottomNavigationBarItem}>
                    <Feather name="user" size={25} color={index === 3 ? constantsVals.primaryColor : "#fff"} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=> onNavigate("Cart")}>
                <View style={homeStyles.bottomNavigationBarItem}>
                    <Feather name="shopping-bag" size={25} color={index === 4 ? constantsVals.primaryColor : "#fff"} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    </View>
}