import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import IconButton from '../components/iconButton';
import styles from '../styles/auth';
import {Feather} from '@expo/vector-icons';
import constantsVals from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../components/appButton';
import TextField from '../components/textInput';
import { useAuth } from '../providers/auth';

const SignupScreen = ({navigation}) => {
    const {signup, user, loading} = useAuth();
    const [error, setError] = useState("");
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        cpassword: ""
    });

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

    const checkPasswordMatch = ()=> form.password === form.cpassword;

    const handleSubmit = ()=>{
       const validEmail = checkEmail();
        const emptyField = checkEmptyField();
       const matchPassword = checkPasswordMatch();
        
       if(validEmail){
           console.log(form.password.length);
           if(!emptyField && matchPassword){
               if(form.password.length >= 8){
                   delete form.cpassword;
                   signup(form);
               }else{
                   callError("Password should be at least 8 chars")
               }
           }else{ 
               callError("Check empty field or password mismatch");
            }
       }else{
           callError("Invalid email address");
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
                    <Text style={{fontFamily: constantsVals.fbold, fontSize: 40}}>Create</Text>
                    <Text style={{fontFamily: constantsVals.fbold, fontSize: 40}}>free account</Text>
                </View>
                <ScrollView style={styles.form} showsVerticalScrollIndicator={false}> 
                    <View style={{height: 50, alignItems: 'center', justifyContent: "center"}}>
                        <Text style={{fontFamily: constantsVals.fmedium, color: "red"}}>{error}</Text>
                    </View>
                    <TextField value={form.username} label="Username" name="username" placeholder="choose username" onChange={handleChange} />
                    <TextField value={form.email} keyboardType="email-address" label="Email" name="email" placeholder="your-email@mail.com" onChange={handleChange} />
                    <TextField value={form.password} label="Password" name="password" secured={true} placeholder="*********" onChange={handleChange} />
                    <TextField value={form.cpassword} label="Confirm Password" name="cpassword" secured={true} placeholder="*********" onChange={handleChange} />
                    <AppButton onPress={loading ? ()=>{} : handleSubmit} bold={true} text={loading ? "Creating Account...." : "Create Account"} />
                </ScrollView>
                <View style={{flex: 1}}/>
                <View style={{paddingVertical: 40, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 16, fontFamily: constantsVals.fmedium, textAlign: "center"}}>Already have an account? 
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("Login")}><Text style={{fontFamily: constantsVals.fbold, color: "orange"}}> Login</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default SignupScreen;
