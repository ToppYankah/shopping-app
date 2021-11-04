import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import constantsVals from '../constants';

const TextField = ({placeholder = "", label="label", value="", onChange=()=>{}}) => {
    return (
        <View style={styles.inputBox}>
            <Text style={{fontFamily: constantsVals.fmedium, fontSize: 14}}>{label}</Text>
            <TextInput value={value} onChange={onChange} style={{paddingVertical: 5, fontSize: 16}} placeholder={placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputBox: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderRadius: 15,
        marginBottom: 20
    }
})

export default TextField;
