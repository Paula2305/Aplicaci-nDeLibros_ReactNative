import React, {useState, ReactElement} from 'react';
import {View, Button, Text} from 'react-native';
import {Actionsheet, useDisclose, Box, VStack, IconButton, Icon, HStack, ScrollView} from 'native-base';
import {AntDesign} from '@expo/vector-icons';
import {Libro} from '../model/libro_model';
import LibroCard from "../components/LibroCard";

const Home = () => {
    const book_list = [new Libro(1, 'Libro 1', 'Autor 1', 300, 'ISBN-001', 29.99),
        new Libro(2, 'Libro 2', 'Autor 2', 450, 'ISBN-002', 39.99),
        new Libro(3, 'Libro 3', 'Autor 3', 200, 'ISBN-003', 19.99),
        new Libro(4, 'Libro 4', 'Autor 4', 350, 'ISBN-004', 49.99),
        new Libro(5, 'Libro 5', 'Autor 5', 400, 'ISBN-005', 24.99)]

    const [libros, setLibros] = useState<Libro[]>(book_list);
    const {isOpen, onOpen, onClose} = useDisclose();
    const [selectedLibro, setSelectedLibro] = useState<Libro | null>(null);

    const handleCrearLibro = () => {
        // Aquí tendrás que implementar la logica para la creación del libro
    };

    const handleBorrarLibro = (libro: Libro) => {
        // Implementar la lógica para borrar el libro aquí
    };

    const handleEditarLibro = (libro: Libro) => {
        // Implementar la lógica para editar el libro aquí
    };

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            {libros.map((libro) => (
                <LibroCard key={libro.id} libro={libro} />
            ))}
            <Button title="Crear Libro" onPress={handleCrearLibro}/>
        </ScrollView>
    );
};

export default Home;