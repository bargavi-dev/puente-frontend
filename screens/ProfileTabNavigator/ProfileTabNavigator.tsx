import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import ProfileScreen from "./ProfileScreen"
import SettingsScreen from "./SettingsScreen";

const ProfileStack = createStackNavigator();

const ProfileTabNavigator = () => {

    return (
        <ProfileStack.Navigator initialRouteName="Profile">
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
            <ProfileStack.Screen name="Settings" component={SettingsScreen} />
        </ProfileStack.Navigator>
    )
}

export default ProfileTabNavigator;

// This will SERVE AS A FORM OF NAVIGATION NOT AN ACTUAL SCREEN