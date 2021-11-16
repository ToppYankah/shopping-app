import React, {useRef, useState} from 'react';
import { Dimensions, Animated, Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import IconButton from '../components/iconButton';
import { styles } from '../styles/cart';
import {Feather} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import constantsVals from '../constants';
import AppButton from '../components/appButton';
import QuantitySelector from '../components/quantityPicker';
import { useCart } from '../providers/cart';
import { useProducts } from '../providers/products';
import { useMemo } from 'react';

const CartScreen = ({navigation}) => {
    const {data} = useCart();

    const totalPrice = useMemo(()=>{
        let output = 0;

        data.forEach(item=> {
            output += (item.product.price * item.quantity);
        });

        return output;
    }, [data])

    return (
        <View style={styles.screenWrapper}>
            <SafeAreaView edges={['top']} />
            {/* Header */}
            <View style={styles.header}>
                <IconButton onPress={navigation.goBack} parent={Feather} name="chevron-left" light={true} size={25} />
                <Text style={{fontSize: 20, fontFamily: constantsVals.fbold}}>Your Cart</Text>
                <TouchableWithoutFeedback>
                    <IconButton parent={Feather} name="user" size={18} light={true} />
                </TouchableWithoutFeedback>
            </View>

            {/* Cart items list */}
            <ScrollView style={styles.itemsView}>
                {data.map((item, key)=> <CartItem data={item} key={key} />)}
            </ScrollView>

            {/* Total amount box */}
            <View style={{paddingHorizontal: constantsVals.xpadding, paddingBottom: constantsVals.ypadding}}>
                <View style={styles.subTotalContainer}>
                <View style={{flexDirection: "row", justifyContent: "center", marginBottom: 5}}>
                    <View style={{width: 60, paddingVertical: 2, backgroundColor: "#ddd", borderRadius: 10}} />
                </View>
                <View style={styles.tallyBox}>
                        <Text style={styles.tallyLabel}>Total</Text>
                        <Text style={styles.tallyTotal}>&cent; {totalPrice.toFixed(2)}</Text>
                    </View>
                    <View style={{paddingTop: 0, ...styles.tallyBox}}>
                        <Text style={styles.tallyLabel}>Delivery Charge</Text>
                        <Text style={styles.tallyTotal}>&cent; 5.00</Text>
                    </View>
                    <View style={{borderWidth: 1, borderStyle: "dashed", borderRadius: 1, borderColor: "#ddd",  marginVertical: 10}} />
                    <View style={styles.tallyBox}>
                        <Text style={{...styles.tallyLabel, color: "black"}}>Total</Text>
                        <Text style={styles.tallyTotal}>&cent; {(totalPrice + 5).toFixed(2)}</Text>
                    </View>
                    <AppButton onPress={()=>navigation.navigate("Checkout")} style={{marginTop: 10}} bold={true} text="Checkout" />
                </View>
            </View>
        </View>
    );
}

const CartItem = ({data}) => {
    const {getProduct} = useProducts();
    const {updateItem, removeItem} = useCart();
    const [selected, setSelected] = useState(false);

    const shiftAnim = useRef(new Animated.Value(0)).current;

    const shiftLeft = () => {
        setSelected(!selected);
        // Will change fadeAnim value to 1 in 5 seconds
        if(selected) {
            shiftBack()
        }else{
            Animated.timing(shiftAnim, {
              toValue: -50,
              duration: 100,
              useNativeDriver: true,
            }).start();
        }
      };

    const shiftBack= () => {
        setSelected(false);
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(shiftAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start();
    };

    const handleRemoveItem = ()=>{
        removeItem(data.id);
        shiftBack();
    }

    return (
        <TouchableWithoutFeedback onPress={shiftBack} onLongPress={shiftLeft}>
            <View style={{backgroundColor: "#000000"+(selected ? "10" : "00"), ...styles.cardItemWrapper}}>
                <Animated.View style={{...styles.cartItemBox, transform: [{translateX: shiftAnim}]}}>
                    <TouchableWithoutFeedback onPress={()=> updateItem(data.id, {select: !data.select})}>
                        <View style={styles.checkBox}>
                            {data.select ? <View style={styles.checkIndicator}/> : <View />}
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.cartItemImageBox}>
                        <Image source={data.product.image} style={{width: 90, height: 90, resizeMode: "contain"}} />
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{fontFamily: constantsVals.fmedium, marginBottom: 10, fontSize: 17}}>{data.product.name}</Text>
                        <Text style={{fontFamily: constantsVals.fbold, marginBottom: 10, fontSize: 16}}>&cent; {(data.product.price * data.quantity).toFixed(2)}</Text>
                        <View style={{alignItems: 'flex-start'}}>
                            <QuantitySelector max={getProduct(data.product.id).stock} initialValue={data.quantity} onChange={(quantity)=> updateItem(data.id, {quantity})} />
                        </View>
                    </View>
                </Animated.View>
                <Animated.View style={{transform: [{translateX: shiftAnim}]}}>
                    <IconButton onPress={handleRemoveItem} parent={Feather} name="trash" size={18} light={true} color={"red"} />
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default CartScreen;
