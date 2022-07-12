/**
 Session: Assessment | Code Test
 Email: nusktecsoft@gmail.com
 Developer: github.com/nusktec
 **/
import React, {useState} from 'react';
/**
 * Internal built function from RN
 */
import Icon from "react-native-vector-icons/FontAwesome5";
import {TextInput, TouchableOpacity, View} from "react-native";
import Colors from "../themes";

/**
 * Interface implementation
 */
interface Props {
    colorMode: boolean,
    setSearchText: string,
    searchText: string,
    searchBtnClick: () => void,

}

/**
 *
 * @param colorMode from the useTheme value
 * @param setSearchText mutable variable for text update
 * @param searchText default text value (replica)
 * @param searchBtnClick action button (the right btn)
 * @constructor
 */
const SearchInputBox = ({colorMode, setSearchText, searchText, searchBtnClick}) => {
    return <View style={{
        backgroundColor: Colors(colorMode).primaryColor,
        height: 50,
        marginTop: 10,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderColor: '#4f4f4f',
        borderWidth: colorMode ? 1 : 0
    }}>
        <TextInput
            style={{
                height: 40,
                color: Colors(colorMode).secondaryColor,
                flex: 1
            }}
            onChangeText={setSearchText}
            value={searchText}
            placeholder="Search for movie books..."
            keyboardType="web-search"
            placeholderTextColor={Colors(colorMode).textColorMute}
            maxLength={40}
        />
        <TouchableOpacity onPress={searchBtnClick} activeOpacity={0.5} style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: Colors(colorMode).secondaryColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Icon name={'search'} size={15} color={Colors(colorMode).primaryColor}/>
        </TouchableOpacity>
    </View>
}

export default SearchInputBox;