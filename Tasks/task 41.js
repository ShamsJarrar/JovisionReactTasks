import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import textComponent from '../Components/textComponent_Task41';

const Tab = createBottomTabNavigator();

function Task41() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                
                <Tab.Screen
                name = "Page 1"
                component={textComponent}
                initialParams={{ num : 1}} />

                <Tab.Screen
                name = "Page 2"
                component={textComponent}
                initialParams={{ num : 2}} />

                <Tab.Screen
                name = "Page 3"
                component={textComponent}
                initialParams={{ num : 3}} />

                <Tab.Screen
                name = "Page 4"
                component={textComponent}
                initialParams={{ num : 4}} />


            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Task41;