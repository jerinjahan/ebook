// ./navigation/TabNavigator.js

import React from "react";
import { Octicons, Feather,MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Dashboard"
                component={MainStackNavigator}
                options={{
                    headerShown:false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={28} color={COLORS.black} />
                    ),
                }}
            />
            <Tab.Screen
                name="AudioBook1"
                component={ContactStackNavigator}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Octicons name="graph" color={COLORS.gray} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="AudioBook"
                component={ContactStackNavigator}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Feather name="mic" color={COLORS.gray} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={ContactStackNavigator}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Feather name="bookmark" color={COLORS.gray} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ContactStackNavigator}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={COLORS.gray} size={32} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;