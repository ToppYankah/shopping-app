import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconButton from '../components/iconButton';
import constantsVals from '../constants';
import { styles } from '../styles/checkout';
import {Feather, Fontisto } from '@expo/vector-icons';
import AppButton from '../components/appButton';
import Checkbox from '../components/checkbox';
import paypal from '../../assets/paypal.png';
import mastercard from '../../assets/mastercard.png';
import visa from '../../assets/visa.png';
import { useCart } from '../providers/cart';


const CheckoutScreen = ({navigation}) => {
    const paymentMethods = [
        {name: "Paypal", source: paypal},
        {name: "Master Card", source: mastercard},
        {name: "Visa", source: visa},
    ];

    const {getCheckoutItems} = useCart();
    const [items, _] = useState(()=> getCheckoutItems());

    const [method, setMethod] = useState(paymentMethods[0].name);

    return (
        <View style={styles.screenWrapper}>
            <SafeAreaView edges={["top"]} />

            {/* Header */}
            <View style={styles.header}>
                <IconButton onPress={navigation.goBack} parent={Feather} name="chevron-left" light={true} size={25} />
                <Text style={{fontSize: 20, fontFamily: constantsVals.fbold}}>Checkout</Text>
                <IconButton parent={Feather} light={true} name="user" size={18} />
            </View>

            <View style={{flex: 1, paddingHorizontal: constantsVals.xpadding}}>
                <ScrollView showsVerticalScrollIndicator={false} overScrollMode={"never"}>
                        {/* Selected Items for checkout */}
                        <View style={styles.sectionBox}>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 15, fontFamily: constantsVals.fmedium, marginBottom: 10}}>Selected Items</Text>
                                <ScrollView horizontal={true} style={{marginTop: 10}} showsHorizontalScrollIndicator={false}>
                                    {items.map((item, key)=> <View key={key}>
                                            <Image source={item.product.image} style={{width: 70, height: 70, resizeMode: "contain", marginRight: 10}} />
                                            {item.quantity > 1 && <View style={{backgroundColor: "#fffa", borderWidth: 2, borderColor: "#eee", position: "absolute",paddingVertical: 3, paddingHorizontal: 10, borderRadius: 10}}>
                                                <Text style={{fontFamily: constantsVals.fmedium}}>{item.quantity}</Text>
                                            </View>}
                                        </View>)}
                                </ScrollView>
                            </View>
                        </View>

                        {/* Delivery method for checkout */}
                        <View style={styles.sectionBox}>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 15, fontFamily: constantsVals.fmedium, marginBottom: 10}}>Delivery Method</Text>
                                <Text style={{fontSize: 13, fontFamily: constantsVals.fmedium, color: "#999"}}>Standard delivery (+$2.65)</Text>
                            </View>
                            <IconButton parent={Feather} name="chevron-down" size={20} />
                        </View>


                        {/* Address for delivery */}
                        <View style={styles.sectionBox}>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 15, fontFamily: constantsVals.fmedium, marginBottom: 10}}>Address</Text>
                                <Text style={{fontSize: 13, fontFamily: constantsVals.fmedium, color: "#999"}}>Achimota, Accra Ghana</Text>
                                <Text style={{fontSize: 13, fontFamily: constantsVals.fmedium, color: "#999"}}>300 Post Street 12772</Text>
                            </View>
                            <IconButton parent={Feather} name="edit" light={true} color="#000" size={20} />
                        </View>


                        {/* Payment method for payment */}
                        <View style={{...styles.sectionBox, flexDirection: "column"}}>
                            <Text style={{fontSize: 15, fontFamily: constantsVals.fmedium, marginBottom: 10}}>Payment Method</Text>
                            <View>{paymentMethods.map((m, key)=> 
                                    <PaymentMethod key={key} selected={m.name === method} onSelect={()=> setMethod(m.name)} imageSource={m.source} name={m.name}/>
                                )}
                            </View>
                        </View>
                </ScrollView>
            </View>

            <View style={{paddingHorizontal: constantsVals.xpadding, paddingBottom: constantsVals.ypadding * 1.5}}>
                <AppButton text="Confirm" bold={true} />
            </View>
        </View>
    );
}

const PaymentMethod = ({name, icon, imageSource, size=28, selected, onSelect})=>{
    return <View style={{flexDirection: 'row', alignItems: "center", padding: 10}}>
        {icon && !imageSource && <Fontisto name={icon} size={size} style={{width: 70}} />}
        {imageSource && !icon && <Image source={imageSource} style={{width: 50, marginRight: 30, height: 40, resizeMode: "contain"}} />}
        <Text style={{fontSize: 14, fontFamily: constantsVals.fmedium, flex: 1}}>{name}</Text>
        <Checkbox selected={selected} onPress={onSelect} />
    </View>
}

export default CheckoutScreen;
