import React, { useState } from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);

export const BookForm = (route) => {
    const {creatingBook} = route.params;

    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        isbn: '',
        precio: '',
        genero: '',
        sinopsis: '',
        foto: ''
    })

    const handlePublicarLibro = () => {
        if (creatingBook){
            const newBook = {...formData}
        }
        // Definir el comportamiento del boton en base al parametro que llegue CreatingBook true or false 
    }

    return (
        <StyledView className="container">
            <form className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="titulo" id="titulo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Ej: Señor de los anillos" required />
                    <label htmlFor="titulo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Titulo</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="autor" id="autor" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Ej: Tolkien" required />
                    <label htmlFor="autor" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Autor</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="isbn" id="isbn" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Ej: 0000" required />
                    <label htmlFor="isbn" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ISBN</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="precio" id="precio" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Ej: 0000" required />
                    <label htmlFor="precio" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Precio</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="genero" id="genero" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Ej: 0000" required />
                    <label htmlFor="genero" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Genero</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="sinopsis" id="sinopsis" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Ej: 0000" required />
                    <label htmlFor="sinopsis" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sinopsis</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="foto" id="foto" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Ej: 0000" required />
                    <label htmlFor="foto" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Foto</label>
                </div>
                
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

            {/* <FormControl>
                <Stack space={5}>
                    <Stack>
                        <FormControl.Label>Titulo</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="Ej: Señor de los anillos" value = {formData.titulo} />
                    </Stack>
                    <Stack>
                        <FormControl.Label>Autor</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="Ej: Tolkien" value = {formData.autor} />
                    </Stack>
                    <Stack>
                        <FormControl.Label>ISBN</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="Ej: 559873" value = {formData.isbn}/>
                    </Stack>
                    <Stack>
                        <FormControl.Label>Precio</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="$" value = {formData.precio}/>
                    </Stack>
                    <Stack>
                        <FormControl.Label>Genero</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="Ej: Ficcion" value = {formData.genero}/>
                    </Stack>
                    <Stack>
                        <FormControl.Label>Sinopsis</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="Ej: Sinopsis" value = {formData.sinopsis} />
                    </Stack>
                    <Stack>
                        <FormControl.Label>Foto</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="img" value = {formData.foto}/>
                    </Stack>
                </Stack>
            </FormControl>

            <Button
                maxWidth={40}
                my={10}
                onPress={() => handlePublicarLibro}>Publicar</Button>  */}
        </StyledView>

    )
}

export default BookForm