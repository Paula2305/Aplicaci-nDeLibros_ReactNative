import {Input,Button } from '@rneui/themed';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const BookForm = ({route, navigation}) => {
    const {creatingBook} = route.params;


    const handlePublicarLibro = () => {
        
        // Definir el comportamiento del boton en base al parametro que llegue CreatingBook true or false 
    }

    return (
        <ScrollView>
            <View style = {styles.container}>
                <Text style={{ marginBottom: 10 }}>Titulo</Text>
                    <Input 
                    style={{ backgroundColor: 'lightgray', marginBottom: 10 }}
                    placeholder='Ej: El señor de los anillos'/>

                    <Text>Autor</Text>
                    <Input placeholder='Ej: Tolkien'/>
                
                    <Text>Precio</Text>
                    <Input placeholder='Ej: $1000'/>
                
                    <Text>Genero</Text>
                    <Input placeholder='Ej: Ficcion'/>
                
                    <Text>Sinopsis</Text>
                    <Input placeholder=''/> 
                    <View>
                        <Button
                        title={'Publicar'}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        onPress={() => handlePublicarLibro()}/>
                    </View> 
            </View>
        </ScrollView>
           
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default BookForm