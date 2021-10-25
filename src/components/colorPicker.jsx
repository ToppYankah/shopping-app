import React from "react";
import { Text, View, StyleSheet } from "react-native";
import constantsVals from "../constants";

const ColorPicker = ({color})=>{
    const colors = ["green", "orange"];
    return <View style={{flexDirection: "row", alignItems: "center"}}>
        <Text style={{marginRight: 10, fontFamily: constantsVals.fmedium, color: "#777"}}>Colors</Text>
        {colors.map(item=>{
            return <View style={{borderColor: item === color ? constantsVals.black : "transparent", ...styles.colorWrapper}}>
                <View style={{width: "100%", height: "100%", borderRadius: 100, backgroundColor: item}}></View>
            </View>
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