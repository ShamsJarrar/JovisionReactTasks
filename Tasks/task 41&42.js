import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {textComponent1, textComponent2, textComponent3, textComponent4} from '../Components/textComponent_Task41';

const Tab = createBottomTabNavigator();

function Task41_42() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                
                <Tab.Screen
                name = "Page 1"
                component={textComponent1} />

                <Tab.Screen
                name = "Page 2"
                component={textComponent2} />

                <Tab.Screen
                name = "Page 3"
                component={textComponent3} />

                <Tab.Screen
                name = "Page 4"
                component={textComponent4} />


            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Task41_42;