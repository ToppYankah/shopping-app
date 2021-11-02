import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import constantsVals from "../constants";

const ColorPicker = ({color, colors = ["green", "orange"], onChange})=>{
    return <View style={{flexDirection: "row", alignItems: "center"}}>
        <Text style={{marginRight: 10, fontFamily: constantsVals.fmedium, color: "#777"}}>Colors</Text>
        {colors.map((item, key)=>{
            return <TouchableWithoutFeedback key={key} onPress={()=> onChange(item)}>
                <View style={{borderColor: item === color ? constantsVals.black : "transparent", ...styles.colorWrapper}}>
                    <View style={{width: "100%", height: "100%", borderRadius: 100, backgroundColor: item}} />
                </View>
            </TouchableWithoutFeedback>
        })}
    </View>
}

const styles = StyleSheet.create({
    colorWrapper: {
        width: 30,
        height: 30,
        padding: 3,
        borderRadius: 30,
        marginRight: 5,
        borderWidth: 2,
    },
});

export default ColorPicker;