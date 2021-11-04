import React from 'react';
import { Text, View } from 'react-native';
import IconButton from '../components/iconButton';
import styles from '../styles/login';
import {Feather} from '@expo/vector-icons';
import constantsVals from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../components/appButton';
import TextField from '../components/textInput';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.screenWrapper}>
            <SafeAreaView edges={["top"]} />
            {/* Header */}
            <View style={styles.header}>
                <IconButton onPress={navigation.goBack} parent={Feather} name="chevron-left" light={true} size={25} />
            </View>
            <View style={{paddingHorizontal: constantsVals.xpadding * 2, flex: 1}}>
                <View>
                    <Text style={{fontFamily: constantsVals.fbold, fontSize: 40}}>Login</Text>
                    <Text style={{fontFamily: constantsVals.fbold, fontSize: 40}}>to account</Text>
                </View>
                <View style={styles.form}>
                    <TextField label="Email" placeholder="your-email@gmail.com" onChange={()=>{}} />
                    <TextField label="Password" placeholder="*********" onChange={()=>{}} />
                    <AppButton bold={true} text="Login" />
                </View>
                <View>
                    <Text style={{fontSize: 16, fontFamily: constantsVals.fmedium, textAlign: "center"}}>Forgot your password?</Text>
                </View>
                <View style={{flex: 1}}/>
                <View>
                    <Text style={{fontSize: 16, fontFamily: constantsVals.fmedium, textAlign: "center"}}>Don't have an account? <Text style={{fontFamily: constantsVals.fbold}}>Sign Up</Text></Text>
                </View>
            </View>
            <SafeAreaView edges={["bottom"]} />
        </View>
    );
}

export default LoginScreen;
