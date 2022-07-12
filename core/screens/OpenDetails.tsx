/**
 Session: Assessment | Code Test
 Email: nusktecsoft@gmail.com
 Developer: github.com/nusktec
 **/
/**
 * Internal built function from RN
 */
import React, {useEffect} from 'react';
import {Image, StatusBar, Text, useColorScheme, View} from 'react-native';

//importing decorated theme
import Colors from '../themes';
//implementing class base
const OpenDetails = ({route, navigation}) => {
    let data = route?.params?.d;
    navigation.setOptions({title: data?.title})
    //use effect
    useEffect(()=>{
        //load time

    }, []);
    //load color scheme
    const colorMode = useColorScheme() === 'dark';

    //return mounted
    return (<>
        <StatusBar backgroundColor={Colors(colorMode).primaryColor} barStyle={colorMode?'light-content':'dark-content'}/>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors(colorMode).primaryColor
        }}>
            <Text>{'Welcome to details screen of \n'+data?.title+"\nTo be continued..."}</Text>
        </View>
    </>)
}
export default OpenDetails;