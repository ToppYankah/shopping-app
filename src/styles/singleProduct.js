import { StyleSheet } from "react-native";
import constantsVals from "../constants";

 export const styles = StyleSheet.create({
    screenWrapper: {
        flex: 1,
        backgroundColor: constantsVals.backgroundColor + "50",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: constantsVals.xpadding,
        paddingVertical: constantsVals.ypadding,
        alignItems: "center",
        position: "absolute",
        left: 0,
        right: 0,
        top: 30
    },
    productImageArea: {
        height: "40%",
        alignItems: "center",
        justifyContent: "center"
    },
    detailsWrapper: {
        flex: 1,
        paddingHorizontal: constantsVals.xpadding,
        paddingVertical: constantsVals.ypadding,
        paddingTop: 0
    },
    details: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: "#ffffffda",
        padding: 20,
    },
    productName: {
        fontSize: 30,
        fontFamily: constantsVals.fmedium,
        marginVertical: 20
    },
    description: {
        fontSize: 15,
        fontFamily: constantsVals.fregular,
        color: "#777",
        lineHeight: 25
    },
});