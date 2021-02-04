import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const filterResults = (results, price)=> {
    return results.filter((result) => {
        return result.price === price;
    });
};

const SearchScreen = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMsg] = useSearch();
    return(
        <View style={{flex: 1}}>
            <SearchBar 
                searchTerm = {searchTerm}
                setSearchTerm = {setSearchTerm}
                inputEnded = {() => searchApi(searchTerm)}
            />
            {errorMsg.length?<Text>{errorMsg}</Text>:null}
            <ScrollView>
                <ResultsList results={filterResults(results, '$$$')}    header ='Expensive Restaurants' />
                <ResultsList results={filterResults(results, '$$')}     header ='Moderately Priced Restaurant' />
                <ResultsList results={filterResults(results, '$')}      header ='Affordable Restaurants' />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default SearchScreen;