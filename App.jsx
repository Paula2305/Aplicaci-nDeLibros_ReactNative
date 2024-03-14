import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./screens/Home";
import BookDetail from "./screens/BookDetail";
import BookForm from "./screens/BookForm";
import { Icon } from '@rneui/themed';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    // Inyecta un navigation y un route
    return (
        <Stack.Navigator 
            screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={BookDetail} />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Search') {
                            iconName = focused ? 'search' : 'search-outline';
                        }

                        // Retorna el componente Icon de React Native Elements con el nombre del icono y el color
                        return <Icon name={iconName} color={color} size={size} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato', // Color de la pestaña activa
                    inactiveTintColor: 'gray', // Color de la pestaña inactiva
                }}
            >
                <Tab.Screen name="Home" component={HomeStack}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;