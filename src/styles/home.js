import { StyleSheet } from "react-native";
import constantsVals from "../constants";

const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: constantsVals.backgroundColor + "30",
    },
    header: {
        paddingHorizontal: constantsVals.xpadding,
        paddingVertical: constantsVals.ypadding/2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        fontFamily: constantsVals.fbold,
        fontSize: 30,
    },
    searchBar: {
        paddingHorizontal: constantsVals.xpadding,
        paddingVertical: constantsVals.ypadding,
        paddingTop: constantsVals.ypadding/3,
        flexDirection: "row",
    },
    searchBarInputBox: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        flex: 1,
        marginRight: 20,
        alignItems: "center",
        flexDirection: "row",

    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
    },
    searchButton: {
        padding: 18,
        backgroundColor: constantsVals.black,
        borderRadius: 10
    },
    categoriesList: {
        paddingLeft: constantsVals.xpadding + 10,
    },
    categoriesListItem: {
        position: "relative",
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    categoriesListItemIndicator: {
        position: "absolute",
        top: 0, left: "55%",
        width: 10, height: 10,
        backgroundColor: "#f00",
        borderRadius: 15
    },
    categoriesListItemLable: {
        color: "#aaa",
        fontFamily: constantsVals.fmedium,
    },
    categoriesListItemActiveLabel: {
        fontFamily: constantsVals.fbold,
        color: "#000",
    },
    bottomNavigationContainer: {
        paddingHorizontal: constantsVals.xpadding,
        paddingBottom: constantsVals.ypadding,
    },
    bottomNavigationBar: {
        backgroundColor: constantsVals.black,
        borderRadius: 25,
        flexDirection: "row"
    },
    bottomNavigationBarItem: {
        flex: 1,
        padding: 25,
        alignItems: "center"
    },
    productCardWrapper: {
        paddingTop: 60,
        marginRight: 20,
    },
    productCard: {
        width: 250,
        height: 300,
        backgroundColor: "white",
        borderRadius: 15,
        overflow: "visible",
    },
    productImageBox: {
        backgroundColor: constantsVals.backgroundColor + "aa",
        alignItems: "center",
        height: "50%",
        borderRadius: 15,
        overflow: "visible",
        justifyContent: "flex-start",
        position: "relative"
    },
    productImage: {
        width: "100%",
        height: "50%",
        overflow: "visible",
        position: "absolute",
        left: "0%",
        resizeMode: "contain",
    },
    productDescription: {
        padding: 20,
        justifyContent: "space-between",
        height: "50%"
    },  
    rating: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",   
        paddingVertical: 8,
        paddingHorizontal: 12,
        bottom: 20,
        right: 20,
        borderRadius: 10,
        backgroundColor: "#ffffffaa"
    }
  });

export default homeStyles; 