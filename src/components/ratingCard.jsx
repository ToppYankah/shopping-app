import React from "react";
import constantsVals from "../constants";
import homeStyles from "../styles/home";
import {Foundation} from '@expo/vector-icons';
import { Text, View } from "react-native";

const RatingCard = ()=>{
    return <View style={homeStyles.rating}>
    <Foundation style={{marginRight: 8}} name="star" color="orange" size={16} />
    <Text style={{color: "orange", fontFamily: constantsVals.fmedium}}>5.0</Text>
</View>;
}

export default RatingCard;