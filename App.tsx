/**
 Developer: github.com/nusktec
 ---------------------------------------------
 {$}{$}
 **/
/**
 * Internal built function from RN
 */
import React from "react";
/**
 * Third-parties libraries includes
 */
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
/**
 * User define screen stack
 */
import Welcome_Screen from "./core/screens/Welcome";
import Home_Screen from "./core/screens/Home";
import OpenDetails_Screen from "./core/screens/OpenDetails";
import ViewTransporter from "./core/screens/ViewTransporter";

/**
 * Screen name constants
 */
const SN = {
    WELCOME_SCREEN: 'welcome_screen',
    HOME_SCREEN: 'home_screen',
    DETAILS_SCREEN: 'details_screen',
    TRANSPORTER_SCREEN: 'view_transporter'
}
/**
 * initialization of navigation stack
 */
const Stack = createNativeStackNavigator();
/**
 * @constructor no parameter required 😃
 */
const App = () => {
    return (
            <NavigationContainer>
                {
                    /**
                     * navigation-router stack
                     */
                }
                <Stack.Navigator initialRouteName={SN.WELCOME_SCREEN} screenOptions={{headerShown: false}}>
                    <Stack.Screen name={SN.WELCOME_SCREEN} component={Welcome_Screen} initial={true}/>
                    <Stack.Screen name={SN.TRANSPORTER_SCREEN} component={ViewTransporter}/>
                    <Stack.Screen name={SN.HOME_SCREEN} component={Home_Screen}/>
                    <Stack.Screen options={{headerShown: true, headerStyle: {elevation: 0}}} name={SN.DETAILS_SCREEN} component={OpenDetails_Screen}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
}
/**
 * Export screen names conventionally
 */
export {SN}
/**
 * Finally export the main default app
 */
export default App;