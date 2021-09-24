import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Foundation, AntDesign, MaterialIcons, EvilIcons} from '@expo/vector-icons';

import {Home, Search, Watch, Favorite, Profile} from '../../screens';

const Tab = createBottomTabNavigator();

export default function AppBottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Foundation name="home" size={30} color="black"/>
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="search1" size={30} color="black"/>
                    )
                }}
            />
            <Tab.Screen
                name="Watch"
                component={Watch}
                options={{
                    tabBarIcon: () => (
                        <Foundation name="play-video" size={30} color="black"/>
                    )
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="favorite-border" size={30} color="black"/>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: () => (
                        <EvilIcons name="user" size={35} color="black"/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}
