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
    sectionBox: {
        padding: 20,
        borderRadius: 20,
        flexDirection: "row",
        backgroundColor: "#fff",
        marginBottom: 20
    }
});