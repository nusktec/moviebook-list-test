/**
 Session: Assessment | Code Test
 Email: nusktecsoft@gmail.com
 Developer: github.com/nusktec
 **/
/**
 * Internal built function from RN
 */
import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, Text, useColorScheme, View} from 'react-native';
//importing decorated theme
import Colors from '../themes';
import {gql} from "@apollo/client";
import {NetworkAgent} from "../Utils";
import {SN} from "../../App";
//implementing class base
const ViewTransporter = ({route, navigation}) => {
    //load color scheme
    const colorMode = useColorScheme() === 'dark';
    useEffect(() => {
        const movieRequest = gql`
            query {
                movies {
                    id,
                    title
                    year
                    runtime
                    genres
                    rank
                    director
                    actors
                    plot
                    posterUrl
                }}`;
        //network calls
        new NetworkAgent.RequestAgent().ApollosAgent(movieRequest, (d)=>{
            //check data safe
            const movies = [...d.data.movies];
            navigation.replace(SN.HOME_SCREEN, {d: movies});
        })
    }, [])
    //return mounted
    return (<>
        <StatusBar backgroundColor={Colors(colorMode).primaryColor}
                   barStyle={colorMode ? 'light-content' : 'dark-content'}/>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors(colorMode).primaryColor
        }}>
            <ActivityIndicator color={Colors(colorMode).secondaryColor} size={'large'}/>
            <Text style={{color: Colors(colorMode).secondaryColor, margin: 10}}>Loading...</Text>
        </View>
    </>)
}
export default ViewTransporter;