import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

// import ConnectionsTabNavigator from '../ConnectionsTabNavigator';
import ConnectionsScreen from './ConnectionsScreen/ConnectionsScreen';


const ConnectionsStack = createStackNavigator();

const ConnectionsTabNavigator = () => {

    return (
        <ConnectionsStack.Navigator initialRouteName="Connections">
            <ConnectionsStack.Screen name="Connections" component={ConnectionsScreen} />
   
        </ConnectionsStack.Navigator>
    )
}

export default ConnectionsTabNavigator;

// This will SERVE AS A FORM OF NAVIGATION NOT AN ACTUAL SCREEN