/**
 Session: Assessment | Code Test
 Email: nusktecsoft@gmail.com
 Developer: github.com/nusktec
 **/
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Colors from "../themes";
import React from "react";
const CompanyList = ({colorMode, item, onPress}) => {
    return (
        <TouchableOpacity onPress={()=>onPress(item)} activeOpacity={0.8} style={{
            height: 130,
            width: 95,
            borderRadius: 5,
            overflow: 'hidden',
            marginRight: 8,
            backgroundColor: Colors(colorMode).primaryColor
        }}>
            <ImageBackground
                style={{
                    height: 100,
                    width: 95,
                    borderRadius: 0,
                    overflow: 'hidden',
                    alignItems: 'flex-end',
                    padding: 5
                }}
                source={{uri: item?.posterUrl}}>
                <Icon name={'check-circle'} color={Colors(colorMode).primaryColor} size={10}/>
            </ImageBackground>
            <View style={{
                backgroundColor: Colors(colorMode).primaryColor,
                padding: 5,
                borderRadius: 0,
                marginTop: -8
            }}>
                <Text numberOfLines={1} style={{
                    color: Colors(colorMode).secondaryColor,
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginRight: 2,
                }}>{item?.title}</Text>

                <Text numberOfLines={1} style={{
                    color: Colors(colorMode).secondaryColor,
                    fontSize: 11,
                }}>{item?.year + ' | '+item?.director}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default CompanyList;