import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import Home from "./screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateBook from './screens/CreateBook';
import BookDetail from './screens/BookDetail';

// React Navigation (native)
// NativeçBase

// Detalle pantalla
// Crear libro lleva a pantalla
// Pantalla de crear libro / update libro
// Botones de modificar y borrar
// Comportamiento de update = Navegar a la pantalla

// Crear el Stack Navigator
const Stack = createStackNavigator();

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen
                        name="Libros"
                        component={Home}
                        options={{ title: 'Lista de Libros' }}
                    /> */}
                    {/* <Stack.Screen
                        name="Libros"
                        component={CreateBook}
                        options={{ title: 'Lista de Libros' }}
                    /> */}
                    <Stack.Screen
                        name="Libros"
                        component={BookDetail}
                        options={{ title: 'Lista de Libros' }}
                    />
                    {/* Si tienes más pantallas, puedes agregarlas aquí */}
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}