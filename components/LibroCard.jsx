import React from "react";
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { Card, Image } from '@rneui/themed';
import {StyleSheet, TouchableOpacity, View} from "react-native";

const LibroCard = ({libro, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Card>
                    <View style={styles.card}>
                        <Image
                            style= {styles.image}
                            source={{uri: libro.url_foto}}
                        />
                        <CardTitle style = {styles.titulo}>
                            {libro.titulo}
                        </CardTitle>
                        <CardTitle>
                            {libro.autor}
                        </CardTitle>
                    </View>

                </Card>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    card: {
        width: 80,
        height: 200,
        padding: 5
    },
    image: {
        width: 50,
        height: 100
    },
    titulo: {
        fontSize: 10,
        fontWeight: "bold"
    }
});

export default LibroCard;