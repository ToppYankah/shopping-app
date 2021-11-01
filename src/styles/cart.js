import { StyleSheet } from "react-native";
import constantsVals from "../constants";

 export const styles = StyleSheet.create({
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
    itemsView: {
        flex: 1
    },
    subTotalContainer: {
        backgroundColor: "#fff",
        padding: constantsVals.xpadding,
        borderRadius: 30
    },
    tallyBox: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    tallyLabel: {
        fontSize: 15,
        color: "#aaa",
        fontFamily: constantsVals.fmedium
    },
    tallyTotal: {
        fontSize: 17,
        fontFamily: constantsVals.fbold
    },
    cartItemBox: {
        paddingHorizontal: constantsVals.xpadding,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    checkBox: {
        width: 25,
        height: 25,
        borderRadius: 25,
        borderWidth: 2,
        padding: 3
    },
    checkIndicator: {
        backgroundColor: "black",
        flex: 1,
        borderRadius: 20
    },
    cartItemImageBox: {
        padding: 15,
        borderRadius: 30,
        marginHorizontal: 20,
        backgroundColor: constantsVals.backgroundColor
    }
});