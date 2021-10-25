import React from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
import constantsVals from "../constants";

const AppButton = ({stretch=false, text="Button", tail: Tail=<View />})=>{
    return <TouchableNativeFeedback>
        <View style={{flex: stretch ? 1 : 0, flexDirection: "row", backgroundColor: constantsVals.black, borderRadius: 20, padding: 10, paddingHorizontal: 20, alignItems: "center", justifyContent: "center"}}>
            <Text style={{color: "white", fontFamily: constantsVals.fmedium}}>{text}</Text>
            <View style={{marginRight: 20}} />
            {Tail}
        </View>
    </TouchableNativeFeedback>
}

export default AppButton;