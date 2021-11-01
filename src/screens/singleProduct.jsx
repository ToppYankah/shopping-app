import React from "react";
import { View, Text, Image, TouchableNativeFeedback, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../components/iconButton";
import { styles } from "../styles/singleProduct";
import {Feather} from '@expo/vector-icons';
import RatingCard from "../components/ratingCard";
import image from "../../assets/chair2.png";
import constantsVals from "../constants";
import AppButton from "../components/appButton";
import QuantitySelector from "../components/quantityPicker";
import ColorPicker from "../components/colorPicker";

export default function SingleProductScreen({navigation}){
    return (
        <View style={styles.screenWrapper}>
            <SafeAreaView edges={['top']}/>
            {/* Product image */}
            <View style={styles.productImageArea}>
                <Image source={image} style={{width: "80%", height: "90%", resizeMode: "contain"}} />
            </View>

            {/* Product details area */}
            <View style={styles.detailsWrapper}>
                <View style={styles.details}>
                    <ScrollView>
                        {/* Category & Price section */}
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={{fontFamily: constantsVals.fmedium, color: "#999"}}>Chairs</Text>
                            <Text style={{fontFamily: constantsVals.fbold, fontSize: 18}}>&cent;20.50</Text>
                        </View>

                        {/* Product Name */}
                        <Text style={styles.productName}>Minimalist style with pillow</Text>

                        {/* Product description */}
                        <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores deserunt fugiat corrupti, accusantium qui quod alias illum natus.</Text>

                        {/* Product Quantity & Color */}
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
                            <ColorPicker color="orange" />
                            <QuantitySelector />
                        </View>
                    </ScrollView>

                    {/* Favorite & Add to cart section */}
                    <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                        <IconButton name="heart" size={25} transparent={true} parent={Feather} />
                        <View style={{marginRight: 20}}/>
                        <AppButton
                        onPress={()=>navigation.navigate("Cart")}
                        stretch={true} 
                        text="Add to cart" 
                        tail={ <IconButton backgroundColor="#fff2" color="white" size={20} parent={Feather} name="shopping-cart" />
                            } 
                        />
                    </View>
                </View>
            </View>

            {/* Floating header */}
            <View style={styles.header}>
                <IconButton onPress={navigation.goBack} parent={Feather} name="chevron-left" light={true} size={25} />
                <RatingCard />
            </View>
        </View>
    )
}