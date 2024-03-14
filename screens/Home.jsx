import React, {useState} from 'react';
import {ScrollView, View,StyleSheet} from 'react-native';
import LibroCard from "../components/LibroCard";
import {Libro} from "../model/libro_model";
import { Button } from '@rneui/themed';


const Home = ({ navigation }) => {
    const book_list = [new Libro(1, 'Libro 1', 'Autor 1', 'ISBN-001', 29.99, 'genero1', 'sinopsis1', 'https://imgc.allpostersimages.com/img/posters/trends-international-harry-potter-and-the-sorcerer-s-stone-castle-one-sheet_u-L-Q1RFUZZ0.jpg'),
        new Libro(2, 'Libro 2', 'Autor 2', 'ISBN-002', 39.99, 'genero2', 'sinopsis2', 'https://imgc.allpostersimages.com/img/posters/trends-international-harry-potter-and-the-sorcerer-s-stone-castle-one-sheet_u-L-Q1RFUZZ0.jpg'),
        new Libro(3, 'Libro 3', 'Autor 3', 'ISBN-003', 19.99, 'genero3', 'sinopsis3', 'https://imgc.allpostersimages.com/img/posters/trends-international-harry-potter-and-the-sorcerer-s-stone-castle-one-sheet_u-L-Q1RFUZZ0.jpg'),
        new Libro(4, 'Libro 4', 'Autor 4', 'ISBN-004', 49.99, 'genero4', 'sinopsis4', 'https://imgc.allpostersimages.com/img/posters/trends-international-harry-potter-and-the-sorcerer-s-stone-castle-one-sheet_u-L-Q1RFUZZ0.jpg'),
        new Libro(5, 'Libro 5', 'Autor 5', 'ISBN-005', 24.99, 'genero5', 'sinopsis5', 'https://imgc.allpostersimages.com/img/posters/trends-international-harry-potter-and-the-sorcerer-s-stone-castle-one-sheet_u-L-Q1RFUZZ0.jpg')]

    const [libros, setLibros] = useState(book_list);

    const handleCrearLibro = () => {
        navigation.navigate('Create')
    };

    const handleLibroClick = (libro) => {
        navigation.navigate('Details', { selectedLibro: libro });
    };

    return (
        <ScrollView>
            <ScrollView
                horizontal = {true}
                style = {{
                    flexDirection: 'row',
                    height: 300
                }}>
                {libros.map((libro) => (
                    <LibroCard key={libro.id} libro={libro} onPress={() => handleLibroClick(libro)}/>
                ))}
            </ScrollView>
            <ScrollView
                horizontal = {true}
                style = {{
                    flexDirection: 'row',
                    height: 280
                }}>
                {libros.map((libro) => (
                    <LibroCard key={libro.id} libro={libro} onPress={() => handleLibroClick(libro)}/>
                ))}
            </ScrollView>
            <View style={styles.container}>
                <Button
                    style={styles.button}
                    title="Crear Libro"
                    onPress={handleCrearLibro}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    button: {
        width: 150,
        height: 50
    }
})
export default Home;