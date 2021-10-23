import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import homeStyles from '../styles/home';
import {Feather} from '@expo/vector-icons';
import constantsVals from '../constants';

export default function HomeScreen() {
    const categories = [
        "Most Popular", "Chairs", "Sofers", "Trenches", "Benches"
    ];

    const [category, setCategory] = useState(categories[0]);

  return (
    <View style={homeStyles.container}>
      <StatusBar style="auto" />
          <SafeAreaView edges={['top']} />
          {/* Immediate header */}
          <View style={homeStyles.header}>
            <Feather size={30} name="chrome" />
            <Feather size={30} name="user-x" />
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

          <View style={{flex: 1}}>
            <ProductsView />
          </View>

        <BottomNavigationBar index={1} />
    </View>
  );
}

const ProductsView = ()=>{
    return <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    </ScrollView>
}

const CategoryItem = ({active, label, onSelect})=>{
    return <TouchableWithoutFeedback onPress={onSelect}>
        <View style={{...homeStyles.categoriesListItem}}>
        {active && <View style={homeStyles.categoriesListItemIndicator}></View>}
        <Text style={{...homeStyles.categoriesListItemLable,  ...(active ? homeStyles.categoriesListItemActiveLabel : {})}}>{label}</Text>
    </View>
    </TouchableWithoutFeedback>;
}

const BottomNavigationBar = ({index})=>{
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
            <TouchableWithoutFeedback>
                <View style={homeStyles.bottomNavigationBarItem}>
                    <Feather name="shopping-bag" size={25} color={index === 4 ? constantsVals.primaryColor : "#fff"} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    </View>
}