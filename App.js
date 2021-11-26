import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"

import {Home,Food,Detail, Search} from './screens'

import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions ={{
                    headerShown: false
                }}
                initialRouteName={"Home"}
            >
                <Stack.Screen name= "Home" component = {Tabs}/>
                <Stack.Screen name= "Search" component = {Search}/>
                <Stack.Screen name= "Detail" component = {Detail}/>
                <Stack.Screen name= "Food" component = {Food}/>


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;