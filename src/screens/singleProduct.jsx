import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../components/iconButton";
import { styles } from "../styles/singleProduct";
import {Feather} from '@expo/vector-icons';
import RatingCard from "../components/ratingCard";
import constantsVals from "../constants";
import AppButton from "../components/appButton";
import QuantitySelector from "../components/quantityPicker";
import ColorPicker from "../components/colorPicker";
import { useCart } from "../providers/cart";

export default function SingleProductScreen({route, navigation}){
    const product = route.params;
    const {addItem} = useCart();
    const [selectedColor, setSelectedColor] = useState(Object.keys(product.images)[1]);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = ()=>{
        addItem({
            product: {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[selectedColor],
            },
            quantity,
        });

        navigation.navigate("Cart");
    }

    return (
        <View style={styles.screenWrapper}>
            <SafeAreaView edges={['top']}/>
            {/* Product image */}
            <View style={styles.productImageArea}>
                <Image source={product.images[selectedColor] || product.images.main} style={{width: "80%", height: "90%", resizeMode: "contain"}} />
            </View>

            {/* Product details area */}
            <View style={styles.detailsWrapper}>
                <View style={styles.details}>
                    <ScrollView>
                        {/* Category & Price section */}
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={{fontFamily: constantsVals.fmedium, color: "#999"}}>{product.category}</Text>
                            <Text style={{fontFamily: constantsVals.fbold, fontSize: 18}}>&cent; {product.price.toFixed(2)}</Text>
                        </View>

                        {/* Product Name */}
                        <Text style={styles.productName}>{product.name}</Text>

                        {/* Product description */}
                        <Text style={styles.description}>{product.description}</Text>

                        {/* Product Quantity & Color */}
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
                            <ColorPicker onChange={(color)=> setSelectedColor(color)} color={selectedColor} colors={Object.keys(product.images).filter(i=> i !== "main")} />
                            <QuantitySelector onChange={(qty)=> setQuantity(()=> qty)} max={product.stock} />
                        </View>
                    </ScrollView>

                    {/* Favorite & Add to cart section */}
                    <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                        <IconButton name="heart" size={25} transparent={true} parent={Feather} />
                        <View style={{marginRight: 20}}/>
                        <AppButton
                            onPress={handleAddToCart}
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