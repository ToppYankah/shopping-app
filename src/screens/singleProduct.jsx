import React from "react";
import { View, Text, Image, TouchableNativeFeedback, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../components/iconButton";
import { styles } from "../styles/singleProduct";
import {Feather} from '@expo/vector-icons';
import RatingCard from "../components/ratingCard";
import image from "../../assets/chair1.png";
import constantsVals from "../constants";

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
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={{fontFamily: constantsVals.fmedium, color: "#999"}}>Chairs</Text>
                            <Text style={{fontFamily: constantsVals.fbold, fontSize: 18}}>&cent;20.50</Text>
                        </View>
                        <Text style={styles.productName}>Minimalist style with pillow</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores deserunt fugiat corrupti, accusantium qui quod alias illum natus.</Text>
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
                            <ColorPicker color="orange" />
                            <QuantitySelector />
                        </View>
                    </ScrollView>
                    <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                        <IconButton name="heart" size={25} transparent={true} parent={Feather} />
                        <View style={{marginRight: 20}}/>
                        <AppButton 
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

const ColorPicker = ({color})=>{
    const colors = ["green", "orange"];
    return <View style={{flexDirection: "row", alignItems: "center"}}>
        <Text style={{marginRight: 10, fontFamily: constantsVals.fmedium, color: "#777"}}>Colors</Text>
        {colors.map(item=>{
            return <View style={{borderColor: item === color ? constantsVals.black : "transparent", ...styles.colorWrapper}}>
                <View style={{width: "100%", height: "100%", borderRadius: "100%", backgroundColor: item}}></View>
            </View>
        })}
    </View>
}

const QuantitySelector = ()=>{
    return <View style={{backgroundColor: constantsVals.backgroundColor, borderRadius: 30, flexDirection: "row", alignItems: "center"}}>
        <IconButton size={15} name="minus" transparent={true} parent={Feather} />
        <Text style={{marginHorizontal: 10, fontFamily: constantsVals.fmedium}}>5</Text>
        <IconButton size={15} name="plus" parent={Feather} />
    </View>
}

const AppButton = ({stretch=false, text="Button", tail: Tail=<View />})=>{
    return <TouchableNativeFeedback>
        <View style={{flex: stretch ? 1 : 0, flexDirection: "row", backgroundColor: constantsVals.black, borderRadius: 20, padding: 10, alignItems: "center", justifyContent: "center"}}>
            <Text style={{color: "white", fontFamily: constantsVals.fmedium}}>{text}</Text>
            <View style={{marginRight: 10}} />
            {Tail}
        </View>
    </TouchableNativeFeedback>
}