import React from "react";
import{
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Detail, Food, Home, Search } from "../screens"
import { COLORS, icons } from "../constants"

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Food"
                component={Food}
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Detail"
                component={Detail}
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <Image
                            source={icons.detail}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            
        </Tab.Navigator>
    )
}

    

export default Tabs;
