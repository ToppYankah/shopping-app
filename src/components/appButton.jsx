import React from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
import constantsVals from "../constants";

const AppButton = ({stretch=false, text="Button", bold=false, tail: Tail, onPress, style})=>{
    const hasTail = Tail != null;
    return <TouchableNativeFeedback onPress={onPress}>
        <View style={{flex: stretch ? 1 : 0, flexDirection: "row", backgroundColor: constantsVals.black, borderRadius: 20, padding: bold ? 20 : 10, paddingHorizontal: 20, alignItems: "center", justifyContent: "center", ...style}}>
            <Text style={{color: "white", fontFamily: constantsVals.fmedium, fontSize: bold ? 16 : 14}}>{text}</Text>
            {hasTail ? <View style={{marginRight: 20}} /> : <View />}
            {hasTail ? Tail : <View />}
        </View>
    </TouchableNativeFeedback>
}

export default AppButton;