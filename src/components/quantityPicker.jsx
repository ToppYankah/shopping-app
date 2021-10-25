import React from "react";
import { Text, View } from "react-native";
import IconButton from "./iconButton";
import {Feather} from '@expo/vector-icons';
import constantsVals from "../constants";

const QuantitySelector = ()=>{
    return <View style={{backgroundColor: constantsVals.backgroundColor, borderRadius: 30, flexDirection: "row", alignItems: "center"}}>
        <IconButton size={15} name="minus" transparent={true} parent={Feather} />
        <Text style={{marginHorizontal: 10, fontFamily: constantsVals.fmedium}}>5</Text>
        <IconButton size={15} name="plus" parent={Feather} />
    </View>
}


export default QuantitySelector;