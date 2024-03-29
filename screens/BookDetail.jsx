import { ScrollView, StyleSheet, View } from "react-native";
import { Libro } from "../model/libro_model";
import { Button, Card, Icon, Text } from "@rneui/themed";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import { CardImage } from "@rneui/base/dist/Card/Card.Image";

const BookDetail = ({ route, navigation }) => {
  const { selectedLibro } = route.params;
  const { titulo, autor, sinopsis, genero, ISBN, precio, url_foto } =
    selectedLibro;
  console.log(selectedLibro);
  console.log(route.params);

  const handleBorrarLibro = (libro) => {
    // Implementar la lógica para borrar el libro aquí
  };

  const handleEditarLibro = (libro) => {
    navigation.navigate("Create", { creatingBook: false });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <View>
            <CardTitle>Detalles</CardTitle>
            <CardDivider />
            <CardImage
              style={styles.image}
              source={{
                uri: url_foto,
              }}
            />
            <Text style={styles.text}>{titulo}</Text>
            <Text style={styles.text}>{autor}</Text>
            <Text style={styles.text}>{sinopsis}</Text>
            <Button
              icon={
                <Icon
                  name="code"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Editar"
              onPress={() => navigation.navigate("Create")}
            />
            <Button>Borrar</Button>
            </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center"
  },
  text: {
    marginBottom: 10
  },
  image: {
    width: 200,
    height: 300
  }
});

export default BookDetail;
