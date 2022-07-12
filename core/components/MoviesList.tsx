/**
 Session: Assessment | Code Test
 Email: nusktecsoft@gmail.com
 Developer: github.com/nusktec
 **/
import Colors from "../themes";
import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
const MovieList = ({colorMode, data, onPress})=>{
    return (
        <TouchableOpacity onPress={()=>onPress(data)} activeOpacity={0.5} style={{
            justifyContent: 'center',
            height: 70,
            backgroundColor: Colors(colorMode).primaryColor,
            marginHorizontal: 0,
            borderRadius: 10,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5
        }}>
            <Image style={{width: 50, height: 50, borderRadius: 10, resizeMode: 'contain'}}
                   source={{uri: data.posterUrl}}/>
            <View style={{flex: 1, paddingHorizontal: 8, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{
                        color: Colors(colorMode).secondaryColor,
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginRight: 8
                    }}>{data?.title}</Text>
                </View>
                <Text numberOfLines={1} style={{
                    color: Colors(colorMode).textColorMute,
                    fontSize: 12,
                }}>{data?.actors}</Text>
                <Text style={{
                    color: Colors(colorMode).textColorMute,
                    fontSize: 12,
                    marginTop: 2
                }}>{data?.year+' '+data?.genres.join(", ")}</Text>
            </View>
            <Text style={{
                color: Colors(colorMode).secondaryColor,
                fontSize: 12,
                marginRight: 8
            }}>{data?.director}</Text>
        </TouchableOpacity>
    )
}

export default MovieList;