import React from 'react';
import { Input, Stack, FormControl, Box, Button } from 'native-base';

export const CreateBook = () => {
    const handlePublicarLibro = () => { 
        // Llamar al service y crear libro
    }

  return (
    <Box /* style={{ width: '90%', height: '80%', margin: '5%' }} */
    maxWidth={'90%'}
    height={'80%'}
    margin={'5%'}
    >
        <FormControl>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Titulo</FormControl.Label>
              <Input variant="underlined" p={2} placeholder="Ej: Señor de los anillos" />
            </Stack>
            <Stack>
              <FormControl.Label>Autor</FormControl.Label>
              <Input variant="underlined" p={2} placeholder="Ej: Tolkien" />
            </Stack>
            <Stack>
              <FormControl.Label>ISBN</FormControl.Label>
              <Input variant="underlined" p={2} placeholder="Ej: 559873" />
            </Stack>
            <Stack>
              <FormControl.Label>Precio</FormControl.Label>
              <Input variant="underlined" p={2} placeholder="Precio" />
            </Stack>
            <Stack>
              <FormControl.Label>Genero</FormControl.Label>
              <Input variant="underlined" p={2} placeholder="Ej: Ficcion" />
            </Stack>
            <Stack>
              <FormControl.Label>Sinopsis</FormControl.Label>
              <Input variant="underlined" p={2} placeholder="Ej: Sinopsis" />
            </Stack>
            <Stack>
              <FormControl.Label>Foto</FormControl.Label>
              <Input variant="underlined" p={2} placeholder="img" />
            </Stack>
          </Stack>
        </FormControl>
        
        <Button
        maxWidth={40}
        my={10}
        onPress={() => handlePublicarLibro}>Publicar</Button>

    </Box>

  )
}

export default CreateBook