
/**
 * E-Book-Reader APP
 * 
 * DrawerNavigation
 * 
 * @author Jerin Jahan <jahanjerin@gmail.com>
 * @package E-Book-Reader
 */


import React from 'react';
import { Platform } from 'react-native';
import { COLORS } from '../constants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Menu" component={ContactStackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
