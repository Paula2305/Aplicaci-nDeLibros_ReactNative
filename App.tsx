import React from 'react';
import { withExpoSnack } from 'nativewind';
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import BookDetail from "./screens/BookDetail";
import BookForm from "./screens/BookForm";

const Stack = createStackNavigator();

function MyStack() {
    // Inyecta un navigation y un route
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={BookDetail} />
            <Stack.Screen name="Create" component={BookForm} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}