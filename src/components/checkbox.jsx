import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const Checkbox = ({onPress, selected}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.checkBox}>
                {selected ? <View style={styles.checkIndicator}/> : <View />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
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
    }
})

export default Checkbox;
