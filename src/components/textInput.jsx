import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import constantsVals from '../constants';

const TextField = ({placeholder = "", secured=false, keyboardType="default", label="label", name="", value="", onChange}) => {
    return (
        <View style={styles.inputBox}>
            <Text style={{fontFamily: constantsVals.fmedium, fontSize: 14}}>{label}</Text>
            <TextInput keyboardType={keyboardType} secureTextEntry={secured} value={value} onChangeText={(value)=>onChange(name, value)} style={{paddingVertical: 5, fontSize: 15, fontFamily: constantsVals.fregular}} placeholder={placeholder} />
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
