import React from "react";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { Card, Image, Text } from "@rneui/themed";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const LibroCard = ({ libro, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View 
        style={styles.container}>
        <Card 
          containerStyle= {{backgroundColor: "#e9ecef", borderRadius: 10}}
          >
          <View 
            style={styles.card}>
            <Image 
                style={styles.image} 
                source={{ uri: libro.url_foto }} 
            />
            <View style={styles.textContainer}>
              <View style={styles.precioContainer}>
                <Text style={styles.precio}>$ {libro.precio}</Text>
              </View>
              <Text
                  style={styles.titulo}>
                  {libro.titulo}
              </Text>
              <Text
                  style={styles.autor}>
                  {libro.autor}
              </Text>
            </View>
          </View>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    height: "100%",
    paddingHorizontal: 5,
    textAlign: "left"
  },
  image: {
    width: 80,
    height: 150,
    alignItems: "center"
  },
  textContainer: {
    textAlign: "left",
  },
  precioContainer: {
    marginTop: 5,
    backgroundColor: "#00b4d8",
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
  },
  precio: {
    color: "white",
    fontSize: 14
  },
  titulo: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 8
  },
  autor: {
    fontSize: 12,
    fontWeight: "normal",
    marginTop: 8
  }
});

export default LibroCard;
