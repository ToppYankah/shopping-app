import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import constantsVals from "../constants";

const IconButton = ({size = 15, parent: Parent, name, color, backgroundColor, light = false, transparent = false, onPress, ...style})=>{
    const radius = size + 20;
    const iconColor = color ? color : light || transparent ? constantsVals.black : "#fff";
    return <TouchableWithoutFeedback onPress={onPress}>
        <View style={{...style, width: radius, height: radius, borderRadius: radius, backgroundColor: backgroundColor ? backgroundColor : light ? "#fff" : transparent ? "#0001" : constantsVals.black, alignItems: "center", justifyContent: "center"}}>
            <Parent size={size} name={name} color={iconColor} />
        </View>
    </TouchableWithoutFeedback>
}

export default IconButton;