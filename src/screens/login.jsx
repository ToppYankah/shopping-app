import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import IconButton from '../components/iconButton';
import styles from '../styles/auth';
import {Feather} from '@expo/vector-icons';
import constantsVals from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../components/appButton';
import TextField from '../components/textInput';
import { useAuth } from '../providers/auth';

const LoginScreen = ({navigation}) => {
    const {login, user, loading, error: authError} = useAuth();
    const [error, setError] = useState("");
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    useEffect(()=> callError(authError), [authError]);

    useEffect(()=> {
        if(user) navigation.navigate("Home");
    }, [user]);

    const handleChange = (field, value)=>{
        setForm(()=> {
            return {...form, [field]: value}
        });
    }

    const checkEmptyField = ()=> {
        let output = false;
        Object.keys(form).forEach(key=>{
            if(form[key].length < 1){
                output = true;
            }
        })
        return output;
    }

    const callError = (message)=>{
        setError(message);
        setTimeout(()=> setError(""), 3000);
    }

    const checkEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return reg.test(form.email);
    }

    const handleSubmit = ()=>{
        const validEmail = checkEmail();
         const emptyField = checkEmptyField();
         
         if(!emptyField){
                if(validEmail){
                    login(form);
            }else{ 
                callError("Invalid email address");
            }
        }else{
            callError("Field cannot be empty");
        }
     }

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
                    <View style={{height: 50, alignItems: 'center', justifyContent: "center"}}>
                        <Text style={{fontFamily: constantsVals.fmedium, color: "red"}}>{error}</Text>
                    </View>
                    <TextField value={form.email} keyboardType="email-address" name="email" label="Email" placeholder="your-email@gmail.com" onChange={handleChange} />
                    <TextField secured={true} value={form.password} name="password" label="Password" placeholder="*********" onChange={handleChange} />
                    <AppButton onPress={handleSubmit} bold={true} text="Login" />
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 16, fontFamily: constantsVals.fmedium, textAlign: "center"}}>Forgot your password?</Text>
                </View>
                <View style={{flex: 1}}/>
                <View style={{paddingVertical: 40, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 16, fontFamily: constantsVals.fmedium, textAlign: "center"}}>Don't have an account? 
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("Signup")}><Text style={{fontFamily: constantsVals.fbold, color: "orange"}}> Signup</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default LoginScreen;
