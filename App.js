import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppBottomTab} from './src/navigation';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="AppBottomTab"
                    component={AppBottomTab}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
