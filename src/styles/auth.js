import { StyleSheet } from "react-native";
import constantsVals from "../constants";

 export default StyleSheet.create({
    screenWrapper: {
        flex: 1,
        backgroundColor: constantsVals.backgroundColor + "30",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: constantsVals.xpadding,
        paddingVertical: constantsVals.ypadding,
        alignItems: "center",
    },
    form: {
        paddingVertical: 50,
        paddingTop: 20,
    },
});