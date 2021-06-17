import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import ExchangeScreen from "./ExchangesScreen";


const ExchangeStack = createStackNavigator();

const ExchangeTabScreen = () => {
    
    return (
        <ExchangeStack.Navigator initialRouteName="Exchange">
            <ExchangeStack.Screen name="Exchanges" component={ExchangeScreen}/>
          
        </ExchangeStack.Navigator>
    )
}
export default ExchangeTabScreen;

// This will SERVE AS A FORM OF NAVIGATION NOT AN ACTUAL SCREEN