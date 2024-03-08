import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {styled} from 'nativewind';
import LibroCard from "../components/LibroCard";
import {Libro} from "../model/libro_model";

const StyledView = styled(View);

const Home = ({ navigation }) => {
    const book_list = [new Libro(1, 'Libro 1', 'Autor 1', 'ISBN-001', 29.99, 'genero1', 'sinopsis1', 'foto1'),
        new Libro(2, 'Libro 2', 'Autor 2', 'ISBN-002', 39.99, 'genero2', 'sinopsis2', 'foto2'),
        new Libro(3, 'Libro 3', 'Autor 3', 'ISBN-003', 19.99, 'genero3', 'sinopsis3', 'foto3'),
        new Libro(4, 'Libro 4', 'Autor 4', 'ISBN-004', 49.99, 'genero4', 'sinopsis4', 'foto4'),
        new Libro(5, 'Libro 5', 'Autor 5', 'ISBN-005', 24.99, 'genero5', 'sinopsis5', 'foto5')]

    const [libros, setLibros] = useState<Libro[]>(book_list);

    const handleCrearLibro = () => {
        navigation.navigate('Create', { creatingBook: true})
    };

    const handleLibroClick = (libro: Libro) => {
        navigation.navigate('Details', { selectedLibro: libro });
    };

    return (
        <StyledView className='overflow-visible'>
            {libros.map((libro) => (
                <LibroCard key={libro.id} libro={libro} onPress={() => handleLibroClick(libro)}/>
            ))}
            <Button title="Crear Libro" onPress={handleCrearLibro}/>
        </StyledView>
    );
};

export default Home;