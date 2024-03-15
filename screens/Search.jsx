import React, {useState} from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

const Search = () => {

    const [search, setSearch] = useState("");
  
    const updateSearch = (search) => {
      setSearch(search);
    };

    return (
    <View style={styles.view}>
        <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        style={styles.searchBar}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    view: {
    margin: 10,
    backgroundColor: "white"
    },
    searchBar: {
        backgroundColor: "white"
    }
});

export default Search;