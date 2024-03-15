import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./screens/Home";
import BookDetail from "./screens/BookDetail";
import BookForm from "./screens/BookForm";
import Search from "./screens/Search"
import { Ionicons } from '@expo/vector-icons';

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
            <Stack.Screen name="Details" component={BookDetail}/>
            <Stack.Screen name="Search" component={Search}/>
        </Stack.Navigator>
    );
};

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
                        return <Ionicons name={iconName} color={color} size={size} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#00b4d8', 
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={HomeStack}/>
                <Tab.Screen name="Search" component={Search}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;