/**
 Session: Assessment | Code Test
 Email: nusktecsoft@gmail.com
 Developer: github.com/nusktec
 **/
import React, {useEffect, useState} from 'react';
import {gql} from '@apollo/client';
/**
 * Internal built function from RN
 */
import {
    Appearance,
    FlatList,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    useColorScheme,
    View
} from 'react-native';
/**
 * Third-party library includes
 */
import Icon from 'react-native-vector-icons/Fontisto';
/**
 * Custom/user define libraries and modules
 */
import {SN} from "../../App";
import User from '../user.json';
import Colors from "../themes"
import {MovieArrayEngine, NetworkAgent, themeToggle} from "../Utils";
import PopularList from "../components/PopularList";
import MovieList from "../components/MoviesList";
import SearchInputBox from "../components/SearchInputBox";
import {GenresList} from "../components/GenresList";

/**
 *
 * @constructor of a non-class base component
 */
const Home = ({route, navigation}) => {
    const data = route?.params?.d;
    const AppearTheme = useColorScheme() === 'dark';
    const MovieSortAgent = new MovieArrayEngine.SorterAgent(data);
    /**
     * User define mutable variables
     */
    const [colorMode, setColorMode] = useState(useColorScheme() === 'dark');
    const [userName, setUserName] = useState("");
    const [searchText, setSearchText] = useState('');
    const [getMovieData, setMovieData] = useState({});
    const [getPMovieData, setPMovieData] = useState([]);
    const [getGenreData, setGenreData] = useState([]);
    const [rawDummies, setRawDummies] = useState(data)
    //set theme mode
    Appearance.addChangeListener(() => {
        ToastAndroid.show("Theme changed !", ToastAndroid.SHORT);
        setColorMode(!AppearTheme);
    })

    //setColorMode(useColorScheme() === 'dark');
    useEffect(() => {
        NetworkLoader();
    }, [])
    /**
     * Api caller
     */
    const NetworkLoader = () => {
        setUserName(User.name);
        //Load apollos and wait
        setGenreData(MovieSortAgent.filterGenres(true));
        setPMovieData(MovieSortAgent.filterPopular(true));
        setMovieData(MovieSortAgent.filterMovies());
    }
    /**
     * search box reactive function
     */
    const searchBtnClick = () => {
        if (searchText.length > 3) {
            MovieSortAgent.Initialize(rawDummies);
            let c = MovieSortAgent.filterMovies(searchText, true, true);
            setMovieData(c);
        }
    }

    /**
     * live text changing
     * */
    function liveTextChange(v: any) {
        setSearchText(v);
        if (searchText.length > 2) {
            MovieSortAgent.Initialize(rawDummies);
            let c = MovieSortAgent.filterMovies(v, true, true);
            setMovieData(c);
        } else {
            MovieSortAgent.Initialize(rawDummies);
            setMovieData(MovieSortAgent.filterMovies());
        }
    }

    /**
     * Search method for filter by genres
     * */
    function genresLookup(v: string) {
        ToastAndroid.show("Sorting " + v, ToastAndroid.SHORT);
        MovieSortAgent.Initialize(rawDummies);
        let c = MovieSortAgent.filterMovies(v, true, false);
        setMovieData(c);
    }

    /**
     * Search method for popular
     * */
    function popularOnClick(v: any) {
        navigation.navigate(SN.DETAILS_SCREEN, {d: v});
    }

    //return safe mounted component
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
             * Parent container
             */
        }
        <View style={{backgroundColor: Colors(colorMode).primaryMute, ...style.parentAll}}>
            <View style={{padding: 10, marginTop: 10}}>
                {
                    /**
                     *Header title container view
                     */
                }
                <View style={style.parentTopHeader}>
                    <Text
                        style={[style.parentGreetingText, {color: Colors(colorMode).textColorMute}]}>{'Hello ' + userName}</Text>
                    <TouchableOpacity style={style.parentTopHeaderTheme}
                                      onPress={() => {
                                          themeToggle(setColorMode, colorMode);
                                      }}
                                      activeOpacity={0.5}>
                        <Text style={{
                            color: Colors(colorMode).secondaryColor,
                            padding: 5
                        }}>{(colorMode ? 'Light' : 'Dark') + ' theme '}</Text>
                        <Icon name={colorMode ? 'day-sunny' : 'night-clear'} size={15}
                              color={Colors(colorMode).secondaryColor}/>
                    </TouchableOpacity>
                </View>
                <Text
                    style={[style.parentTopTitle, {color: Colors(colorMode).secondaryColor}]}>{'MoviesBook Library'}</Text>
                {
                    /**
                     * Custom search component view
                     * */
                }
                <SearchInputBox colorMode={colorMode} searchBtnClick={searchBtnClick} searchText={searchText}
                                setSearchText={(v) => liveTextChange(v)}/>
            </View>
            {
                /**
                 * Genres as filter
                 */
            }
            <FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
                      style={{maxHeight: 40}} keyExtractor={(item, index) => index.toString()} horizontal={true}
                      data={getGenreData}
                      renderItem={({item, index}) => {
                          return (<GenresList text={item} colorMode={colorMode} onTap={(v) => genresLookup(v)}/>)
                      }}/>
            <Text style={[style.bodyTopTitle, {color: Colors(colorMode).textColorMute}]}>{'Recommended Movies'}</Text>
            {
                /**
                 * Authors Horizontal scroll view
                 * */
            }
            <FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
                      style={{maxHeight: 150}} keyExtractor={(item, index) => index.toString()} horizontal={true}
                      data={getPMovieData}
                      renderItem={({item, index}) => {
                          return (<PopularList item={item} colorMode={colorMode} onPress={(v) => popularOnClick(v)}/>)
                      }}/>

            <Text
                style={[style.bookListTitle, {color: Colors(colorMode).textColorMute}]}>{getMovieData?.data?.length + ' Movies'}</Text>
            {
                /**
                 * MovieBook List scroll view
                 * */
            }
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{flex: 1}}>
                <View style={{flex: 1}}>
                    {getMovieData?.headers?.map((d, i) => (
                        <View key={i+1}>
                            <Text style={[style.bookYearTitle, {color: Colors(colorMode).textColorMute}]} key={i}>{'Year ' + d}</Text>
                            {getMovieData?.data?.map((m, k) => (d === m.year) ?
                                <MovieList colorMode={colorMode} key={k} onPress={(v) => popularOnClick(v)} data={m}/> :
                                <View key={k}/>)}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    </>)
}
/**
 * Global styling and decor
 */
const style = StyleSheet.create({
    parentAll: {
        padding: 1, flex: 1
    },
    parentTopHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingEnd: 0
    }, parentGreetingText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    parentTopTitle: {
        fontSize: 30,
        marginTop: 10,
    },
    bodyTopTitle: {
        paddingHorizontal: 0,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    bookListTitle: {
        paddingHorizontal: 0,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    bookYearTitle: {
        paddingHorizontal: 0,
        marginBottom: 1,
        fontSize: 12,
        fontWeight: 'bold'
    },
    parentTopHeaderTheme: {
        flexDirection: 'row',
        alignItems: 'center'
    }

})
export default Home;