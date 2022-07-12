/**
 Session: Assessment | Code Test
 Email: nusktecsoft@gmail.com
 Developer: github.com/nusktec
 **/
/**
 * Internal built function from RN
 */
import React, {useEffect} from 'react';
import {Image, StatusBar, Text, useColorScheme, View, StyleSheet} from 'react-native';
/**
 * Third-parties libraries includes
 */
import {SN} from "../../App";
/**
 * User define libraries / functions
 */
import Colors from '../themes';

/**
 * User define constants and variables
 */
const SCREEN_WAIT_DELAY_TIME = 4000;
/**
 * implementing a functional base component to take the advantages of useEffect, props ignored
 * @constructor non-class based fn
 */
const Welcome = ({navigation}) => {
    let nav = navigation;
    /**
     *  use effect once component loads and never react over data change. []
     */
    useEffect(() => {
        //Delay splash screen for 4 seconds
        setTimeout(() => {
            /**
             * After SCREEN_WAIT_DELAY_TIME load the `home screen`
             */
            nav.replace(SN.TRANSPORTER_SCREEN);
        }, SCREEN_WAIT_DELAY_TIME)
    }, []);
    /**
     * load color scheme and initialize default system theme mode
     */
    const colorMode = useColorScheme() === 'dark';

    /**
     * return mounted as create a noticeable component <>
     */
    return (<>
        {
            /**
             * Status bar component no visible but a reference
             */
        }
        <StatusBar backgroundColor={Colors(colorMode).primaryColor}
                   barStyle={colorMode ? 'light-content' : 'dark-content'}/>
        {
            /**
             * Parent view and containers
             */
        }
        <View style={[style.parentView, {backgroundColor: Colors(colorMode).primaryColor}]}>
            {
                /**
                 * Center image container logo
                 * */
            }
            <View style={[style.centerParent]}>
                <Image style={style.centerParentImage} source={require('./../../assets/images/logo_x1500.png')}/>
                <Text
                    style={[style.centerParentImageBelowText, {color: Colors(colorMode).secondaryColor}]}>{'CA: nusktectsoft@gmail'}</Text>
            </View>
            {
                /**
                 * Bottom container | legend text
                 * */
            }
            <View style={style.bottomContainer}>
                <Text style={{
                    color: Colors(colorMode).secondaryColor,
                    fontSize: 12,
                    fontWeight: 'bold'
                }}>{'React Native Test Assignment'}</Text>
            </View>
        </View>
    </>)
}
/**
 * Global space for styling
 */
const style = StyleSheet.create({
    parentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerParent: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    centerParentImage: {width: 100, height: 100, resizeMode: 'contain', borderRadius: 25, margin: 5},
    centerParentImageBelowText: {
        fontSize: 13,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },
    bottomContainer: {justifyContent: 'center', margin: 10, flexDirection: 'row', alignItems: 'center'}
});
export default Welcome;