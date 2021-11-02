import React, { useState } from "react";
import { Text, View } from "react-native";
import IconButton from "./iconButton";
import {Feather} from '@expo/vector-icons';
import constantsVals from "../constants";

const QuantitySelector = ({max, initialValue=1, onChange})=>{
    const [number, setNumber] = useState(initialValue);

    const add = ()=>{
        const newNumber = number < max ? number + 1 : number;
        setNumber(newNumber);
        onChange(newNumber);
    }

    const deduct = ()=>{
        const newNumber = number > 1 ? number - 1 : number;
        setNumber(newNumber);
        onChange(newNumber);
    }

    return <View style={{backgroundColor: constantsVals.backgroundColor, borderRadius: 30, flexDirection: "row", alignItems: "center"}}>
        <IconButton onPress={deduct} size={15} name="minus" transparent={true} parent={Feather} />
        <Text style={{marginHorizontal: 10, fontFamily: constantsVals.fmedium}}>{number}</Text>
        <IconButton onPress={add} size={15} name="plus" parent={Feather} />
    </View>
}


export default QuantitySelector;