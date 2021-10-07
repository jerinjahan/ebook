// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Bookmark from "../screens/Bookmark";
import Profile from "../screens/Profile";
import BookDetails from "../screens/BookDetails";
import AudioBook from "../screens/AudioBook";

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="BookDetails" component={BookDetails} />
        </Stack.Navigator>
    );
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="AudioBook" component={AudioBook} options={{headerShown:false}} />
            <Stack.Screen name="Bookmark" component={Bookmark} options={{headerShown:false}} />
            <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, ContactStackNavigator };