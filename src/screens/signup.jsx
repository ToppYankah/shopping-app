import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import IconButton from '../components/iconButton';
import styles from '../styles/auth';
import {Feather} from '@expo/vector-icons';
import constantsVals from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../components/appButton';
import TextField from '../components/textInput';

const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.screenWrapper}>
            <SafeAreaView edges={["top"]} />
            {/* Header */}
            <View style={styles.header}>
                <IconButton onPress={navigation.goBack} parent={Feather} name="chevron-left" light={true} size={25} />
            </View>
            <View style={{paddingHorizontal: constantsVals.xpadding * 2, flex: 1}}>
                <View>
                    <Text style={{fontFamily: constantsVals.fbold, fontSize: 40}}>Create</Text>
                    <Text style={{fontFamily: constantsVals.fbold, fontSize: 40}}>free account</Text>
                </View>
                <View style={styles.form}>
                    <TextField label="Username" placeholder="choose username" onChange={()=>{}} />
                    <TextField label="Email" placeholder="your-email@mail.com" onChange={()=>{}} />
                    <TextField label="Password" placeholder="*********" onChange={()=>{}} />
                    <TextField label="Confirm Password" placeholder="*********" onChange={()=>{}} />
                    <AppButton bold={true} text="Create Account" />
                </View>
                <View style={{flex: 1}}/>
                <View>
                    <Text style={{fontSize: 16, fontFamily: constantsVals.fmedium, textAlign: "center"}}>Already have an account? 
                        <TouchableOpacity onPress={()=>navigation.navigate("Login")}><Text style={{fontFamily: constantsVals.fbold}}> Login</Text></TouchableOpacity>
                    </Text>
                </View>
            </View>
            <SafeAreaView edges={["bottom"]} />
        </View>
    );
}

export default SignupScreen;
