import {Input,Button } from '@rneui/themed';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const BookForm = ({navigation}) => {

    const handlePublicarLibro = () => {
        // Definir el comportamiento del boton en base al parametro que llegue CreatingBook true or false 
    };

    return (
        <ScrollView>
            <View>
                <Text >Titulo</Text>
                    <Input 
                    placeholder='Ej: El señor de los anillos'/>

                    <Text>Autor</Text>
                    <Input placeholder='Ej: Tolkien'/>
                
                    <Text>Precio</Text>
                    <Input placeholder='Ej: $1000'/>
                
                    <Text>Genero</Text>
                    <Input aceholder='Ej: Ficcion'/>
                
                    <Text>Sinopsis</Text>
                    <Input placeholder=''/> 
                    <View>
                        <Button
                        title={'Publicar'}
                        onPress={() => handlePublicarLibro()}/>
                    </View> 
            </View>
        </ScrollView>
           
     );
};


export default BookForm;