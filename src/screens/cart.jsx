import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import IconButton from '../components/iconButton';
import { styles } from '../styles/cart';
import {Feather} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import constantsVals from '../constants';
import AppButton from '../components/appButton';
import image from "../../assets/chair2.png";
import QuantitySelector from '../components/quantityPicker';

const CartScreen = ({navigation}) => {
    return (
        <View style={styles.screenWrapper}>
            <SafeAreaView edges={['top']} />
            {/* Header */}
            <View style={styles.header}>
                <IconButton onPress={navigation.goBack} parent={Feather} name="chevron-left" light={true} size={25} />
                <Text style={{fontSize: 20, fontFamily: constantsVals.fbold}}>Your Cart</Text>
                <IconButton parent={Feather} name="trash" size={18} light={true} color={"red"}  />
            </View>

            {/* Cart items list */}
            <ScrollView style={styles.itemsView}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </ScrollView>

            {/* Total amount box */}
            <View style={{paddingHorizontal: constantsVals.xpadding, paddingBottom: constantsVals.ypadding}}>
                <View style={styles.subTotalContainer}>
                <View style={{flexDirection: "row", justifyContent: "center", marginBottom: 5}}>
                    <View style={{width: 60, paddingVertical: 2, backgroundColor: "#ddd", borderRadius: 10}} />
                </View>
                <View style={styles.tallyBox}>
                        <Text style={styles.tallyLabel}>Total</Text>
                        <Text style={styles.tallyTotal}>&cent; 10.00</Text>
                    </View>
                    <View style={{paddingTop: 0, ...styles.tallyBox}}>
                        <Text style={styles.tallyLabel}>Delivery Charge</Text>
                        <Text style={styles.tallyTotal}>&cent; 12.00</Text>
                    </View>
                    <View style={{borderWidth: 1, borderStyle: "dashed", borderRadius: 1, borderColor: "#ddd",  marginVertical: 10}} />
                    <View style={styles.tallyBox}>
                        <Text style={{...styles.tallyLabel, color: "black"}}>Total</Text>
                        <Text style={styles.tallyTotal}>&cent; 50.00</Text>
                    </View>
                    <AppButton style={{marginTop: 10}} bold={true} text="Checkout" />
                </View>
            </View>
        </View>
    );
}

const CartItem = () => {
    return (
        <View style={styles.cartItemBox}>
            <View style={styles.checkBox}><View style={styles.checkIndicator}/></View>
            <View style={styles.cartItemImageBox}>
                <Image source={image} style={{width: 90, height: 90, resizeMode: "contain"}} />
            </View>
            <View>
                <Text style={{fontFamily: constantsVals.fmedium, marginBottom: 10, fontSize: 17}}>Yellow Chair</Text>
                <Text style={{fontFamily: constantsVals.fbold, marginBottom: 10, fontSize: 16}}>&cent; 25.00</Text>
                <QuantitySelector />
            </View>
        </View>
    );
}


export default CartScreen;
