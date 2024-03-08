import {Box, Text, HStack} from 'native-base';
import React from "react";
import {TouchableOpacity} from "react-native";

const LibroCard = ({libro, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Box
                bg={'white'}
                shadow={1}
                rounded={'lg'}
                maxWidth={'90%'}
                mx={'auto'}
                my={3}
                py={4}
                px={5}
            >
                <HStack space={2} alignItems={'center'}>
                    <Box>
                        <Text fontSize='md' fontWeight='bold' mb={2}>
                            {libro.titulo}
                        </Text>
                        <Text fontSize='sm' color='gray.500'>
                            Autor: {libro.autor}
                        </Text>
                        <Text fontSize='sm' color='green.500' mt={2}>
                            Precio: ${libro.precio}
                        </Text>
                    </Box>
                </HStack>
            </Box>
        </TouchableOpacity>
    );
};

export default LibroCard;