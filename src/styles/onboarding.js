import { StyleSheet } from "react-native";
import constantsVals from "../constants";

 export default StyleSheet.create({
    screenWrapper: {
        flex: 1,
        backgroundColor: constantsVals.backgroundColor + "30",
    },
    heading: {
        fontSize: 30,
        fontFamily: constantsVals.fbold,
        marginBottom: 20
    },
    paragraph: {
        fontSize: 17,
        fontFamily: constantsVals.fmedium,
        textAlign: 'center'
    },
    indicator: {
        width: 20, 
        height: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        marginHorizontal: 8
    }
});