import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({searchTerm, setSearchTerm, inputEnded}) => {
    return (
        <View style={styles.BackgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                value={searchTerm}
                onChangeText={setSearchTerm/* (newTerm)=>setSearchTerm(newTerm)*/}    
                onEndEditing={inputEnded/*()=>inputEnded())*/}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    BackgroundStyle:{
        backgroundColor: 'lightgray',
        height: 40,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        color: 'black',
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 5
    }
});

export default SearchBar;