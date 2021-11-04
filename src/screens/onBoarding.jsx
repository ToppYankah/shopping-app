import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, Text, View, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import constantsVals from '../constants';
import styles from '../styles/onboarding';
import chair from '../../assets/chairlightblue.png';
import card from '../../assets/card.png';
import AppButton from '../components/appButton';

const {width} = Dimensions.get("screen");
const spaceX = constantsVals.xpadding*3;

const OnboardingScreen = ({navigation}) => {
    const [stage, setStage] = useState(0);
    const content = [
        {heading: "Discover", paragraph: "Revealing new models and series of items to you every single day"},
        {heading: "Purchase", paragraph: "Buy items with your credit card, bank account or mobile money (MoMo) any time any where"},
    ]
        
    const handleScroll = ({nativeEvent: {contentOffset: { x: scrollX }}})=>{
        const stageValue = Math.ceil(scrollX/width);
        setStage((prev)=> stageValue < content.length ? stageValue : prev);
    }

    return (
        <View style={styles.screenWrapper}>
            <SafeAreaView edges={["top"]} />
            <View style={{alignItems: "center", paddingHorizontal: spaceX, paddingVertical: 30}}>
                
            </View>
            <ScrollView 
                scrollEventThrottle={16}
                pagingEnabled={true} 
                horizontal={true} 
                decelerationRate={0} 
                snapToInterval={0} 
                snapToAlignment={"center"} 
                showsHorizontalScrollIndicator={false} 
                style={{flex: 1}} 
                horizontal={true}
                onScroll={handleScroll}
                overScrollMode={"never"}
            >
                <View style={{alignItems: "center", justifyContent: "center", width: width}}>
                    <Image source={chair} style={{width: "70%", resizeMode: "contain"}} />
                </View>
                <View style={{alignItems: "center", justifyContent: "center", width: width}}>
                    <Image source={card} style={{width: "70%", resizeMode: "contain"}} />
                </View>
            </ScrollView>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
                <View style={{...styles.indicator, backgroundColor: stage == 0 ? "#000" : "#fff"}} />
                <View style={{...styles.indicator, backgroundColor: stage == 1 ? "#000" : "#fff"}} />
            </View>
            <View style={{paddingVertical: 30, alignItems: "center", paddingHorizontal: spaceX}}>
                <Text style={styles.heading}>{content[stage].heading}</Text>
                <Text style={styles.paragraph}>{content[stage].paragraph}</Text>
            </View>
            <View style={{paddingHorizontal: constantsVals.xpadding*3, paddingVertical: 50}}>
                <AppButton onPress={()=> navigation.navigate("Home")} text="Start Shopping" bold={true} />
            </View>
        </View>
    );
}

export default OnboardingScreen;
