/**
 Session: Assessment | Code Test
 Email: nusktecsoft@gmail.com
 Developer: github.com/nusktec
 **/
import Colors from "../themes";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {ColorMixer} from "../Utils";
/**
 * GenresList list components
 */
interface Props {
    text: string,
    onTap: () => void,
    colorMode: boolean,
}

/**
 * @param Props
 * @constructor
 */
export const GenresList = ({text, onTap, colorMode}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={[style.touchStyle, {backgroundColor: Colors(colorMode).primaryColor, borderWidth: colorMode ? 1 : 0}]} onPress={() => onTap(text)}>
            <Icon name={'video'} size={10}
                  color={'#009688'}/>
            <Text style={{
                marginHorizontal: 5,
                alignSelf: 'flex-start',
                color: Colors(colorMode).secondaryColor
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    touchStyle: {
        borderColor: '#4f4f4f',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        height: 30,
        flexWrap: 'wrap',
        margin: 2,
        padding: 5,
        borderRadius: 20,
    }
});